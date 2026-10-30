# BASWiki - System Architecture

## High-Level Structure

```mermaid
flowchart TD
    Content["content/ (Markdown, images, library.yaml)"] --> Loader["src/content (I/O: loader, library, site writer)"]
    Loader --> Domain["src/domain (schema, validation, library rules; pure)"]
    Domain --> Render["src/site/render.ts (pure HTML rendering)"]
    Render --> Loader
    Loader --> Out["site/ (static HTML)"]
    Net["Manufacturer websites"] --> Loader
    Loader --> Lib["library/ (downloaded PDFs, gitignored)"]
```

## Directory Layout
- `src/domain/` - Pure schema and validation (pages, document manifest, download classification); no filesystem or network access
- `src/content/` - I/O layer: markdown loader, document library (download, hash, verify), site writer
- `src/site/render.ts` - Pure HTML rendering: pages and manifest in, HTML strings out
- `src/cli.ts` - `validate`, `build`, `fetch`, `verify` commands (`npm start -- <command>`)
- `src/index.ts` - Public API (`validateContent`)
- `content/` - Wiki pages (`pages/`), images (`images/`), and the document manifest (`library.yaml`)
- `library/` - Downloaded manufacturer PDFs, gitignored; indexed by `content/library.yaml` (see `library/README.md`)
- `site/` - Generated static site, gitignored
- `tests/` - Phase-organized unit and integration test suites
- `docs/` - Living design, roadmap, architecture, and agentic workflow documentation
- `.agents/skills/` - Specialized instructions and workflows for AI coding agents

## Module Boundary Rules
1. Modules inside the core domain must not depend on server, CLI, or UI entrypoints.
2. Circular dependencies between modules are prohibited (enforced via `npm run depcruise`).
3. Cross-boundary communication uses explicit DTOs or value objects.
4. Dates, network responses, and file existence are injected into pure modules (for example `today` in `downloadMissing`, `hasFile` in `renderSite`) so results are reproducible.
