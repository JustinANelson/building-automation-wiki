# BASWiki â€” System Architecture

## High-Level Structure

```mermaid
flowchart TD
    Content["content/ (Markdown + images)"] --> Loader["src/content/loader.ts (I/O)"]
    Loader --> Domain["src/domain (schema + validate, pure)"]
    Domain --> Site["Static site generator (Phase 4)"]
```

## Directory Layout
- `src/` â€” Source modules organized by domain boundary
- `tests/` â€” Phase-organized unit and integration test suites
- `docs/` â€” Living design, roadmap, architecture, and agentic workflow documentation
- `.agents/skills/` â€” Specialized instructions and workflows for AI coding agents

## Module Boundary Rules
1. Modules inside the core domain must not depend on server, CLI, or UI entrypoints.
2. Circular dependencies between modules are prohibited (enforced via `npm run depcruise`).
3. Cross-boundary communication uses explicit DTOs or value objects.
