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
  - Never show the owner's phone number or street address on the site. Only the email and the city-level location in `profile.location` (currently "Milwaukee, Wisconsin, USA") appear.

## Deployment

The site deploys as a Cloudflare Workers static-assets project via Git integration. Every push to `main` deploys.
- `wrangler.jsonc` sets `not_found_handling: "single-page-application"` for deep links.
- Do **not** add `public/_redirects`: Workers rejects `/* /index.html 200` as an infinite loop.
- `VITE_WEB3FORMS_KEY` must be a Cloudflare *build* variable, not a runtime one.

## Project history & owner preferences

Keep this section updated at the end of every session. Add a dated bullet for what was done and any new decisions or preferences.

**Owner:** Fuad Taufiqul Hakim (fuadtaufiq98@gmail.com). Graduate Student / Research Assistant, Lam Lab, Medical College of Wisconsin (since Aug 2024). Google Scholar: https://scholar.google.com/citations?user=ZOXkiTMAAAAJ

**Preferences:**
- Record all context here; never rely on resuming old sessions.
- Site writing should be accurate and sound natural, not overblown.
- Dark-first design with light toggle, glass cards, brand gradient. Keep the same pages/tabs as the original site.
- Programming skills grid stays 3 columns with equal-sized tiles.

**Log:**
- 2026-10-01: Rebuilt the old site (now in `legacy/`) with React 19, TypeScript, Vite 8 and Tailwind 4. Moved content to `src/data/`. Converted images to WebP (137 MB → 4.6 MB). Added a lazy 3D DNA helix and a Web3Forms contact form.
- 2026-10-01: Fixed the Cloudflare deploy with wrangler SPA routing (`_redirects` was rejected).
- 2026-10-01: Polished the skills, album, publication and certificate cards. Restored the 3-column programming skills layout and brightened the "Offered by" label.
- 2026-10-01: Added CLAUDE.md. Updated the current position to the MCW Lam Lab and rewrote the About section.

**Open questions for the owner** (unconfirmed content currently on the site):
- Do the Lam Lab technique bullets (cloning, plasmid prep, microinjection, genotyping, live imaging, Python image analysis) match their real work? They came from the lab's job posts.
- Name of the graduate program, to add as the top Education entry (Aug 2024 – Present).
- Confirm Milwaukee as the site location (`profile.location`).
