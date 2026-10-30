# Agentic LLM Development Guide

This project is structured for high-velocity, high-reliability pair programming with AI coding agents (Antigravity, Claude Code, Cursor, Gemini, Windsurf).

---

## 1. Key Files for Agents
| File | Purpose |
| :--- | :--- |
| `AGENTS.md` | Primary source of truth for project mission, invariants, and commands |
| `CLAUDE.md` / `GEMINI.md` | Pointers to `@AGENTS.md` for multi-agent compatibility |
| `docs/DESIGN.md` | Design pillars and phased roadmap (update as phases complete) |
| `docs/ARCHITECTURE.md` | Component boundaries and dependency rules |
| `.agents/skills/*/SKILL.md` | Task-specific skills discovered automatically by agents |

---

## 2. Recommended Agentic Workflow
1. **Orient**: Read `AGENTS.md` and `docs/DESIGN.md` to understand current phase and architectural invariants.
2. **Search Fast**:
   - Text search: `rg "pattern" src tests`
   - File search: `fd "\.ts$" src`
   - AST search: `ast-grep --pattern 'function $NAME($$$) { $$$ }' src`
3. **Implement & Test Iteratively**:
   - Add or update unit tests in `tests/` covering the phase requirements.
   - Run `npm test` to verify behavior.
4. **Run the Quality Gate Before Completing**:
   - Run `npm run check` to ensure type safety, lint cleanliness, dependency rules, and tests all pass.
5. **Update Roadmap**:
   - Move completed items from **Next** to **Done** in `docs/DESIGN.md`.

---

## 3. Useful CLI Utilities Installed on Windows
All of the following tools are installed natively in `C:\Users\jnels\.local\bin` and available in PowerShell, CMD, and Bash:
- **Search & JSON**: `rg`, `fd`, `ast-grep`, `jq`, `tree`
- **Process Management**:
  - `pgrep -af node` â€” list running node processes with full command lines
  - `pkill -ef <pattern>` â€” kill processes matching command-line pattern
  - `killall <name>` â€” kill processes by executable name
- **Port & Network Inspection**:
  - `lsof -i :3000` â€” show processes listening or connected on port 3000
  - `lsof -ti :3000` â€” output only PIDs on port 3000
  - `fuser -k 3000/tcp` â€” kill process bound to TCP port 3000
- **Unix Stream Utilities**:
  - `grep`, `sed`, `awk`, `head`, `tail`, `wc`, `xargs`, `touch`, `which`, `patch`, `cut`, `tr`, `uniq`, `tee`, `realpath`
