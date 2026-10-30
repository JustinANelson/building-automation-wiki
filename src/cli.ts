import { resolve } from 'node:path';
import { commsStatus } from './content/comms.js';
import { writeSite } from './content/site.js';
import {
  downloadMissing,
  httpFetcher,
  ingestDownloads,
  loadLibrary,
  saveLibrary,
  verifyLibrary,
} from './content/library.js';
import { validateContent } from './index.js';

const [command, ...rest] = process.argv.slice(2);
const repoRoot = resolve('.');

function report(issues: { file: string; message: string }[]): void {
  for (const i of issues) console.error(`${i.file}: ${i.message}`);
}

if (command === 'validate') {
  const { pages, issues } = validateContent(repoRoot);
  report(issues);
  console.log(`${pages.length} pages, ${issues.length} issues`);
  process.exitCode = issues.length ? 1 : 0;
} else if (command === 'fetch') {
  const { entries, issues } = loadLibrary(repoRoot);
  report(issues);
  const only = rest[0];
  const todo = only ? entries.filter((e) => e.id === only) : entries;
  const updated = await downloadMissing(repoRoot, todo, httpFetcher, new Date().toISOString().slice(0, 10));
  const byId = new Map(updated.map((e) => [e.id, e]));
  saveLibrary(
    repoRoot,
    entries.map((e) => byId.get(e.id) ?? e),
  );
  const counts: Record<string, number> = {};
  for (const e of updated) counts[e.status] = (counts[e.status] ?? 0) + 1;
  console.log(JSON.stringify(counts));
} else if (command === 'build') {
  const { pages, library, issues } = validateContent(repoRoot);
  report(issues);
  if (issues.length) process.exitCode = 1;
  else console.log(`site/: ${writeSite(repoRoot, pages, library)} files`);
} else if (command === 'ingest') {
  const { entries } = loadLibrary(repoRoot);
  const report2 = ingestDownloads(
    repoRoot,
    resolve(rest[0] ?? 'downloads'),
    entries,
    new Date().toISOString().slice(0, 10),
  );
  saveLibrary(repoRoot, report2.entries);
  for (const line of report2.ingested) console.log(`ingested ${line}`);
  for (const line of report2.skipped) console.error(`skipped ${line}`);
} else if (command === 'comms') {
  console.log(commsStatus(repoRoot, rest[0], Date.now()));
} else if (command === 'verify') {
  const { entries } = loadLibrary(repoRoot);
  const issues = verifyLibrary(repoRoot, entries);
  report(issues);
  console.log(`${entries.length} documents, ${issues.length} problems`);
  process.exitCode = issues.length ? 1 : 0;
} else if (command === 'random') {
  const { pages, issues } = validateContent(repoRoot);
  report(issues);
  const filterType = rest[0]?.toLowerCase();
  const validTypes = ['concept', 'protocol', 'product', 'product-line', 'manufacturer'];
  if (filterType && !validTypes.includes(filterType)) {
    console.error(`error: unknown type "${filterType}". Valid types: ${validTypes.join(', ')}`);
    process.exitCode = 1;
  } else {
    const pool = filterType ? pages.filter((p) => p.type === filterType) : pages;
    if (!pool.length) {
      console.error(`No pages found matching type "${filterType}".`);
      process.exitCode = 1;
    } else {
      const pick = pool[Math.floor(Math.random() * pool.length)]!;
      console.log(`[${pick.type}] ${pick.title}`);
      console.log(`URL: ${pick.type}/${pick.id}.html`);
      if (pick.summary) console.log(`Summary: ${pick.summary}`);
      if (pick.category) console.log(`Category: ${pick.category}`);
      if (pick.manufacturer) console.log(`Manufacturer: ${pick.manufacturer}`);
      if (pick.partNumbers.length) {
        console.log(`Part numbers (${pick.partNumbers.length}): ${pick.partNumbers.map((p) => p.number).join(', ')}`);
      }
    }
  }
} else {
  console.error('usage: cli.ts validate | build | fetch [id] | ingest [dir] | verify | comms [agent] | random [type]');
  process.exitCode = 2;
}
