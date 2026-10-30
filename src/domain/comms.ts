import { z } from 'zod';

/** Messages are immutable files named `YYYYMMDD-HHMMSS-<agent>-<slug>.md`; a reply or resolution is a new message. */
const MESSAGE_TYPES = ['info', 'request', 'handoff', 'blocker', 'decision', 'question'] as const;

const messageSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1).default('all'),
  type: z.enum(MESSAGE_TYPES),
  /** Filename of the message this one answers. */
  re: z.string().optional(),
  /** Filename of a message this one resolves; closed messages stop appearing as open. */
  closes: z.string().optional(),
  areas: z.array(z.string()).default([]),
});

const claimSchema = z.object({
  agent: z.string().min(1),
  task: z.string().min(1),
  /** Paths or globs the agent is editing. Other agents stay out of them while the claim is live. */
  paths: z.array(z.string()).default([]),
  /** ISO 8601 UTC time of the last update; claims untouched for a while are stale. */
  updated: z.string().datetime(),
});

export interface Message {
  file: string;
  created: string;
  from: string;
  to: string;
  type: (typeof MESSAGE_TYPES)[number];
  re?: string;
  closes?: string;
  areas: string[];
  body: string;
}

export interface Claim {
  file: string;
  area: string;
  agent: string;
  task: string;
  paths: string[];
  updated: string;
}

export interface RawComms {
  file: string;
  data: unknown;
  body: string;
}

export interface CommsProblem {
  file: string;
  message: string;
}

const NAME = /^(\d{4})(\d{2})(\d{2})-(\d{2})(\d{2})(\d{2})-[a-z0-9][a-z0-9-]*\.md$/;

/** UTC creation time encoded in a message filename, or undefined if the name does not follow the convention. */
export function messageCreated(file: string): string | undefined {
  const m = NAME.exec(file);
  return m ? `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}Z` : undefined;
}

export function parseMessages(raws: RawComms[]): { messages: Message[]; problems: CommsProblem[] } {
  const messages: Message[] = [];
  const problems: CommsProblem[] = [];
  for (const raw of raws) {
    const created = messageCreated(raw.file);
    if (!created) {
      problems.push({ file: raw.file, message: 'name must be YYYYMMDD-HHMMSS-<agent>-<slug>.md' });
      continue;
    }
    const r = messageSchema.safeParse(raw.data);
    if (!r.success) {
      for (const e of r.error.issues) problems.push({ file: raw.file, message: `${e.path.join('.')}: ${e.message}` });
      continue;
    }
    messages.push({ ...r.data, file: raw.file, created, body: raw.body.trim() });
  }
  messages.sort((a, b) => a.file.localeCompare(b.file));
  return { messages, problems };
}

export function parseClaims(raws: RawComms[]): { claims: Claim[]; problems: CommsProblem[] } {
  const claims: Claim[] = [];
  const problems: CommsProblem[] = [];
  for (const raw of raws) {
    const r = claimSchema.safeParse(raw.data);
    if (!r.success) {
      for (const e of r.error.issues) problems.push({ file: raw.file, message: `${e.path.join('.')}: ${e.message}` });
      continue;
    }
    claims.push({ ...r.data, file: raw.file, area: raw.file.replace(/\.md$/, '') });
  }
  return { claims, problems };
}

/** Messages that no later message has closed. */
export function openMessages(messages: Message[]): Message[] {
  const closed = new Set(messages.map((m) => m.closes).filter((c): c is string => Boolean(c)));
  return messages.filter((m) => !closed.has(m.file));
}

/** Open messages addressed to `agent` or to everyone, excluding the agent's own. */
export function inboxFor(messages: Message[], agent: string): Message[] {
  return openMessages(messages).filter((m) => m.from !== agent && (m.to === 'all' || m.to === agent));
}

/** Claims whose last update is older than `maxAgeMs` before `nowMs`. The clock is passed in, never read here. */
export function staleClaims(claims: Claim[], nowMs: number, maxAgeMs: number): Claim[] {
  return claims.filter((c) => nowMs - Date.parse(c.updated) > maxAgeMs);
}

/** Pairs of live claims that name the same path, so two agents can see a conflict before editing. */
export function overlappingClaims(claims: Claim[]): { path: string; agents: string[] }[] {
  const owners = new Map<string, Set<string>>();
  for (const c of claims) {
    for (const p of c.paths) owners.set(p, (owners.get(p) ?? new Set()).add(c.agent));
  }
  return [...owners]
    .filter(([, agents]) => agents.size > 1)
    .map(([path, agents]) => ({ path, agents: [...agents].sort() }));
}
