---
name: project-architecture
description: Architectural guidelines, module boundaries, and domain invariants for BASWiki. Read this skill before designing new modules or refactoring boundaries.
---

# BASWiki Architecture Skill

## Core Mandates
1. **Domain Purity**: Keep core domain/simulation logic free of I/O, HTTP, database, or UI framework dependencies.
2. **Deterministic Behavior**: Avoid unseeded randomness or direct wall-clock reads inside core domain logic; pass timestamps or ticks explicitly.
3. **No Circular Dependencies**: Acyclic module graphs are enforced. Extract shared types into dedicated `types.ts` / schema modules when two modules need common interfaces.

## Checklist When Adding a Feature
- [ ] Does the feature respect module boundaries in `docs/ARCHITECTURE.md`?
- [ ] Are state mutations deterministic and covered by unit tests in `tests/`?
- [ ] Has `docs/DESIGN.md` been updated if a roadmap milestone was completed?
