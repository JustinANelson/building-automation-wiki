import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import type { LibraryEntry } from '../domain/library.js';
import type { Page } from '../domain/schema.js';
import { renderSite } from '../site/render.js';

/** Render the wiki to `<repoRoot>/site`, replacing any previous build. Returns the number of files written. */
export function writeSite(repoRoot: string, pages: Page[], library: LibraryEntry[]): number {
  const outDir = join(repoRoot, 'site');
  rmSync(outDir, { recursive: true, force: true });
  const files = renderSite({ pages, library, hasFile: (p) => existsSync(join(repoRoot, p)) });
  for (const [rel, html] of files) {
    const target = join(outDir, rel);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html);
  }
  return files.size;
}
