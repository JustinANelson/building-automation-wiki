import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  type CommsProblem,
  type Message,
  type RawComms,
  inboxFor,
  openMessages,
  overlappingClaims,
  parseClaims,
  parseMessages,
  staleClaims,
} from '../domain/comms.js';
import { splitFrontmatter } from './loader.js';

const STALE_AFTER_MS = 4 * 60 * 60 * 1000;

function readDir(dir: string): RawComms[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md') && f !== 'README.md')
    .sort()
    .map((file) => ({ file, ...splitFrontmatter(readFileSync(join(dir, file), 'utf8')) }));
}

/** Render the coordination state as text: live claims, stale and overlapping claims, and open messages. */
export function commsStatus(repoRoot: string, agent: string | undefined, nowMs: number): string {
  const base = join(repoRoot, 'comms');
  const { claims, problems: cp } = parseClaims(readDir(join(base, 'claims')));
  const { messages, problems: mp } = parseMessages(readDir(join(base, 'messages')));
  const problems: CommsProblem[] = [...cp, ...mp];
  const stale = new Set(staleClaims(claims, nowMs, STALE_AFTER_MS).map((c) => c.file));
  const lines: string[] = [];

  lines.push(`Claims (${claims.length})`);
  for (const c of claims) {
    lines.push(`  ${c.area}  ${c.agent}  ${c.updated}${stale.has(c.file) ? '  STALE' : ''}  ${c.task}`);
    if (c.paths.length) lines.push(`      paths: ${c.paths.join(', ')}`);
  }
  if (!claims.length) lines.push('  none');
  for (const o of overlappingClaims(claims)) lines.push(`  OVERLAP ${o.path}: ${o.agents.join(' vs ')}`);

  const show = (m: Message) =>
    `  ${m.file}  [${m.type}] ${m.from} -> ${m.to}${m.areas.length ? `  (${m.areas.join(', ')})` : ''}`;
  if (agent) {
    const inbox = inboxFor(messages, agent);
    lines.push('', `Inbox for ${agent} (${inbox.length})`, ...(inbox.length ? inbox.map(show) : ['  none']));
  }
  const open = openMessages(messages);
  lines.push('', `Open messages (${open.length})`, ...(open.length ? open.map(show) : ['  none']));
  for (const p of problems) lines.push('', `PROBLEM ${p.file}: ${p.message}`);
  return lines.join('\n');
}
