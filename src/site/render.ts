import { marked } from 'marked';
import type { LibraryEntry } from '../domain/library.js';
import type { Page } from '../domain/schema.js';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const TYPE_ORDER: Page['type'][] = ['manufacturer', 'product-line', 'product', 'protocol', 'concept'];
const TYPE_LABEL: Record<Page['type'], string> = {
  manufacturer: 'Manufacturers',
  'product-line': 'Product lines',
  product: 'Products',
  protocol: 'Protocols',
  concept: 'Concepts',
};

const CSS = `
:root{--bg:#fff;--fg:#1c2128;--muted:#5b6672;--line:#d7dde3;--accent:#0b5cad;--card:#f5f7fa;--warn:#9a5b00}
@media (prefers-color-scheme:dark){:root{--bg:#14181d;--fg:#e4e8ec;--muted:#98a3ae;--line:#2c333b;--accent:#6cb2ff;--card:#1c2229;--warn:#f0b14a}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 system-ui,sans-serif}
main{max-width:960px;margin:0 auto;padding:24px 16px 64px}
a{color:var(--accent)}h1{margin:.2em 0}h2{margin-top:1.8em;border-bottom:1px solid var(--line);padding-bottom:.2em}
nav.top{padding:10px 16px;border-bottom:1px solid var(--line)}nav.top a{font-weight:600;text-decoration:none}
.badges span{display:inline-block;margin:0 6px 6px 0;padding:2px 10px;border-radius:99px;background:var(--card);border:1px solid var(--line);font-size:13px;color:var(--muted)}
.badges .warn{color:var(--warn);border-color:var(--warn)}
table{border-collapse:collapse;width:100%}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid var(--line);vertical-align:top}
td.pn{font-family:ui-monospace,monospace;white-space:nowrap}
.summary{font-size:18px;color:var(--muted)}.card{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:10px 14px;margin:8px 0}
input[type=search]{width:100%;padding:10px 12px;font-size:16px;border:1px solid var(--line);border-radius:8px;background:var(--bg);color:var(--fg)}
ul.plain{list-style:none;padding:0}ul.plain li{padding:6px 0;border-bottom:1px solid var(--line)}
.muted{color:var(--muted)}.missing{color:var(--muted);font-style:italic}
@media (max-width:600px){td.pn{white-space:normal;word-break:break-all}}
`;

