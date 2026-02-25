# AGENTS.md

## Cursor Cloud specific instructions

This is a **frontend-only React SPA** (no backend, no database, no Docker). See `README.md` for the tech stack overview.

### Running the dev server

```bash
npm run dev          # starts Vite at http://localhost:5173
npm run dev -- --host 0.0.0.0   # expose to all interfaces (useful in cloud VMs)
```

### Build & preview

```bash
npm run build        # production build → dist/
npm run preview      # preview the production build locally
```

### Lint & tests

There is **no ESLint config or test framework** configured in this project. The `package.json` has no `lint` or `test` scripts. Validation is limited to a successful `npm run build` (Vite catches JSX/import errors at build time).

### Key caveats

- The Vite dev server uses port **5173** by default.
- SPA routing is handled client-side via `react-router-dom`; `vercel.json` rewrites are only relevant in Vercel deployments.
- All site copy is centralized in `src/data/content.js`.
- The `/developers` route renders an OpenAPI spec via Redoc from `public/api/openapi.json`.
- The build produces a large Redoc chunk (~1.1 MB); the warning is expected and not a build failure.
