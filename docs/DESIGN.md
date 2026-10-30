# BASWiki - Design Pillars & Roadmap

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
- **Phase 1 - Content Model & Validator**: Zod frontmatter schema, loader, cross-page validator (ids, references, part-number uniqueness, image provenance), `npm start -- validate`, and seed pages for Siemens, Phoenix Controls, Viconics, Trane, with stubs for Schneider and York.
- **Phase 1.5 - Document Library**: Manifest schema, validator, downloader that only accepts real PDFs, checksum verification, and 34 catalogued documents (16 downloaded). Reading the PDFs corrected two Trane part-number sources.
- **Phase 4a - Static Site (first cut)**: `npm start -- build` renders `site/` (index with client-side search, per-page part-number tables, linked documents, cross-references). Link integrity and HTML escaping are tested.

### Next
- **Phase 2 - Seed Content Expansion**: Obtain the Siemens documents and verify Desigo/APOGEE part numbers against them; remaining Viconics models (VT7300/7350/7355/7600, relay packs, wireless accessories); Phoenix Celeris/Accel/Traccel sizes; more Siemens actuators, valves, and field panels; Schneider and York product pages; licensed product images.
- **Phase 3 - Cross-reference Graph**: Compatibility and supersession links, backlinks, and orphan detection.
- **Phase 4b - Site polish**: Part-number index page, category browse, image galleries, and deployment.
