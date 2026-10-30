import { marked } from 'marked';
import type { LibraryEntry } from '../domain/library.js';
import type { Page } from '../domain/schema.js';
import { CLIENT_JS } from './client.js';
import { CSS } from './styles.js';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TYPE_LABEL: Record<Page['type'], string> = {
  manufacturer: 'Manufacturer',
  'product-line': 'Product line',
  product: 'Product',
  protocol: 'Protocol',
  concept: 'Concept',
};
const STATUS_LABEL: Record<Page['status'], string> = {
  current: 'Current',
  legacy: 'Legacy',
  'end-of-life': 'End of life',
  unknown: 'Unknown',
};
const REVIEW_LABEL: Record<Page['review'], string> = {
  draft: 'Draft',
  'needs-review': 'Needs review',
  verified: 'Verified',
};
const REVIEW_NOTE: Record<Exclude<Page['review'], 'verified'>, string> = {
  draft: 'Compiled from public documents and not yet checked by a person.',
  'needs-review':
    'Values were read from the cited documents. Confirm against current manufacturer literature before specifying or ordering.',
};

const byTitle = (a: Page, b: Page) => a.title.localeCompare(b.title);
const host = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};
const kb = (n?: number) => (n ? `${Math.max(1, Math.round(n / 1024)).toLocaleString('en-US')} KB` : '');

function pagePath(p: Page): string {
  return `${p.type}/${p.id}.html`;
}

export interface SiteInput {
  pages: Page[];
  library: LibraryEntry[];
  /** Whether a downloaded file exists on disk; supplied by the I/O layer so rendering stays pure. */
  hasFile: (path: string) => boolean;
}

