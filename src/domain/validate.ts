import { type Page, pageSchema } from './schema.js';

export interface Issue {
  file: string;
  message: string;
}

export interface RawPage {
  file: string;
  data: unknown;
  body: string;
}

/** Parse raw frontmatter into pages, collecting schema errors. */
export function parsePages(raws: RawPage[]): { pages: Page[]; issues: Issue[] } {
  const pages: Page[] = [];
  const issues: Issue[] = [];
  for (const raw of raws) {
    const result = pageSchema.safeParse(raw.data);
    if (!result.success) {
      for (const e of result.error.issues) {
        issues.push({ file: raw.file, message: `${e.path.join('.') || '(root)'}: ${e.message}` });
      }
      continue;
    }
    pages.push({ ...result.data, body: raw.body, file: raw.file });
  }
  return { pages, issues };
}

/**
 * Cross-page checks: unique ids, dangling references, type rules, and image/part-number integrity.
 * Pure: the set of image files that exist is passed in by the I/O layer.
 */
export function validatePages(pages: Page[], existingImages: ReadonlySet<string>): Issue[] {
  const issues: Issue[] = [];
  const byId = new Map<string, Page>();
  for (const p of pages) {
    const prior = byId.get(p.id);
    if (prior) issues.push({ file: p.file, message: `duplicate id "${p.id}" (also in ${prior.file})` });
    else byId.set(p.id, p);
  }

  const requireRef = (p: Page, field: string, id: string, type?: Page['type']) => {
    const target = byId.get(id);
    if (!target) issues.push({ file: p.file, message: `${field} references unknown page "${id}"` });
    else if (type && target.type !== type) {
      issues.push({ file: p.file, message: `${field} "${id}" must be a ${type} page, found ${target.type}` });
    }
  };

  const seenParts = new Map<string, string>();
  for (const p of pages) {
    if (p.manufacturer) requireRef(p, 'manufacturer', p.manufacturer, 'manufacturer');
    if (p.productLine) requireRef(p, 'productLine', p.productLine, 'product-line');
    for (const id of p.protocols) requireRef(p, 'protocols', id, 'protocol');
    for (const id of p.related) requireRef(p, 'related', id);
    if (p.replacedBy) requireRef(p, 'replacedBy', p.replacedBy);

    if (p.type === 'product') {
      if (!p.manufacturer) issues.push({ file: p.file, message: 'product pages require a manufacturer' });
      if (!p.category) issues.push({ file: p.file, message: 'product pages require a category' });
      if (p.partNumbers.length === 0) {
        issues.push({ file: p.file, message: 'product pages require at least one part number' });
      }
    }

    for (const part of p.partNumbers) {
      const key = `${p.manufacturer ?? ''}:${part.number.toUpperCase()}`;
      const owner = seenParts.get(key);
      if (owner && owner !== p.id) {
        issues.push({ file: p.file, message: `part number ${part.number} also listed on "${owner}"` });
      }
      seenParts.set(key, p.id);
    }

    for (const img of p.images) {
      if (!existingImages.has(img.path)) issues.push({ file: p.file, message: `image file not found: ${img.path}` });
    }

    if (p.review === 'verified' && p.sources.length === 0) {
      issues.push({ file: p.file, message: 'verified pages must cite at least one source' });
    }
  }
  return issues;
}
