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
- **Phase 1.5 - Document Library**: Manifest schema, validator, downloader that only accepts real PDFs, checksum verification, and an `ingest` command for browser-saved PDFs, and 34 catalogued documents (27 archived; 7 superseded Trane files no longer exist). Reading the PDFs corrected Trane and Siemens part-number data.
- **Phase 4a - Static Site**: `npm start -- build` renders `site/` as a technical reference manual: manufacturer/line/product tree, breadcrumbs, infobox, dense part-number and document tables, global part-number search, all-part-numbers and all-documents indexes, light/dark themes, print stylesheet. Link integrity, escaping, and search-index safety are tested.

- **Phase 2a - Field devices and protocols**: Vaisala (HMW90, HMD60/70, HMDW110, GMW90, GMD20, HMT330) and Belimo (LMB/NMB/AMB24-3) product pages, BACnet (IP, MS/TP, SC) and Modbus (RTU, TCP) protocol pages read against the Modbus specifications, RS-485 / analog signal / temperature sensor / damper actuator / control valve concept pages, and the first three openly licensed images.
- **Phase 5 - Agent coordination**: `comms/` claims and messages with `npm start -- comms [agent]`, so several agents can work in one tree.

### UI principles
- Reference manual, not a dashboard: ruled tables, monospace part numbers, no cards, pills, or hero sections.
- Part numbers are the primary content; review state is stated plainly with a notice, never hidden.
- No external fonts, scripts, or network calls; the site works from static files. Prose uses the system serif stack (Charter, Georgia); tables, labels and part numbers use sans and monospace.
- One warm accent colour on a paper palette (light and dark), sentence-case headings, no uppercase tracked labels.
- Protocol and concept pages are articles: body text first, cross-reference tables after. Product, line and manufacturer pages lead with their tables.
- The home page is manufacturer-neutral: it lists concepts, protocols and manufacturers rather than featuring any one vendor.

### Next
- **Phase 2 - Seed Content Expansion**: Verify remaining draft part numbers against downloaded documents; remaining Viconics models (VT7300/7350/7355/7600, relay packs, wireless accessories); Phoenix Celeris/Accel/Traccel sizes; more Siemens actuators, valves, and field panels; Schneider and York product pages; licensed product images.
- **Phase 3 - Cross-reference Graph**: Compatibility and supersession links, backlinks, and orphan detection.
- **Phase 4b - Site polish**: Category browse, image galleries, mobile and light-theme review, and deployment.
