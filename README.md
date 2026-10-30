# BASWiki

A static wiki for building automation systems and direct digital controls: controllers, field devices (sensors, actuators, valves, dampers), communication protocols, and the control strategies that tie them together. Product part numbers are read from cited manufacturer documents.

**Live site: https://justinanelson.github.io/building-automation-wiki/**

## Quickstart

Requires Node.js 24 or later.

```sh
npm ci
npm run check          # typecheck, lint, dependency rules, tests
npm start -- build     # writes the static site to site/
```

To preview, serve the repository root so document links resolve, then open `/site/index.html`:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

## How it works

- Content is Markdown with YAML frontmatter in `content/pages/`, one page per product, product line, manufacturer, protocol or concept. Images are in `content/images/`.
- `content/library.yaml` indexes the manufacturer documents the pages cite. The PDFs themselves are not in the repository.
- `npm start -- validate` checks every page against the schema; `build` renders the site with no runtime dependencies or external requests.
- Pages are marked draft, needs review or verified, and the mark is shown at the top of each page.

## Deployment

Every push to `main` runs `.github/workflows/pages.yml`: the full check must pass, then the site is built and published to GitHub Pages. The hosted site has no archived PDFs, so the document index links to each document's source instead.

## Documentation

- [AGENTS.md](./AGENTS.md) - guidelines, architectural mandates and CLI tooling
- [docs/DESIGN.md](./docs/DESIGN.md) - design pillars and phased roadmap
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - system architecture and module boundaries
- [docs/AGENT_GUIDE.md](./docs/AGENT_GUIDE.md) - working with AI coding assistants on this repository
- [comms/README.md](./comms/README.md) - how several agents coordinate in one checkout
