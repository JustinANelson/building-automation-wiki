import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { downloadMissing, ingestDownloads, verifyLibrary } from '../src/content/library.js';
import {
  type DownloadResult,
  type LibraryEntry,
  classifyDownload,
  parseDownloadName,
  parseLibrary,
  validateLibrary,
} from '../src/domain/library.js';
import { parsePages } from '../src/domain/validate.js';

const entry = (over: Partial<LibraryEntry> = {}): LibraryEntry => ({
  id: 'doc-1',
  title: 'Doc',
  kind: 'datasheet',
  url: 'https://example.com/doc.pdf',
  file: 'library/acme/x1/datasheet/doc.pdf',
  pages: ['x1'],
  language: 'en',
  status: 'pending',
  ...over,
});

const pdf = (body = 'hello'): DownloadResult => ({
  status: 200,
  contentType: 'application/pdf',
  bytes: new TextEncoder().encode(`%PDF-1.7\n${body}`),
});

const { pages } = parsePages([
  { file: 'p.md', body: '', data: { id: 'x1', type: 'concept', title: 'X1', summary: 's' } },
]);

describe('Phase 2: library manifest validation', () => {
  it('accepts a well-formed pending entry', () => {
    expect(validateLibrary([entry()], pages)).toEqual([]);
  });

  it('rejects file paths outside the library layout', () => {
    const { issues } = parseLibrary([entry({ file: 'docs/doc.pdf' })]);
    expect(issues[0]?.message).toMatch(/library\/<mfr>/);
  });

  it('flags duplicates and unknown page references', () => {
    const out = validateLibrary([entry(), entry({ pages: ['ghost'] })], pages).map((i) => i.message);
    expect(out).toContain('duplicate id: doc-1');
    expect(out).toContain('duplicate url: https://example.com/doc.pdf');
    expect(out).toContain('doc-1: references unknown page "ghost"');
  });

  it('requires integrity fields on downloaded entries', () => {
    expect(validateLibrary([entry({ status: 'downloaded' })], pages)[0]?.message).toMatch(/sha256/);
  });
});

describe('Phase 2: download classification', () => {
  it('accepts a real PDF', () => {
    expect(classifyDownload(entry(), pdf()).status).toBe('downloaded');
  });

  it('rejects an HTML viewer page served with 200', () => {
    const html = { status: 200, contentType: 'text/html', bytes: new TextEncoder().encode('<!DOCTYPE html>') };
    expect(classifyDownload(entry(), html)).toEqual({ status: 'failed', note: 'not a PDF (text/html)' });
  });

  it('distinguishes blocked from missing', () => {
    expect(classifyDownload(entry(), { ...pdf(), status: 403 }).status).toBe('blocked');
    expect(classifyDownload(entry(), { ...pdf(), status: 404 })).toEqual({ status: 'failed', note: 'HTTP 404' });
  });
});

describe('Phase 2: downloading into the library', () => {
  let dir = '';
  afterEach(() => dir && rmSync(dir, { recursive: true, force: true }));

  it('writes the file, records the checksum, and verifies cleanly', async () => {
    dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
    const [done] = await downloadMissing(dir, [entry()], async () => pdf(), '2026-10-29');
    const bytes = readFileSync(join(dir, 'library/acme/x1/datasheet/doc.pdf'));
    expect(done).toMatchObject({ status: 'downloaded', retrieved: '2026-10-29', bytes: bytes.length });
    expect(done?.sha256).toBe(createHash('sha256').update(bytes).digest('hex'));
    expect(verifyLibrary(dir, [done as LibraryEntry])).toEqual([]);
  });

  it('does not re-fetch a file that is already downloaded', async () => {
    dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
    const [first] = await downloadMissing(dir, [entry()], async () => pdf(), '2026-10-29');
    const fetcher = async (): Promise<DownloadResult> => {
      throw new Error('should not be called');
    };
    const [second] = await downloadMissing(dir, [first as LibraryEntry], fetcher, '2026-11-01');
    expect(second).toEqual(first);
  });

  it('records failures without writing a file', async () => {
    dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
    const boom = async (): Promise<DownloadResult> => {
      throw new Error('network down');
    };
    const [done] = await downloadMissing(dir, [entry()], boom, '2026-10-29');
    expect(done).toMatchObject({ status: 'failed', note: 'network down' });
    expect(existsSync(join(dir, 'library/acme/x1/datasheet/doc.pdf'))).toBe(false);
  });

  it('detects tampering and missing files', async () => {
    dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
    const [done] = (await downloadMissing(dir, [entry()], async () => pdf(), '2026-10-29')) as [LibraryEntry];
    writeFileSync(join(dir, done.file), 'changed');
    expect(verifyLibrary(dir, [done])[0]?.message).toMatch(/sha256 does not match/);
    rmSync(join(dir, done.file));
    expect(verifyLibrary(dir, [done])[0]?.message).toMatch(/missing on disk/);
  });
});

describe('Phase 2: ingesting browser downloads', () => {
  let dir = '';
  afterEach(() => dir && rmSync(dir, { recursive: true, force: true }));

  const setup = () => {
    dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
    mkdirSync(join(dir, 'downloads'));
    return join(dir, 'downloads');
  };
  const withDoc = entry({ docId: 'A6V1' });

  it('parses Siemens-style download names', () => {
    expect(parseDownloadName('A6V10356040_de.pdf')).toEqual({ docId: 'A6V10356040', language: 'de' });
    expect(parseDownloadName('A6V10356040_en (1).pdf')).toEqual({ docId: 'A6V10356040', language: 'en' });
    expect(parseDownloadName('notes.txt')).toBeUndefined();
  });

  it('files a matching PDF, records its language and checksum, and leaves other files alone', () => {
    const dl = setup();
    writeFileSync(join(dl, 'A6V1_de.pdf'), '%PDF-1.4 body');
    writeFileSync(join(dl, 'unrelated.pdf'), '%PDF-1.4 other');
    const r = ingestDownloads(dir, dl, [withDoc], '2026-10-29');
    expect(r.entries[0]).toMatchObject({ status: 'downloaded', language: 'de', retrieved: '2026-10-29' });
    expect(existsSync(join(dir, withDoc.file))).toBe(true);
    expect(existsSync(join(dl, 'A6V1_de.pdf'))).toBe(false);
    expect(existsSync(join(dl, 'unrelated.pdf'))).toBe(true);
    expect(r.skipped).toEqual(['unrelated.pdf: no manifest entry for this filename']);
    expect(verifyLibrary(dir, r.entries)).toEqual([]);
  });

  it('rejects a file that is not a PDF and skips copies of an ingested document', () => {
    const dl = setup();
    writeFileSync(join(dl, 'A6V1_en.pdf'), '<html>login</html>');
    expect(ingestDownloads(dir, dl, [withDoc], '2026-10-29').skipped).toEqual(['A6V1_en.pdf: not a PDF']);

    writeFileSync(join(dl, 'A6V1_en.pdf'), '%PDF-1.4 ok');
    const first = ingestDownloads(dir, dl, [withDoc], '2026-10-29');
    writeFileSync(join(dl, 'A6V1_en (1).pdf'), '%PDF-1.4 ok');
    const again = ingestDownloads(dir, dl, first.entries, '2026-11-01');
    expect(again.skipped[0]).toMatch(/already in the library/);
    expect(again.entries).toEqual(first.entries);
  });
});
