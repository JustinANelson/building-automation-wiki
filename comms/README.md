# Agent Communication Protocol

Several agents (research, content, UI, library, docs) work in this repository at the same time, often in the same working
directory. This folder is how they avoid overwriting each other and how they hand work over. Everything here is plain
files, so any agent can use it with its normal file tools.

**Shared path:** always use the main checkout, `C:\Users\jnels\Projects\BASWiki\comms`, even if you work in a git
worktree. Claims and messages are not committed, so a separate worktree would not see them.

## 1. Check before you start, and again before you finish

Run this from the repo root, with your own agent name:

```
npm start -- comms <your-agent-name>
```

It prints every live claim (stale ones marked, overlapping paths flagged), your inbox, and all open messages. Read any
message addressed to you or to `all` by opening the file in `comms/messages/`. Then read [`BOARD.md`](./BOARD.md) once per
session; it holds standing decisions and hard-won gotchas that apply to everyone.

Check again after any long step (a big download, a build, a research pass) and before you commit or declare done.

## 2. Your agent name

Use the name the user gave you in your prompt. If none was given, use `<role>-<n>` (for example `research-1`, `ui-2`),
choosing an `n` that does not appear in `comms/claims/` or `comms/messages/`. Use lowercase letters, digits, and hyphens.

## 3. Claim before you edit

A claim says "I am working here, stay out." One file per area in `comms/claims/<area>.md`:

```
---
agent: ui-1
task: Add category browse pages
paths: [src/site/**, tests/phase4_site.test.ts]
updated: 2026-10-29T22:40:00Z
---
Optional notes: what is half done, what you will touch next.
```

Rules:

1. **Check first.** If `comms/claims/<area>.md` exists, or any live claim lists an overlapping path, do not edit those paths.
   Post a `request` to the owner instead (section 4), or pick other work.
2. **Create the file to claim, delete it to release.** Update `updated:` whenever you resume or after a long step. Use UTC.
3. **Stale claims.** A claim not updated for 4 hours is stale (the status command marks it). You may take it over: post an
   `info` message saying so, then replace the claim with your own.
4. **Release when done**, before your final message to the user. Never leave a claim behind.
5. **Claim narrowly.** List the paths you will actually edit, not the whole repo.

### Areas and what they cover

| Area | Paths |
| :--- | :--- |
| `content-<manufacturer>` | `content/pages/**` for that manufacturer, for example `content-trane` |
| `content-protocols` | `content/pages/protocols/**`, `content/pages/concepts/**` |
| `images` | `content/images/**` |
| `library` | `content/library.yaml`, `library/**`, `downloads/` (fetch and ingest) |
| `ui` | `src/site/**`, site tests |
| `domain` | `src/domain/**`, `src/content/**`, `src/cli.ts`, their tests |
| `docs` | `docs/**`, `AGENTS.md`, this folder |

### Shared resources (one agent at a time)

Claim these by name, like an area, because two agents using them at once corrupts the result.

| Resource | Why |
| :--- | :--- |
| `browser` | One Chrome session. Tabs, the download folder, and the preview tab are shared. |
| `preview-server` | Port 8765 serves `site/` and `library/`. Check `lsof -i :8765` before starting another. |
| `check` | `npm run check` compiles to `dist/`. Do not run it in parallel with another agent. |
| `library.yaml` | One manifest file edited by `fetch`, `ingest`, and scripts. Read-modify-write races lose entries. |

## 4. Send a message

One immutable file per message in `comms/messages/`, named with a UTC timestamp, your name, and a slug:

```
comms/messages/20261029-224500-research-1-siemens-403.md
```

Get the timestamp with `date -u +%Y%m%d-%H%M%S`. Contents:

```
---
from: research-1
to: all                # an agent name, or all
type: blocker          # info | request | handoff | blocker | decision | question
areas: [library]       # optional
re: 20261029-100000-ui-1-search.md        # optional: the message you answer
closes: 20261029-100000-ui-1-search.md    # optional: the message you resolve
---
What happened, what you need, and exactly where to look (file paths, document ids, command output).
```

Types:

- `info`: a fact others may need ("HMW90 page is done, review needs-review").
- `request`: you need another agent to do or change something. Say what and by when it matters.
- `handoff`: you are stopping and someone else should continue. List what is finished, what is half done, and next steps.
- `blocker`: something prevents progress, such as a site returning HTTP 403. Say what you tried and what you did not try.
- `decision`: a choice others must follow. Copy lasting decisions into `BOARD.md`.
- `question`: you need an answer before proceeding. Ask the user if no agent can answer.

Rules:

1. **Never edit or delete a message.** To correct it, send a new one. To resolve one, send a message with `closes:`.
2. **Close what you resolve.** A message stays "open" until a later message names it in `closes:`. Close requests you
   fulfil, and blockers you clear.
3. **Be specific and short.** Paths, ids, and commands, not narrative. No secrets or credentials.
4. **Address it.** Use `to: all` only when everyone needs it.

## 5. Working together without collisions

- **Stage only your own files.** Use `git add <paths>`, never `git add -A` or `git commit -a`, because other agents have
  uncommitted work in the same tree. Commit only when the user asks.
- **Never discard others' work.** No `git reset`, `git checkout .`, `git stash`, `git clean`, or deleting files you did not create.
- **Small edits to shared files.** `docs/DESIGN.md` and `docs/ARCHITECTURE.md` are shared: change the lines you need with a
  targeted edit, do not rewrite the file. Re-read it just before editing.
- **Do not fix other agents' failing tests** in their area. Message them. If it blocks you and they do not respond, say
  so in a `blocker` message, then proceed on what you own.
- **Respect the quality gate.** Run `npm run check` (holding the `check` claim) before you report anything as done.
- **Respect blockers.** If a message or `BOARD.md` says a site refuses automated access, do not probe or work around it.
  Tell the user.

## 6. Housekeeping

- Move messages you closed more than a day ago into `comms/archive/` (any agent may do this).
- Move durable facts from messages into `BOARD.md` so they are not lost.
- `comms/claims/*.md` and `comms/messages/*.md` are gitignored on purpose; this README and `BOARD.md` are tracked.
