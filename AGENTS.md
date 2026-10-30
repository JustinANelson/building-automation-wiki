# BASWiki Guidelines & Standards

## Project Mission
A Wiki for Building Automation System, especially focused on Siemens, and Phoenix Control product lines.

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

## Environment & CLI Tooling on PATH
The local Windows environment includes standard Unix, AST, and process utilities on `PATH` (`C:\Users\jnels\.local\bin`):
- **Code & AST Search**: `rg` (ripgrep), `fd`, `ast-grep` (`sg`), `jq`, `tree`
- **Process & Port Management**: `pkill`, `pgrep`, `killall`, `lsof` (e.g., `lsof -i :3000`, `lsof -ti :3000`), `fuser` (e.g., `fuser -k 3000/tcp`)
- **POSIX Text & File Utilities**: `grep`, `sed`, `awk`, `head`, `tail`, `wc`, `xargs`, `touch`, `which`, `patch`, `cut`, `tr`, `uniq`, `tee`, `realpath`, `sh`, `bash`
