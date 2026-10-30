---
name: verification-and-tooling
description: Instructions for running static analysis, typechecking, dead-code detection, architecture validation, unit tests, and process cleanup in BASWiki.
---

# Verification & Tooling Skill

## Quality Gate Commands
Run the unified check before finishing any feature or refactor:
```powershell
npm run check
```

## Individual Diagnostic Tools
- **Tests**: `npm test`
- **TypeScript Typecheck**: `npm run typecheck`
- **Linting (Biome)**: `npm run lint` (auto-fix with `npm run lint:fix`)
- **Formatting (Biome)**: `npm run format`
- **Coverage Report**: `npm run test:coverage`
- **Unused Exports / Dead Code (Knip)**: `npm run knip`
- **Module Boundary & Circular Dependency Check**: `npm run depcruise`

## Process & Port Cleanup
If a background dev server or test worker hangs on a port:
```powershell
lsof -i :3000
fuser -k 3000/tcp
pkill -ef "src/server"
```