function layout(title: string, rel: string, body: string): string {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} | BASWiki</title><style>${CSS}</style></head><body>
<nav class="top"><a href="${rel}index.html">BASWiki</a></nav><main>${body}</main></body></html>`;
}

function pagePath(p: Page): string {
  return `${p.type}/${p.id}.html`;
}

export interface SiteInput {
  pages: Page[];
  library: LibraryEntry[];
  /** Whether a downloaded file exists on disk; supplied by the I/O layer so rendering stays pure. */
  hasFile: (path: string) => boolean;
}

/** Render every page and the index. Returns a map of output path -> HTML. */
export function renderSite({ pages, library, hasFile }: SiteInput): Map<string, string> {
  const byId = new Map(pages.map((p) => [p.id, p]));
  const out = new Map<string, string>();

  const link = (id: string, rel: string) => {
    const t = byId.get(id);
    return t ? `<a href="${rel}${pagePath(t)}">${esc(t.title)}</a>` : esc(id);
  };

  for (const p of pages) {
    const rel = '../';
    const badges = [p.type, p.status !== 'unknown' ? p.status : '', p.category ?? ''].filter(Boolean);
    const reviewClass = p.review === 'verified' ? '' : ' class="warn"';

    let html = `<div class="badges">${badges.map((b) => `<span>${esc(b)}</span>`).join('')}<span${reviewClass}>review: ${p.review}</span></div>`;
    html += `<h1>${esc(p.title)}</h1><p class="summary">${esc(p.summary)}</p>`;

    const facts: string[] = [];
    if (p.manufacturer) facts.push(`<b>Manufacturer:</b> ${link(p.manufacturer, rel)}`);
    if (p.productLine) facts.push(`<b>Product line:</b> ${link(p.productLine, rel)}`);
    if (p.protocols.length) facts.push(`<b>Protocols:</b> ${p.protocols.map((id) => link(id, rel)).join(', ')}`);
    if (p.replacedBy) facts.push(`<b>Replaced by:</b> ${link(p.replacedBy, rel)}`);
    if (facts.length) html += `<p>${facts.join(' &middot; ')}</p>`;

    if (p.partNumbers.length) {
      html += `<h2>Part numbers</h2><table><tr><th>Part number</th><th>Description</th><th>Source</th></tr>${p.partNumbers
        .map(
          (n) =>
            `<tr><td class="pn">${esc(n.number)}</td><td>${esc(n.description ?? '')}</td><td>${
              n.source ? `<a href="${esc(n.source)}">datasheet</a>` : '<span class="muted">none</span>'
            }</td></tr>`,
        )
        .join('')}</table>`;
    }

    if (p.images.length) {
      html += `<h2>Images</h2>${p.images
        .map(
          (i) =>
            `<figure><img src="${rel}../content/${esc(i.path)}" alt="${esc(i.alt)}" style="max-width:100%"><figcaption class="muted">${esc(i.alt)} (${esc(i.license)}; ${esc(i.source)})</figcaption></figure>`,
        )
        .join('')}`;
    } else if (p.type === 'product') {
      html += '<h2>Images</h2><p class="missing">No licensed images yet.</p>';
    }

    const docs = library.filter((d) => d.pages.includes(p.id));
    if (docs.length) {
      html += `<h2>Documents</h2>${docs
        .map((d) => {
          const local = d.status === 'downloaded' && hasFile(d.file);
          const href = local ? `${rel}../${d.file}` : d.url;
          const state = local
            ? 'local copy'
            : `not downloaded (${d.status === 'downloaded' ? 'file missing' : d.status})`;
          return `<div class="card"><a href="${esc(href)}">${esc(d.title)}</a><br><span class="muted">${esc(d.kind)} &middot; ${esc(d.docId ?? '')} &middot; ${state}${
            d.language !== 'en' ? ` &middot; ${esc(d.language)}` : ''
          } &middot; <a href="${esc(d.url)}">original</a></span></div>`;
        })
        .join('')}`;
    }

    if (p.body.trim()) html += `<h2>Notes</h2>${marked.parse(p.body, { async: false })}`;
    if (p.related.length) html += `<h2>Related</h2><p>${p.related.map((id) => link(id, rel)).join(', ')}</p>`;
    if (p.sources.length) {
      html += `<h2>Sources</h2><ul>${p.sources.map((s) => `<li><a href="${esc(s)}">${esc(s)}</a></li>`).join('')}</ul>`;
    }

    // Inbound links: products/lines that point at this page.
    const members = pages.filter(
      (q) => q.id !== p.id && (q.manufacturer === p.id || q.productLine === p.id || q.protocols.includes(p.id)),
    );
    if (members.length) {
      html += `<h2>Pages in this ${p.type === 'manufacturer' ? 'manufacturer' : p.type === 'protocol' ? 'protocol' : 'line'}</h2><ul class="plain">${members
        .map((q) => `<li>${link(q.id, rel)} <span class="muted">${esc(q.summary)}</span></li>`)
        .join('')}</ul>`;
    }

    out.set(pagePath(p), layout(p.title, rel, html));
  }

  const groups = TYPE_ORDER.map((t) => {
    const items = pages.filter((p) => p.type === t).sort((a, b) => a.title.localeCompare(b.title));
    if (!items.length) return '';
    return `<h2>${TYPE_LABEL[t]}</h2><ul class="plain">${items
      .map((p) => {
        const parts = p.partNumbers.map((n) => n.number).join(' ');
        const hay = esc(`${p.title} ${p.summary} ${parts} ${p.manufacturer ?? ''}`.toLowerCase());
        return `<li data-q="${hay}"><a href="${pagePath(p)}">${esc(p.title)}</a> <span class="muted">${esc(p.summary)}</span></li>`;
      })
      .join('')}</ul>`;
  }).join('');

  const script = `<script>const q=document.getElementById('q');q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();document.querySelectorAll('li[data-q]').forEach(li=>{li.style.display=li.dataset.q.includes(v)?'':'none'})})</script>`;
  const intro = `<h1>BASWiki</h1><p class="summary">Building automation and direct digital controls: Siemens, Phoenix Controls, Viconics, Trane and more.</p><input id="q" type="search" placeholder="Search by name or part number (e.g. BMSY500, PXC100)" autofocus>`;
  out.set('index.html', layout('Home', '', intro + groups + script));
  return out;
}
