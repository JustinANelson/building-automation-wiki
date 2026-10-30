import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { parse, stringify } from 'yaml';
import { type DownloadResult, type LibraryEntry, classifyDownload, parseLibrary } from '../domain/library.js';
import type { Issue } from '../domain/validate.js';

const MANIFEST = 'content/library.yaml';

export function loadLibrary(repoRoot: string): { entries: LibraryEntry[]; issues: Issue[] } {
  const path = join(repoRoot, MANIFEST);
  if (!existsSync(path)) return { entries: [], issues: [] };
  return parseLibrary(parse(readFileSync(path, 'utf8')));
}

export function saveLibrary(repoRoot: string, entries: LibraryEntry[]): void {
  writeFileSync(join(repoRoot, MANIFEST), stringify(entries, { lineWidth: 0 }));
}

export type Fetcher = (url: string) => Promise<DownloadResult>;

export const httpFetcher: Fetcher = async (url) => {
  const res = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(60_000),
    headers: { 'user-agent': 'BASWiki/0.1 (personal documentation library)' },
  });
  return {
    status: res.status,
    contentType: res.headers.get('content-type') ?? '',
    bytes: new Uint8Array(await res.arrayBuffer()),
  };
};

/**
 * Download every entry that is not yet on disk. `today` is injected so results are reproducible.
 * Returns the updated entries; callers persist them with `saveLibrary`.
 */
export async function downloadMissing(
  repoRoot: string,
  entries: LibraryEntry[],
  fetcher: Fetcher,
  today: string,
): Promise<LibraryEntry[]> {
  const out: LibraryEntry[] = [];
  for (const entry of entries) {
    const target = join(repoRoot, entry.file);
    if (entry.status === 'downloaded' && existsSync(target)) {
      out.push(entry);
      continue;
    }
    let next: LibraryEntry;
    try {
      const r = await fetcher(entry.url);
      const verdict = classifyDownload(entry, r);
      if (verdict.status === 'downloaded') {
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, r.bytes);
        next = {
          ...entry,
          status: 'downloaded',
          sha256: createHash('sha256').update(r.bytes).digest('hex'),
          bytes: r.bytes.length,
          retrieved: today,
          note: undefined,
        };
      } else {
        next = { ...entry, status: verdict.status, note: verdict.note };
      }
    } catch (e) {
      next = { ...entry, status: 'failed', note: e instanceof Error ? e.message : String(e) };
    }
    out.push(next);
  }
  return out;
}

/** Re-hash files on disk; reports missing files and checksum mismatches for downloaded entries. */
export function verifyLibrary(repoRoot: string, entries: LibraryEntry[]): Issue[] {
  const issues: Issue[] = [];
  for (const e of entries.filter((x) => x.status === 'downloaded')) {
    const path = join(repoRoot, e.file);
    if (!existsSync(path)) {
      issues.push({ file: e.file, message: 'listed as downloaded but missing on disk' });
    } else if (createHash('sha256').update(readFileSync(path)).digest('hex') !== e.sha256) {
      issues.push({ file: e.file, message: 'sha256 does not match manifest' });
    }
  }
  return issues;
}
