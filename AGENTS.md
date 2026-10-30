# BASWiki Guidelines & Standards

## Project Mission
A static Markdown wiki for building automation systems and direct digital controls, starting with Siemens and Phoenix Controls, then Viconics and packaged-unit controls (Trane, Schneider, York, and others), plus field devices (sensors, actuators, valves, dampers) and communication protocols. Every part number is read from a cited manufacturer document; see `comms/BOARD.md`.

## Multi-Agent Coordination (read first)
Several agents work in this repository at the same time. Before you edit anything:
1. Run `npm start -- comms <your-agent-name>` and read your inbox, the live claims, and `comms/BOARD.md`.
2. Claim the area you will edit (`comms/claims/<area>.md`) and stay out of paths another live claim covers.
3. Release your claim and post a summary message when you finish. Stage only your own files; never `git add -A`, reset, stash, or clean.

Full protocol, file formats, and shared-resource rules (Chrome, preview server, `npm run check`, `library.yaml`): `comms/README.md`.

## Architectural Mandates
1. **Explicit Domain Invariants**: Core state transitions and business rules must be enforced in pure, deterministic domain modules rather than scattered across UI or transport layers.
2. **Strict Module Decoupling**: Keep core simulation/domain logic decoupled from I/O, persistence, network transport, and visualization layers.
3. **Deterministic Execution**: State updates, simulation ticks, and calculations must produce deterministic, reproducible results. Prefer seeded RNG when randomness is required.
4. **Phase-Driven Test Coverage**: Every roadmap phase and bug fix must be backed by unit and integration tests before moving to the next phase.
5. **Maintain Documentation Integrity**: Keep `docs/DESIGN.md` and `docs/ARCHITECTURE.md` synchronized as phases are completed. Preserve existing comments and docstrings unrelated to active edits.

## Build, Verification & Quality Commands
- **Full Verification Gate**: `npm run check`
- **Run Unit Tests**: `npm test`
- **Build Project**: `npm run build`
- **Typecheck Only**: `npm run typecheck`
- **Lint & Format**: `npm run lint` / `npm run format`
- **Test Coverage**: `npm run test:coverage`
- **Dead Code & Unused Exports**: `npm run knip`
- **Architecture & Circular Dependency Check**: `npm run depcruise`
- **Wiki CLI**: `npm start -- validate | build | fetch [id] | ingest [dir] | verify | comms [agent]`

## Environment & CLI Tooling on PATH
The local Windows environment includes standard Unix, AST, and process utilities on `PATH` (`C:\Users\jnels\.local\bin`):
- **Code & AST Search**: `rg` (ripgrep), `fd`, `ast-grep` (`sg`), `jq`, `tree`
- **Process & Port Management**: `pkill`, `pgrep`, `killall`, `lsof` (e.g., `lsof -i :3000`, `lsof -ti :3000`), `fuser` (e.g., `fuser -k 3000/tcp`)
- **POSIX Text & File Utilities**: `grep`, `sed`, `awk`, `head`, `tail`, `wc`, `xargs`, `touch`, `which`, `patch`, `cut`, `tr`, `uniq`, `tee`, `realpath`, `sh`, `bash`