/** Render every page, the index pages, and the shared assets. Returns a map of output path -> content. */
export function renderSite({ pages, library, hasFile }: SiteInput): Map<string, string> {
  const byId = new Map(pages.map((p) => [p.id, p]));
  const out = new Map<string, string>();
  const manufacturers = pages.filter((p) => p.type === 'manufacturer').sort(byTitle);
  const docsFor = (id: string) => library.filter((d) => d.pages.includes(id));
  const isLocal = (d: LibraryEntry) => d.status === 'downloaded' && hasFile(d.file);

  const link = (id: string, rel: string) => {
    const t = byId.get(id);
    return t ? `<a href="${rel}${pagePath(t)}">${esc(t.title)}</a>` : esc(id);
  };
  const status = (s: Page['status']) => `<span class="st ${s}">${STATUS_LABEL[s]}</span>`;
  const review = (r: Page['review']) => `<span class="rv ${r}">${REVIEW_LABEL[r]}</span>`;

  /** Left navigation: manufacturer > line > product tree, protocols, and the index pages. */
  function sidebar(rel: string, current?: Page): string {
    const li = (p: Page) =>
      `<li${p.id === current?.id ? ' class="cur"' : ''}><a href="${rel}${pagePath(p)}">${esc(p.title)}</a></li>`;
    const tree = manufacturers
      .map((m) => {
        const mine = pages.filter((p) => p.manufacturer === m.id && p.type !== 'manufacturer');
        const lines = mine.filter((p) => p.type === 'product-line').sort(byTitle);
        const loose = mine.filter((p) => p.type === 'product' && !p.productLine).sort(byTitle);
        const open =
          current &&
          (current.id === m.id || current.manufacturer === m.id || mine.some((p) => p.id === current.productLine))
            ? ' open'
            : '';
        const lineHtml = lines
          .map((l) => {
            const prods = mine.filter((p) => p.type === 'product' && p.productLine === l.id).sort(byTitle);
            return `<li${l.id === current?.id ? ' class="cur"' : ''}><a href="${rel}${pagePath(l)}">${esc(l.title)}</a>${
              prods.length ? `<ul>${prods.map(li).join('')}</ul>` : ''
            }</li>`;
          })
          .join('');
        const cls = m.id === current?.id ? ' class="cur"' : '';
        return `<details${open}><summary><a${cls} href="${rel}${pagePath(m)}">${esc(m.title)}</a></summary><ul>${lineHtml}${loose.map(li).join('')}</ul></details>`;
      })
      .join('');
    const section = (type: Page['type']) =>
      pages
        .filter((p) => p.type === type)
        .sort(byTitle)
        .map(li)
        .join('');
    return `<aside class="side" aria-label="Contents"><h3>Manufacturers</h3>${tree}<h3>Protocols</h3><ul class="flat">${section('protocol')}</ul><h3>Concepts</h3><ul class="flat">${section('concept')}</ul><h3>Indexes</h3><ul class="flat"><li><a href="${rel}parts.html">All part numbers</a></li><li><a href="${rel}documents.html">All documents</a></li></ul></aside>`;
  }

  function layout(title: string, rel: string, body: string, current?: Page, crumbs: string[] = []): string {
    const trail = crumbs.length
      ? `<div class="crumbs"><a href="${rel}index.html">Home</a>${crumbs.map((c) => `<i>/</i>${c}`).join('')}</div>`
      : '';
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} - BASWiki</title><link rel="stylesheet" href="${rel}assets/site.css"></head>
<body data-rel="${rel}"><header class="bar"><a class="brand" href="${rel}index.html"><b>BASWiki</b><span>Building automation reference</span></a>
<nav><a href="${rel}parts.html">Part numbers</a><a href="${rel}documents.html">Documents</a></nav>
<div class="search"><input id="q" type="search" autocomplete="off" spellcheck="false" placeholder="Part number or name  ( / )" aria-label="Search"><ul id="results" hidden></ul></div></header>
<div class="shell">${sidebar(rel, current)}<main>${trail}${body}<footer>Content is compiled from manufacturer documents and cited per page. Verify before specifying or ordering.</footer></main></div>
<script src="${rel}assets/search-index.js"></script><script src="${rel}assets/site.js"></script></body></html>`;
  }

  const row = (label: string, value: string) => `<tr><th>${label}</th><td>${value}</td></tr>`;

  /** Table of related pages (products in a line, lines of a manufacturer, ...). */
  const memberTable = (rel: string, members: Page[]) =>
    `<table class="t"><thead><tr><th>Name</th><th>Category</th><th>Lifecycle</th><th class="n">Part nos.</th><th>Review</th></tr></thead><tbody>${members
      .map(
        (q) =>
          `<tr><td><a href="${rel}${pagePath(q)}">${esc(q.title)}</a><div class="muted">${esc(q.summary)}</div></td><td>${esc(q.category ?? TYPE_LABEL[q.type].toLowerCase())}</td><td>${status(q.status)}</td><td class="n">${q.partNumbers.length || ''}</td><td>${review(q.review)}</td></tr>`,
      )
      .join('')}</tbody></table>`;

  const docTable = (rel: string, docs: LibraryEntry[], showPages = false) =>
    `<table class="t"${showPages ? ' id="doctable"' : ''}><thead><tr><th>Type</th><th>Title</th><th>Document no.</th><th>Lang</th><th class="n">Size</th><th>Copy</th>${
      showPages ? '<th>Supports</th>' : ''
    }</tr></thead><tbody>${docs
      .map((d) => {
        const local = isLocal(d);
        const title = local
          ? `<a href="${rel}../${esc(d.file)}">${esc(d.title)}</a>`
          : `<a href="${esc(d.url)}">${esc(d.title)}</a>`;
        const copy = local
          ? `<span class="st current">Archived</span>`
          : `<span class="st unknown">Not archived</span> <span class="muted">(<a href="${esc(d.url)}">source</a>)</span>`;
        const supports = showPages ? `<td>${d.pages.map((id) => link(id, rel)).join(', ')}</td>` : '';
        return `<tr><td>${esc(d.kind)}</td><td>${title}</td><td class="mono">${esc(d.docId ?? '')}</td><td>${esc(d.language)}</td><td class="n">${local ? kb(d.bytes) : ''}</td><td>${copy}</td>${supports}</tr>`;
      })
      .join('')}</tbody></table>`;

  // ---- one page per wiki page ----
  for (const p of pages) {
    const rel = '../';
    const manufacturer = p.manufacturer ? byId.get(p.manufacturer) : undefined;
    const line = p.productLine ? byId.get(p.productLine) : undefined;
    const crumbs: string[] = [];
    if (manufacturer && manufacturer.id !== p.id) crumbs.push(link(manufacturer.id, rel));
    if (line && line.id !== p.id) crumbs.push(link(line.id, rel));
    crumbs.push(esc(p.title));

    const members = pages.filter(
      (q) => q.id !== p.id && (q.manufacturer === p.id || q.productLine === p.id || q.protocols.includes(p.id)),
    );
    const docs = docsFor(p.id);

    const info: string[] = [];
    if (manufacturer && manufacturer.id !== p.id) info.push(row('Manufacturer', link(manufacturer.id, rel)));
    if (line && line.id !== p.id) info.push(row('Product line', link(line.id, rel)));
    if (p.category) info.push(row('Category', esc(p.category)));
    if (p.type !== 'protocol' && p.type !== 'concept' && p.type !== 'manufacturer') {
      info.push(row('Lifecycle', status(p.status)));
    }
    if (p.protocols.length) info.push(row('Protocols', p.protocols.map((id) => link(id, rel)).join(', ')));
    if (p.replacedBy) info.push(row('Replaced by', link(p.replacedBy, rel)));
    if (p.type === 'product') info.push(row('Part numbers', String(p.partNumbers.length)));
    if (p.type === 'manufacturer' || p.type === 'product-line' || p.type === 'protocol') {
      info.push(row(p.type === 'manufacturer' ? 'Pages' : 'Used by', String(members.length)));
    }
    if (docs.length) info.push(row('Documents', `${docs.filter(isLocal).length} archived of ${docs.length}`));
    info.push(row('Review', review(p.review)));

    let html = `<div class="kind">${TYPE_LABEL[p.type]}</div><h1>${esc(p.title)}</h1>`;
    html += `<div class="art"><table class="info"><caption>${esc(p.title)}</caption><tbody>${info.join('')}</tbody></table><div class="txt">`;
    html += `<p class="lede">${esc(p.summary)}</p>`;
    if (p.review !== 'verified') {
      html += `<div class="note ${p.review}"><b>${REVIEW_LABEL[p.review]}.</b>${REVIEW_NOTE[p.review]}</div>`;
    }

    if (p.partNumbers.length) {
      html += `<h2>Part numbers</h2><table class="t"><thead><tr><th>Part number</th><th>Description</th><th>Source</th></tr></thead><tbody>${p.partNumbers
        .map(
          (n) =>
            `<tr><td><span class="pn" title="Click to copy">${esc(n.number)}</span></td><td>${esc(n.description ?? '')}</td><td>${
              n.source
                ? `<a href="${esc(n.source)}">${esc(host(n.source))}</a>`
                : '<span class="muted">none cited</span>'
            }</td></tr>`,
        )
        .join('')}</tbody></table>`;
    }

    if (p.images.length) {
      html += `<h2>Images</h2>${p.images
        .map(
          (i) =>
            `<figure><img src="${rel}../content/${esc(i.path)}" alt="${esc(i.alt)}"><figcaption>${esc(i.alt)}. ${esc(i.license)}; ${esc(i.source)}</figcaption></figure>`,
        )
        .join('')}`;
    } else if (p.type === 'product') {
      html += '<h2>Images</h2><p class="empty">No licensed images yet.</p>';
    }

    if (members.length) {
      const lines = members.filter((q) => q.type === 'product-line').sort(byTitle);
      const rest = members.filter((q) => q.type !== 'product-line').sort(byTitle);
      if (lines.length) html += `<h2>Product lines</h2>${memberTable(rel, lines)}`;
      if (rest.length)
        html += `<h2>${p.type === 'protocol' ? 'Used by' : 'Products and pages'}</h2>${memberTable(rel, rest)}`;
    }

    if (docs.length)
      html += `<h2>Documents<small>${docs.filter(isLocal).length} of ${docs.length} archived locally</small></h2>${docTable(rel, docs)}`;
    if (p.body.trim()) html += `<h2>Notes</h2><div class="body">${marked.parse(p.body, { async: false })}</div>`;
    if (p.related.length) html += `<h2>See also</h2><p>${p.related.map((id) => link(id, rel)).join(' &middot; ')}</p>`;
    if (p.sources.length) {
      html += `<h2>Sources</h2><table class="t"><tbody>${p.sources
        .map((s) => `<tr><td class="mono">${esc(host(s))}</td><td><a href="${esc(s)}">${esc(s)}</a></td></tr>`)
        .join('')}</tbody></table>`;
    }
    html += '</div></div>';
    out.set(pagePath(p), layout(p.title, rel, html, p, crumbs));
  }

  // ---- part number index ----
  const parts = pages
    .filter((p) => p.partNumbers.length)
    .flatMap((p) => p.partNumbers.map((n) => ({ n, p })))
    .sort((a, b) => a.n.number.localeCompare(b.n.number, 'en', { numeric: true }));
  out.set(
    'parts.html',
    layout(
      'All part numbers',
      '',
      `<div class="kind">Index</div><h1>All part numbers</h1><p class="lead">${parts.length} part numbers across ${new Set(parts.map((x) => x.p.id)).size} products. Click a part number to copy it.</p>
<input class="filter" data-filter="parttable" placeholder="Filter by part number, description or manufacturer" aria-label="Filter">
<table class="t" id="parttable"><thead><tr><th>Part number</th><th>Description</th><th>Manufacturer</th><th>Page</th><th>Review</th></tr></thead><tbody>${parts
        .map(
          ({ n, p }) =>
            `<tr><td><span class="pn">${esc(n.number)}</span></td><td>${esc(n.description ?? '')}</td><td>${p.manufacturer ? link(p.manufacturer, '') : ''}</td><td><a href="${pagePath(p)}">${esc(p.title)}</a></td><td>${review(p.review)}</td></tr>`,
        )
        .join('')}</tbody></table>`,
    ),
  );

  // ---- document index ----
  const docsSorted = [...library].sort((a, b) => a.file.localeCompare(b.file));
  out.set(
    'documents.html',
    layout(
      'All documents',
      '',
      `<div class="kind">Index</div><h1>All documents</h1><p class="lead">${docsSorted.filter(isLocal).length} of ${docsSorted.length} catalogued manufacturer documents are archived locally. The PDFs themselves are not part of the repository; the manifest records the source and checksum.</p>
<input class="filter" data-filter="doctable" placeholder="Filter by title, document number, type or language" aria-label="Filter">${docTable('', docsSorted, true)}`,
    ),
  );

  // ---- home ----
  const reviewCounts = (['draft', 'needs-review', 'verified'] as const).map((r) => ({
    r,
    n: pages.filter((p) => p.type === 'product' && p.review === r).length,
  }));
  const coverage = manufacturers
    .map((m) => {
      const mine = pages.filter((p) => p.manufacturer === m.id);
      const prods = mine.filter((p) => p.type === 'product');
      return `<tr><td><a href="${pagePath(m)}">${esc(m.title)}</a></td><td class="n">${mine.filter((p) => p.type === 'product-line').length}</td><td class="n">${prods.length}</td><td class="n">${prods.reduce((s, p) => s + p.partNumbers.length, 0)}</td><td class="n">${library.filter((d) => d.pages.some((id) => mine.some((p) => p.id === id) || id === m.id)).filter(isLocal).length}</td></tr>`;
    })
    .join('');
  out.set(
    'index.html',
    layout(
      'Home',
      '',
      `<h1>Building automation reference</h1>
<p class="lead">Controllers, field devices, protocols and manufacturer documents for building automation systems and direct digital controls. Starting with Siemens, Phoenix Controls, Viconics and Trane.</p>
<p class="lead">Search by part number or name from the header, for example BMSY500 or PXC100. Press / from anywhere on the site.</p>
<h2>Coverage</h2>
<table class="t compact"><thead><tr><th>Manufacturer</th><th class="n">Lines</th><th class="n">Products</th><th class="n">Part nos.</th><th class="n">Docs archived</th></tr></thead><tbody>${coverage}</tbody></table>
<h2>Sourcing and review</h2>
<p class="body">Every part number is taken from a cited manufacturer document, and nothing is filled in from memory. Product pages are marked
${reviewCounts.map((x) => `<b>${x.n}</b> ${REVIEW_LABEL[x.r].toLowerCase()}`).join(', ')}.
Pages that could not be sourced say so instead of guessing.</p>
<h2>Indexes</h2>
<p><a href="parts.html">All part numbers</a> &middot; <a href="documents.html">All documents</a></p>`,
    ),
  );

  // ---- assets ----
  out.set('assets/site.css', CSS);
  out.set('assets/site.js', CLIENT_JS);
  out.set(
    'assets/search-index.js',
    `window.BASWIKI_INDEX=${JSON.stringify(
      pages.map((p) => ({
        t: p.title,
        u: pagePath(p),
        k: TYPE_LABEL[p.type].toLowerCase(),
        m: p.manufacturer ? (byId.get(p.manufacturer)?.title ?? '') : '',
        p: p.partNumbers.map((n) => n.number),
        s: p.summary,
      })),
    ).replace(/</g, '\\u003c')};`,
  );
  return out;
}
