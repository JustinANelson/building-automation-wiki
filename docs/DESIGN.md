# BASWiki â€” Design Pillars & Roadmap

**Mission:** A static Markdown wiki for building automation systems (BAS) and direct digital controls (DDC), starting with Siemens and Phoenix Controls, then Viconics and packaged-unit controls from Trane, Schneider, York, and others.

## Content Model
- Pages are Markdown files with YAML frontmatter under `content/pages/` (manufacturer, product-line, product, protocol, concept).
- Product pages must carry a manufacturer, a category, and at least one **part number**, each with an optional source URL.
- **Images** live under `content/images/`. Every image entry requires `alt`, `source`, and `license`; the validator rejects images with missing provenance or missing files. Manufacturer photos are not copied without a recorded permission basis.
- `review` state: `draft` (AI-drafted from public docs) -> `needs-review` -> `verified` (requires at least one source).
- **Document library:** `content/library.yaml` lists every manufacturer PDF (datasheet, installation guide, IOM/service manual, catalog, brochure) with its source URL, the pages it supports, and a SHA-256 once fetched. The binaries live in the gitignored `library/<manufacturer>/<page-id>/<kind>/` tree (see `library/README.md`); `npm start -- fetch` downloads them and `npm start -- verify` re-checks them.
- Part numbers are never guessed: if a number cannot be sourced, the page records the gap instead.

## Core Design Pillars
1. **Deterministic Core**: All core logic is testable without external services or wall-clock flakiness.
2. **Clear Boundaries**: Core domain logic never imports from transport/UI/server layers.
3. **Verifiable Increments**: Work progresses in small, self-contained phases with automated test coverage.

## Roadmap

### Done
- **Phase 0 - Project Scaffold**: Initialized repository, agentic guidelines (`AGENTS.md`), skills (`.agents/skills/`), and static analysis / test harness.
- **Phase 2 - Seed Content Expansion**: Verify draft part numbers against manufacturer datasheets; add Viconics model pages from catalog 028-6100-13; add Phoenix Celeris/Accel/Traccel sizes; add actuators, valves, and field panels for Siemens; Trane Tracer, Schneider, and York pages.
- **Phase 3 - Cross-reference Graph**: Compatibility and supersession links, backlinks, and orphan detection.
- **Phase 4 - Static Site Generator**: Render pages, part-number index, and image galleries to HTML; client-side search.
