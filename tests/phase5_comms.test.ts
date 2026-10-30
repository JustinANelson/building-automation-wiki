import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { commsStatus } from '../src/content/comms.js';
import {
  inboxFor,
  messageCreated,
  openMessages,
  overlappingClaims,
  parseClaims,
  parseMessages,
  staleClaims,
} from '../src/domain/comms.js';

const msg = (file: string, data: Record<string, unknown>) => ({ file, data, body: 'text' });
const A = '20261029-100000-ui-1-search.md';
const B = '20261029-110000-research-1-siemens-403.md';

describe('Phase 5: agent coordination files', () => {
  it('reads the creation time from the filename and rejects other names', () => {
    expect(messageCreated(A)).toBe('2026-10-29T10:00:00Z');
    expect(messageCreated('notes.md')).toBeUndefined();
    expect(parseMessages([msg('notes.md', { from: 'a', type: 'info' })]).problems[0]?.message).toMatch(/YYYYMMDD/);
  });

  it('applies defaults and reports invalid fields', () => {
    const ok = parseMessages([msg(A, { from: 'ui-1', type: 'info' })]);
    expect(ok.messages[0]).toMatchObject({ to: 'all', areas: [], created: '2026-10-29T10:00:00Z' });
    expect(parseMessages([msg(A, { from: 'ui-1', type: 'gossip' })]).problems[0]?.message).toMatch(/type/);
  });

  it('treats a message as open until a later message closes it', () => {
    const { messages } = parseMessages([
      msg(A, { from: 'ui-1', to: 'research-1', type: 'request' }),
      msg(B, { from: 'research-1', type: 'info', closes: A }),
    ]);
    expect(openMessages(messages).map((m) => m.file)).toEqual([B]);
  });

  it('builds an inbox from open messages addressed to the agent or to all, never its own', () => {
    const { messages } = parseMessages([
      msg(A, { from: 'ui-1', to: 'research-1', type: 'request' }),
      msg(B, { from: 'research-1', to: 'all', type: 'blocker' }),
    ]);
    expect(inboxFor(messages, 'research-1').map((m) => m.file)).toEqual([A]);
    expect(inboxFor(messages, 'ui-1').map((m) => m.file)).toEqual([B]);
    expect(inboxFor(messages, 'docs-1').map((m) => m.file)).toEqual([B]);
  });

  it('flags stale and overlapping claims using an injected clock', () => {
    const { claims } = parseClaims([
      {
        file: 'ui.md',
        data: { agent: 'ui-1', task: 'search', paths: ['src/site/**'], updated: '2026-10-29T07:00:00Z' },
        body: '',
      },
      {
        file: 'site.md',
        data: { agent: 'docs-1', task: 'docs', paths: ['src/site/**'], updated: '2026-10-29T11:30:00Z' },
        body: '',
      },
    ]);
    const now = Date.parse('2026-10-29T12:00:00Z');
    expect(staleClaims(claims, now, 4 * 3600_000).map((c) => c.area)).toEqual(['ui']);
    expect(overlappingClaims(claims)).toEqual([{ path: 'src/site/**', agents: ['docs-1', 'ui-1'] }]);
  });

  describe('status report', () => {
    let dir = '';
    afterEach(() => dir && rmSync(dir, { recursive: true, force: true }));

    it('summarises claims, inbox and problems from disk', () => {
      dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
      mkdirSync(join(dir, 'comms/claims'), { recursive: true });
      mkdirSync(join(dir, 'comms/messages'), { recursive: true });
      writeFileSync(
        join(dir, 'comms/claims/ui.md'),
        '---\nagent: ui-1\ntask: search box\npaths: [src/site/**]\nupdated: 2026-10-29T11:00:00Z\n---\n',
      );
      writeFileSync(
        join(dir, `comms/messages/${A}`),
        '---\nfrom: ui-1\nto: research-1\ntype: request\n---\nPlease check the HMW90 page.\n',
      );
      writeFileSync(join(dir, 'comms/messages/bad.md'), '---\nfrom: x\ntype: info\n---\n');
      const out = commsStatus(dir, 'research-1', Date.parse('2026-10-29T12:00:00Z'));
      expect(out).toContain('ui  ui-1');
      expect(out).toContain('Inbox for research-1 (1)');
      expect(out).toContain('PROBLEM bad.md');
      expect(out).not.toContain('STALE');
    });

    it('reports an empty state when the folders are missing', () => {
      dir = mkdtempSync(join(tmpdir(), 'baswiki-'));
      expect(commsStatus(dir, undefined, 0)).toContain('Claims (0)');
    });
  });
});
