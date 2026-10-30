# Board: standing decisions and gotchas

Read once per session. Keep entries short and dated. Edit with small targeted changes, not rewrites, because other
agents may be reading or editing at the same time. Message-sized updates belong in `comms/messages/`; only durable facts
belong here.

## Decisions

- **Sourcing standard** (2026-10-29): every part number is read from a downloaded manufacturer document (use
  `pdftotext -raw`, which keeps table rows in order; `-layout` scrambles some tables). Never fill in numbers from memory or
  from a search summary. If a number cannot be sourced, the page says so. New product pages start at `review: needs-review`.
- **Images** (2026-10-29): only openly licensed images (for example Wikimedia Commons CC BY-SA) with `alt`, `source`
  (author and file page URL), and `license` filled in. Manufacturer photos are not copied. Download resized copies into
  `content/images/`.
- **UI principles** (2026-10-29): technical reference manual, not a dashboard. Ruled tables, monospace part numbers, no
  cards, pills, hero sections, external fonts, or scripts. See `docs/DESIGN.md`, "UI principles".
- **Documents** (2026-10-29): PDFs live in the gitignored `library/` tree; `content/library.yaml` is the committed index.
  Record mirrors in the document title. Keep failed or blocked entries only when a page references them.

## Gotchas

- **YAML frontmatter:** quote titles, summaries, and descriptions that contain a colon followed by a space
  (`title: "Analog signals: 0-10 V"`), or the page fails to parse. Generators should `JSON.stringify` free text.
- **sid.siemens.com (Siemens documents):** the URL is a JavaScript viewer, not a PDF, so `fetch` fails. Download with the
  site's own Download button in Chrome, then run `npm start -- ingest`. On 2026-10-29 the site began returning
  **HTTP 403** after several quick page loads, and a distributor mirror also returned 403. Pace requests (one document
  at a time, with pauses), do not probe its undocumented API, and if you get 403 stop and tell the user.
- **Chrome downloads:** the user pointed Chrome's download folder at `BASWiki/downloads/`. Files arrive named
  `<docId>_<lang>.pdf`; `npm start -- ingest` files them into `library/` after checking they are real PDFs. If nothing
  appears, Chrome may be asking where to save each file (a Save dialog you cannot see).
- **Language editions:** Siemens serves the edition for each document id (German, Swedish, and English ids all exist).
  `ingest` records the language from the filename.
- **Trane eLibrary:** superseded revisions are removed (HTTP 404), and search engines still list the old URLs. Always
  confirm a URL downloads before citing it.
- **Node `fetch` vs curl:** a few hosts (for example NOAA mirrors) fail from Node's `fetch` but work with `curl`. Fallback:
  `curl` the file into `downloads/` named `<docId>_<lang>.pdf`, then `ingest`.
- **Preview:** `npm start -- build` writes `site/`; serve the repo root with `python -m http.server 8765 --bind 127.0.0.1`
  and open `/site/index.html`. Serving the repo root is needed so `../library/` links resolve.
- **Shell:** Git Bash heredocs containing apostrophes can fail in the Bash tool. Prefer your file-writing tool, or a
  script file, for multi-line content.

## Open wants (documents and content nobody has yet)

- Siemens, by document id (via Chrome, one at a time): `20063` (QAA20 room sensors, en), `9888` (QAE22 immersion
  sensors, en), `A6V10066478` (QAM2120 duct sensors, fr), `A6V10416354` (flanged valves VVF43/53 and VXF43/53, en),
  `A6V10068591` (SQS35/SQS65 actuators, fr). Then add product pages for the valves, actuators, and sensors.
- Belimo characterized control valve (CCV) data sheets: only a mirror was found and it returned 403.
- Vaisala HMP110 data sheet: the only mirror found returned HTTP 500.
- Viconics VT7300, VT7350, VT7355, VT7600 series, relay packs, wireless accessories (catalog 028-6100-13 is in the library).
- Trane Symbio 700, current revisions of the Symbio 500 data sheet and IOM, and the UC400 data sheet.
- Schneider Electric and York product pages; licensed product images for individual models.
- BACnet pages are not read from the standard (paywalled); a BACnet PICS from a vendor would be a better source.

## Active conventions

- Quality gate: `npm run check` (typecheck, lint, dependency-cruiser, tests). Also `npm run knip`.
- CLI: `npm start -- validate | build | fetch [id] | ingest [dir] | verify | comms [agent]`.
