# Document Library

Local copies of manufacturer datasheets, installation guides, operation/service manuals, catalogs, and brochures
that support the wiki pages. The PDFs themselves are **not committed** (copyrighted, large); the committed record is
[`content/library.yaml`](../content/library.yaml), which lists every document, its source URL, and a SHA-256 once fetched.

## Layout

```
library/<manufacturer>/<page-id>/<kind>/<original-filename>
```

- `<manufacturer>`: manufacturer page id (`siemens`, `trane`, `viconics`, `phoenix-controls`)
- `<page-id>`: the product or product-line page the document mainly supports
- `<kind>`: `datasheet`, `installation-guide`, `operation-manual` (IOM), `service-manual`, `user-guide`,
  `integration-guide`, `application-guide`, `catalog`, `brochure`, `pics`, `other`

A document that supports several pages is stored once; its manifest entry lists every page in `pages`.

## Commands

```
npm start -- fetch [id]   # download anything not on disk (all entries, or one by id)
npm start -- verify       # re-hash files and report missing or modified ones
npm start -- validate     # validate pages and the manifest
```

Entries end up as `downloaded`, `blocked` (HTTP 401/403), or `failed` (404, network error, or the response was not a
PDF). Failed entries stay in the manifest with a `note`, and `fetch` retries them.

Manufacturers retire superseded revisions, so a URL that works today may 404 later. Keep the downloaded files; the
checksum in the manifest identifies exactly what a page's facts were read from.
