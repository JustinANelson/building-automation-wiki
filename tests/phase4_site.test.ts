import { posix } from 'node:path';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { renderSite } from '../src/site/render.js';
import { validateContent } from '../src/index.js';

const { pages, library } = validateContent(resolve(__dirname, '..'));
const site = renderSite({ pages, library, hasFile: () => true });

describe('Phase 4: static site rendering', () => {
  it('renders an index and one page per wiki page', () => {
    expect(site.has('index.html')).toBe(true);
    for (const p of pages) expect(site.has(`${p.type}/${p.id}.html`)).toBe(true);
  });

  it('has no broken internal links', () => {
    const broken: string[] = [];
    const libraryFiles = new Set(library.map((d) => d.file));
    for (const [path, html] of site) {
      for (const [, href] of html.matchAll(/href="([^"#]+)"/g)) {
        if (/^https?:/.test(href!)) continue;
        const target = posix.normalize(posix.join(posix.dirname(path), href!));
        const ok = site.has(target) || (target.startsWith('../library/') && libraryFiles.has(target.slice(3)));
        if (!ok) broken.push(`${path} -> ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('escapes HTML in page content', () => {
    const evil = { ...pages[0]!, title: '<script>alert(1)</script>', summary: 'a & b' };
    const html = renderSite({ pages: [evil], library: [], hasFile: () => false }).get(`${evil.type}/${evil.id}.html`)!;
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;');
    expect(html).toContain('a &amp; b');
  });

  it('marks pages that are not verified', () => {
    expect(site.get('product/symbio-500.html')).toContain('review: needs-review');
  });
});
