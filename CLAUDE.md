# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (single-page app): React 19 + TypeScript + Vite 8 (Rolldown) + Tailwind CSS 4, deployed as a Cloudflare Worker with static assets.

## Commands

```bash
npm run dev              # dev server (http://localhost:5173)
npm run build            # tsc -b && vite build → dist/
npm run preview          # serve dist/ locally (use this to verify production behaviour)
npm run lint             # ESLint 9 flat config (legacy/ and dist/ ignored)
npm run typecheck        # tsc -b --noEmit
npx prettier --write src # formatting (printWidth 100)
npm run optimize-images  # regenerate WebP images from originals (see below)
```

There is no test suite; verify with `lint`, `typecheck`, `build`, then check the `preview` build in a browser.

## Version constraints (don't "upgrade" past these)

- `typescript` is pinned to `~6.0` because `typescript-eslint` supports only `<6.1`.
- `react`/`react-dom` are pinned to `~19.3` because `@react-three/fiber` requires `<19.4`.
- Routing uses `react-router` v8 in data/SPA mode (`createBrowserRouter` from `react-router`, `RouterProvider` from `react-router/dom`).
- Don't add manual chunk groups for three.js in `vite.config.ts`: Rolldown pulls shared deps into the group and the 3D chunk then gets modulepreloaded on every page. The lazy `import()` already splits it.

## Architecture

- **Content is data-driven.** All site text, links and image references live in `src/data/*.ts` (typed by `src/types/content.ts`). Components in `src/sections/` (one folder per home-page section) and `src/pages/` only render that data. Content edits should touch `src/data/` only. Section ids/titles and navbar links are in `src/data/site.ts`.
- **Images:** originals live in `legacy/src/assets/img/` (git-ignored, local only). `scripts/optimize-images.mjs` (sharp) resizes them and writes kebab-case `.webp` files into `src/assets/images/`, mirroring the folder layout. Those outputs are committed. Data files reference images through `img("folder/file-name")` from `src/lib/images.ts`, an eager `import.meta.glob` lookup that throws if the file is missing.
- **Routing** (`src/app/router.tsx`):
  - `/` renders HomePage.
  - `/certificates` is lazy-loaded via the route `lazy` field.
  - `*` renders NotFoundPage, which also serves as the root `ErrorBoundary`.
  - `RootLayout` wraps everything in `LazyMotion`/`MotionConfig reducedMotion="user"`.
  - Navbar links are hash links like `/#about`. `components/layout/ScrollToHash.tsx` performs the scroll after navigation, and `useActiveSection` highlights the nav item for the section in view.
- **Animation:** use `Reveal` (`components/ui/Reveal.tsx`, which renders `m.div` from `motion/react-m`). `LazyMotion` is `strict`, so importing `motion.div` will throw.
- **3D:** `components/three/DnaHelix.tsx` is the only WebGL canvas. It's built with plain react-three-fiber instanced meshes (drei isn't installed). `Hero` lazy-loads it only when `(min-width: 1024px) and (prefers-reduced-motion: no-preference)` matches.
- **Theming:**
  - Dark mode is class-based (`@custom-variant dark` in `src/styles/globals.css`).
  - An inline script in `index.html` applies the saved or system theme before first paint, and `src/lib/theme.ts` toggles and persists it.
  - Brand colours are Tailwind theme tokens: `brand-pink`, `brand-orange`, `brand-teal`.
  - Shared utilities are `glass` (card surface) and `text-gradient`.
  - Every colour needs a `dark:` counterpart. Muted text such as `text-zinc-500` is hard to read on dark glass cards.
- **Buttons:** class strings live in `components/ui/buttonStyles.ts`, separate from `Button.tsx`, because of the `react-refresh/only-export-components` lint rule.
- **Contact form** (`sections/contact/Contact.tsx`):
  - Posts to Web3Forms using `VITE_WEB3FORMS_KEY`. The key is public by design and baked in at build time.
  - Without a key, the submit button is disabled and a "please email me" notice shows.
  - Never show the owner's phone number or street address on the site. Only the email and "Dinajpur, Bangladesh" appear.

## Deployment

The site deploys as a Cloudflare Workers static-assets project via Git integration. Every push to `main` deploys.
- `wrangler.jsonc` sets `not_found_handling: "single-page-application"` for deep links.
- Do **not** add `public/_redirects`: Workers rejects `/* /index.html 200` as an infinite loop.
- `VITE_WEB3FORMS_KEY` must be a Cloudflare *build* variable, not a runtime one.
