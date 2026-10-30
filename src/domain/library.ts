import { z } from 'zod';
import type { Page } from './schema.js';
import type { Issue } from './validate.js';

const slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'must be a lowercase kebab-case slug');

const DOCUMENT_KINDS = [
  'datasheet',
  'installation-guide',
  'operation-manual',
  'service-manual',
  'user-guide',
  'integration-guide',
  'application-guide',
  'catalog',
  'brochure',
  'pics',
  'other',
] as const;

/** One downloadable manufacturer document. The binary lives under `library/`; this record is what is committed. */
const libraryEntrySchema = z.object({
  id: slug,
  title: z.string().min(1),
  kind: z.enum(DOCUMENT_KINDS),
  url: z.string().url(),
  /** Path relative to the repo root, always under `library/`. */
  file: z
    .string()
    .regex(/^library\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z-]+\/[A-Za-z0-9._-]+$/, 'must be library/<mfr>/<page>/<kind>/<file>'),
  /** Wiki page ids this document supports. */
  pages: z.array(slug).min(1),
  /** Manufacturer document number or literature id, e.g. `A6V10356040` or `BAS-SVX090B-EN`. */
  docId: z.string().optional(),
  language: z.string().default('en'),
  status: z.enum(['pending', 'downloaded', 'blocked', 'failed']).default('pending'),
  sha256: z
    .string()
    .regex(/^[0-9a-f]{64}$/)
    .optional(),
  bytes: z.number().int().positive().optional(),
  /** ISO date (YYYY-MM-DD) of the download, supplied by the caller, never read from the clock here. */
  retrieved: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  note: z.string().optional(),
});

export type LibraryEntry = z.infer<typeof libraryEntrySchema>;

export function parseLibrary(data: unknown): { entries: LibraryEntry[]; issues: Issue[] } {
  const file = 'content/library.yaml';
  const result = z.array(libraryEntrySchema).safeParse(data ?? []);
  if (!result.success) {
    return {
      entries: [],
      issues: result.error.issues.map((e) => ({ file, message: `${e.path.join('.') || '(root)'}: ${e.message}` })),
    };
  }
  return { entries: result.data, issues: [] };
}

/** Cross-checks: unique ids/urls/files, known page ids, and integrity fields on downloaded entries. */
export function validateLibrary(entries: LibraryEntry[], pages: Page[]): Issue[] {
  const file = 'content/library.yaml';
  const issues: Issue[] = [];
  const pageIds = new Set(pages.map((p) => p.id));
  const seen = { id: new Set<string>(), url: new Set<string>(), file: new Set<string>() };
  for (const e of entries) {
    for (const key of ['id', 'url', 'file'] as const) {
      if (seen[key].has(e[key])) issues.push({ file, message: `duplicate ${key}: ${e[key]}` });
      seen[key].add(e[key]);
    }
    for (const id of e.pages) {
      if (!pageIds.has(id)) issues.push({ file, message: `${e.id}: references unknown page "${id}"` });
    }
    if (e.status === 'downloaded' && !(e.sha256 && e.bytes && e.retrieved)) {
      issues.push({ file, message: `${e.id}: downloaded entries need sha256, bytes and retrieved` });
    }
  }
  return issues;
}

export interface DownloadResult {
  status: number;
  contentType: string;
  bytes: Uint8Array;
}

const PDF_MAGIC = [0x25, 0x50, 0x44, 0x46, 0x2d]; // %PDF-

/** Decide the manifest outcome of a fetch: only a 2xx response that really is a PDF counts as downloaded. */
export function classifyDownload(
  entry: Pick<LibraryEntry, 'file'>,
  r: DownloadResult,
): { status: 'downloaded' | 'blocked' | 'failed'; note?: string } {
  if (r.status === 401 || r.status === 403) return { status: 'blocked', note: `HTTP ${r.status}` };
  if (r.status < 200 || r.status >= 300) return { status: 'failed', note: `HTTP ${r.status}` };
  if (entry.file.endsWith('.pdf') && !isPdf(r.bytes)) {
    return { status: 'failed', note: `not a PDF (${r.contentType || 'unknown content type'})` };
  }
  return { status: 'downloaded' };
}

/**
 * Browser downloads from Siemens are named `<docId>_<language>.pdf` (optionally with a ` (n)` copy suffix).
 * Returns the document id and language, or undefined for any other filename.
 */
export function parseDownloadName(name: string): { docId: string; language: string } | undefined {
  const m = /^(.+?)_([a-z]{2})(?: \(\d+\))?\.pdf$/.exec(name);
  return m ? { docId: m[1]!, language: m[2]! } : undefined;
}

/** Whether the bytes look like a PDF (`%PDF-` magic). */
export function isPdf(bytes: Uint8Array): boolean {
  return PDF_MAGIC.every((b, i) => bytes[i] === b);
}
