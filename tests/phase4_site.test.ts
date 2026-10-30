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
      if (!path.endsWith('.html')) continue;
      for (const [, href] of html.matchAll(/href="([^"#]+)"/g)) {
        if (/^https?:/.test(href!)) continue;
        const target = posix.normalize(posix.join(posix.dirname(path), href!));
        const ok = site.has(target) || (target.startsWith('../library/') && libraryFiles.has(target.slice(3)));
        if (!ok) broken.push(`${path} -> ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('renders the part number index, document index, and shared assets', () => {
    const parts = site.get('parts.html') as string;
    expect(parts).toContain('BMSY500AAA0100011');
    expect(parts).toContain('PXC100-E.D');
    expect(site.has('documents.html')).toBe(true);
    for (const asset of ['assets/site.css', 'assets/site.js', 'assets/search-index.js'])
      expect(site.has(asset)).toBe(true);
  });

  it('builds a search index with part numbers that cannot break out of the script tag', () => {
    const idx = site.get('assets/search-index.js') as string;
    expect(idx).toContain('"BMSY500AAA0100011"');
    const evil = { ...pages[0]!, title: '</script><b>x</b>' };
    const js = renderSite({ pages: [evil], library: [], hasFile: () => false }).get('assets/search-index.js') as string;
    expect(js).not.toContain('</script>');
  });

  it('puts every page in the sidebar tree and marks the current one', () => {
    const html = site.get('product/pxc100-e-d.html') as string;
    expect(html).toContain('<li class="cur"><a href="../product/pxc100-e-d.html">');
    for (const m of pages.filter((p) => p.type === 'manufacturer'))
      expect(html).toContain(`href="../manufacturer/${m.id}.html"`);
  });

  it('escapes HTML in page content', () => {
    const evil = { ...pages[0]!, title: '<script>alert(1)</script>', summary: 'a & b' };
    const html = renderSite({ pages: [evil], library: [], hasFile: () => false }).get(`${evil.type}/${evil.id}.html`)!;
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;');
    expect(html).toContain('a &amp; b');
  });

  it('marks pages that are not verified', () => {
    expect(site.get('product/symbio-500.html')).toContain('class="note needs-review"');
  });
});
