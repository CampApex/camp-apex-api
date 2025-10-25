# copilot instructions — camp-apex-apis

This file contains concise, actionable guidance for AI coding agents (and humans) to be productive in this repository.

Quick facts
- Framework: Next.js (app router) — project uses the `app/` directory.
- Next version: declared in `package.json` (`next@16`). React 19.
- TypeScript: enabled and strict (`tsconfig.json`), path alias `@/*` -> `./*`.
- Styling: Tailwind + `globals.css` (see `postcss.config.mjs`).
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint` (see `package.json`).

Where to look first
- `app/layout.tsx` — root layout, global font imports (uses `next/font/google` with Geist). Good place to add global providers.
- `app/page.tsx` — the default home route and example of `next/image` usage and Tailwind classes.
- `globals.css` — global Tailwind and CSS utility setup.
- `next.config.ts` — any Next.js runtime/build configuration.
- `package.json` — scripts and dependency versions.

Project-specific conventions (discoverable patterns)
- Routes and pages follow the app-router convention: create a folder under `app/` with a `page.tsx` to expose a route.
- Put shared UI under `app/` (e.g., `app/components` if added). Use the TypeScript path alias when importing: `import X from "@/path/to/file"`.
- Add route-level `layout.tsx` files inside a route folder to scope layout/metadata.
- Use `next/image` for images (see `app/page.tsx`) — the project already uses the optimized Image component.
- Fonts: this repo uses `next/font` — prefer the same pattern (see `app/layout.tsx` for Geist usage).

Build / run / debug notes (exact commands)
- Development: `npm run dev` (runs `next dev`) — fast refresh and server logs printed in terminal.
- Build: `npm run build` (runs `next build`).
- Production start: `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `eslint`). The `lint` script is generic; pass file globs locally if required (e.g., `npm run lint -- .`).

Integration points & deployment
- Static assets: `public/` (served from /). See `app/page.tsx` using `/next.svg` and `/vercel.svg`.
- Deployment target: Vercel is the recommended flow (README mentions Vercel). `next.config.ts` is present for customization.

Examples for common edits
- Add a new page at `/hello`: create `app/hello/page.tsx` exporting a React component.
- Add nested layout for `/admin`: create `app/admin/layout.tsx` and `app/admin/page.tsx`.
- Add a shared component: create `app/components/MyButton.tsx` and import it with `import MyButton from "@/app/components/MyButton"`.

Search shortcuts for agents
- Configuration and scripts: `package.json`, `next.config.ts`, `tsconfig.json`.
- Entry points: `app/layout.tsx`, `app/page.tsx`.
- Styling and assets: `globals.css`, `postcss.config.mjs`, `public/`.

What *not* to assume
- There are no tests, CI configs, or API route folders in the repository snapshot — don't add test/CI changes unless requested.
- `eslint` script is present but may need explicit file targets in some environments.

If you change runtime behavior
- Update `next.config.ts` and `package.json` scripts accordingly and call out required environment variables in the PR description.

If anything here is unclear or you'd like more detail (e.g., conventions for placing components, state management recommendations, or example PR templates), tell me which area to expand and I will update this file.
