# Monorepo Guide

## What is a Monorepo?
A single repository that contains multiple related packages or applications.

## Benefits
- Shared tooling and configuration
- Atomic commits across packages
- Easier code sharing and refactoring
- Unified CI/CD pipeline

## Popular Tools
| Tool | Best For |
|------|---------|
| pnpm workspaces | Node.js monorepos, fast installs |
| Turborepo | Build caching and task orchestration |
| Nx | Scalable monorepos with smart caching |
| Lerna | Package versioning and publishing |

## pnpm Workspace Setup
```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

## Common Commands
```bash
pnpm --filter @scope/pkg run build   # run in one package
pnpm -r run test                     # run in all packages
pnpm add lodash --filter @scope/app  # add dep to one package
```

## Tips
- Keep shared code in a `packages/` directory
- Use `workspace:*` for internal package references
- Run type checking and tests in CI across all packages
