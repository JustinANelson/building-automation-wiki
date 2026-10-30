import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { splitFrontmatter } from '../src/content/loader.js';
import { type RawPage, parsePages, validatePages } from '../src/domain/validate.js';
import { validateContent } from '../src/index.js';

const raw = (file: string, data: Record<string, unknown>): RawPage => ({ file, data, body: '' });

const base = { summary: 's', review: 'draft' };
const mfr = raw('m.md', { ...base, id: 'acme', type: 'manufacturer', title: 'Acme' });
const proto = raw('p.md', { ...base, id: 'bacnet', type: 'protocol', title: 'BACnet' });
const product = (extra: Record<string, unknown> = {}) =>
  raw('prod.md', {
    ...base,
    id: 'x1',
    type: 'product',
    title: 'X1',
    manufacturer: 'acme',
    category: 'controller',
    partNumbers: [{ number: 'X-1' }],
    ...extra,
  });

const messages = (raws: RawPage[], images: string[] = []) => {
  const { pages, issues } = parsePages(raws);
  return [...issues, ...validatePages(pages, new Set(images))].map((i) => i.message);
};

describe('Phase 1: frontmatter parsing', () => {
  it('splits YAML frontmatter from the body, tolerating a BOM', () => {
    const { data, body } = splitFrontmatter('﻿---\nid: a\n---\nHello\n');
    expect(data).toEqual({ id: 'a' });
    expect(body).toBe('Hello\n');
  });

  it('reports schema errors per field', () => {
    expect(messages([raw('bad.md', { id: 'Bad Id', type: 'product' })])).toEqual(
      expect.arrayContaining([expect.stringContaining('id:'), expect.stringContaining('title:')]),
    );
  });
});

describe('Phase 1: cross-page validation', () => {
  it('accepts a well-formed product', () => {
    expect(messages([mfr, proto, product({ protocols: ['bacnet'] })])).toEqual([]);
  });

  it('flags duplicate ids and dangling references', () => {
    const out = messages([mfr, mfr, product({ related: ['ghost'] })]);
    expect(out).toContain('duplicate id "acme" (also in m.md)');
    expect(out).toContain('related references unknown page "ghost"');
  });

  it('requires references to point at the right page type', () => {
    expect(messages([mfr, product({ protocols: ['acme'] })])).toContain(
      'protocols "acme" must be a protocol page, found manufacturer',
    );
  });

  it('requires manufacturer, category and a part number on products', () => {
    const out = messages([raw('p.md', { ...base, id: 'x2', type: 'product', title: 'X2' })]);
    expect(out).toEqual(
      expect.arrayContaining([
        'product pages require a manufacturer',
        'product pages require a category',
        'product pages require at least one part number',
      ]),
    );
  });

  it('flags a part number shared by two products from the same manufacturer', () => {
    const dup = raw('dup.md', { ...(product().data as object), id: 'x2' });
    expect(messages([mfr, product(), dup])).toContain('part number X-1 also listed on "x1"');
  });

  it('requires image provenance and an existing file', () => {
    const noProvenance = messages([mfr, product({ images: [{ path: 'images/a.jpg', alt: 'a' }] })]);
    expect(noProvenance.join()).toMatch(/images\.0\.source/);
    expect(noProvenance.join()).toMatch(/images\.0\.license/);

    const img = { path: 'images/a.jpg', alt: 'a', source: 'https://example.com', license: 'CC-BY-4.0' };
    expect(messages([mfr, product({ images: [img] })])).toContain('image file not found: images/a.jpg');
    expect(messages([mfr, product({ images: [img] })], ['images/a.jpg'])).toEqual([]);
  });

  it('refuses to mark a page verified without a source', () => {
    expect(messages([mfr, product({ review: 'verified' })])).toContain('verified pages must cite at least one source');
  });
});

describe('Phase 1: seed content', () => {
  it('loads and validates cleanly', () => {
    const { pages, issues } = validateContent(resolve(__dirname, '../content'));
    expect(issues).toEqual([]);
    expect(pages.filter((p) => p.type === 'product').length).toBeGreaterThan(0);
  });
});
