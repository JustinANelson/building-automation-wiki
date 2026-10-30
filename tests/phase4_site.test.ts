import { runInNewContext } from 'node:vm';
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

  it('references images relative to the site, not the repository', () => {
    const withImage = pages.find((p) => p.images.length > 0)!;
    const html = site.get(`${withImage.type}/${withImage.id}.html`) as string;
    expect(html).toContain(`src="../${withImage.images[0]!.path}"`);
    expect(html).not.toContain('../content/');
  });

  it('renders the part number index, document index, and shared assets', () => {
    const parts = site.get('parts.html') as string;
    expect(parts).toContain('BMSY500AAA0100011');
    expect(parts).toContain('PXC100-E.D');
    expect(site.has('documents.html')).toBe(true);
    expect(site.has('random.html')).toBe(true);
    const rndHtml = site.get('random.html') as string;
    expect(rndHtml).toContain('Random page');
    expect(rndHtml).toContain('location.replace(item.u)');
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

  it('shows the part number a search matched, not the first one on the page', () => {
    const handlers: Record<string, () => void> = {};
    const box = { hidden: true, innerHTML: '', children: [], contains: () => false };
    const input = {
      value: '',
      addEventListener: (ev: string, fn: () => void) => {
        handlers[ev] = fn;
      },
    };
    const sandbox = {
      window: {
        BASWIKI_INDEX: [
          { t: 'Zone Controller', u: 'product/z.html', k: 'product', m: '', p: ['Z100A', 'Z200B', 'Z300C'], s: '' },
        ],
      },
      document: {
        body: { getAttribute: () => '../' },
        getElementById: (id: string) => (id === 'q' ? input : id === 'results' ? box : null),
        addEventListener: () => {},
        querySelectorAll: () => [],
        activeElement: null,
      },
      location: {},
    };
    runInNewContext(site.get('assets/site.js') as string, sandbox);
    input.value = 'Z300C';
    handlers.input!();
    expect(box.innerHTML).toContain('Z300C');
    expect(box.innerHTML).not.toContain('Z100A');
    input.value = 'Z';
    handlers.input!();
    expect(box.innerHTML).toContain('Z100A');
  });

  it('provides a client-side random page picker', () => {
    let targetUrl = '';
    const clickListeners: ((ev: { target: unknown; preventDefault: () => void }) => void)[] = [];
    const keyListeners: ((ev: { key: string; preventDefault: () => void; ctrlKey?: boolean; metaKey?: boolean; altKey?: boolean }) => void)[] = [];

    const sandbox = {
      window: {
        BASWIKI_INDEX: [
          { t: 'PXC4 Controller', u: 'product/pxc4.html', k: 'product', m: 'Siemens', p: ['PXC4.E16'], s: '' },
        ],
      },
      document: {
        body: { getAttribute: () => '../' },
        getElementById: () => null,
        addEventListener: (ev: string, fn: (arg: unknown) => void) => {
          if (ev === 'click') clickListeners.push(fn as (ev: { target: unknown; preventDefault: () => void }) => void);
          if (ev === 'keydown') keyListeners.push(fn as (ev: { key: string; preventDefault: () => void; ctrlKey?: boolean; metaKey?: boolean; altKey?: boolean }) => void);
        },
        querySelectorAll: () => [],
        activeElement: null,
      },
      location: {
        get href() {
          return targetUrl;
        },
        set href(val: string) {
          targetUrl = val;
        },
      },
      Math,
    };
    runInNewContext(site.get('assets/site.js') as string, sandbox);

    // Test click on .rnd link
    let prevented = false;
    const fakeLink = {
      classList: { contains: (cls: string) => cls === 'rnd' },
      parentElement: null,
    };
    for (const listener of clickListeners) {
      listener({ target: fakeLink, preventDefault: () => { prevented = true; } });
    }
    expect(prevented).toBe(true);
    expect(targetUrl).toBe('../product/pxc4.html');

    // Test 'r' shortcut key
    targetUrl = '';
    prevented = false;
    for (const listener of keyListeners) {
      listener({ key: 'r', preventDefault: () => { prevented = true; } });
    }
    expect(prevented).toBe(true);
    expect(targetUrl).toBe('../product/pxc4.html');
  });
});
