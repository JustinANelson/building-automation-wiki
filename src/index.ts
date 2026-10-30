import { resolve } from 'node:path';
import { loadContent } from './content/loader.js';
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

/** Load and validate the wiki content; returns the pages and an issue list (empty when clean). */
export function validateContent(root: string) {
  const { raws, images } = loadContent(root);
  const { pages, issues } = parsePages(raws);
  return { pages, issues: [...issues, ...validatePages(pages, images)] };
}

if (process.argv[1] && /index\.[jt]s$/.test(process.argv[1]) && process.argv[2] === 'validate') {
  const { pages, issues } = validateContent(resolve(process.argv[3] ?? 'content'));
  for (const i of issues) console.error(`${i.file}: ${i.message}`);
  console.log(`${pages.length} pages, ${issues.length} issues`);
  process.exitCode = issues.length ? 1 : 0;
}
