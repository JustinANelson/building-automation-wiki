import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'yaml';
import type { RawPage } from '../domain/validate.js';

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

const toPosix = (p: string) => p.split('\\').join('/');

/** Split `---` delimited YAML frontmatter from a markdown document. */
export function splitFrontmatter(text: string): { data: unknown; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text.replace(/^\uFEFF/, ''));
  if (!m) return { data: undefined, body: text };
  return { data: parse(m[1]!), body: m[2]! };
}

/** Read every `.md` page under `<root>/pages` and list every file under `<root>/images`. */
export function loadContent(root: string): { raws: RawPage[]; images: Set<string> } {
  const raws = walk(join(root, 'pages'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => ({ file: toPosix(relative(root, f)), ...splitFrontmatter(readFileSync(f, 'utf8')) }));
  let images: string[] = [];
  try {
    images = walk(join(root, 'images')).map((f) => toPosix(relative(root, f)));
  } catch {
    // no images directory yet
  }
  return { raws, images: new Set(images) };
}
