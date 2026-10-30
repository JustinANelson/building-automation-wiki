import { join } from 'node:path';
import { loadContent } from './content/loader.js';
import { loadLibrary } from './content/library.js';
import { validateLibrary } from './domain/library.js';
import { parsePages, validatePages } from './domain/validate.js';

export interface ProjectInfo {
  name: string;
  ready: boolean;
}

export function getProjectInfo(): ProjectInfo {
  return {
    name: 'BASWiki',
    ready: true,
  };
}

/** Load and validate the wiki (`<repoRoot>/content`) and its document manifest; empty issues means clean. */
export function validateContent(repoRoot: string) {
  const { raws, images } = loadContent(join(repoRoot, 'content'));
  const { pages, issues } = parsePages(raws);
  const library = loadLibrary(repoRoot);
  return {
    pages,
    library: library.entries,
    issues: [...issues, ...validatePages(pages, images), ...library.issues, ...validateLibrary(library.entries, pages)],
  };
}
