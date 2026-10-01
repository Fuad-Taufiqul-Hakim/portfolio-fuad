# Fuad Taufiqul Hakim — Portfolio

Personal portfolio built with **React 19 + TypeScript + Vite 8 + Tailwind CSS 4**, deployed on **Cloudflare Pages**.

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your Web3Forms key (see below)
npm run dev                  # http://localhost:5173
```

| Script                               | What it does                                              |
| ------------------------------------ | --------------------------------------------------------- |
| `npm run dev`                        | Dev server with hot reload                                |
| `npm run build`                      | Type-check + production build into `dist/`                |
| `npm run preview`                    | Serve the production build locally                        |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript checks                                |
| `npm run optimize-images`            | Convert original photos into small WebP files (see below) |

## Editing content

All text lives in **`src/data/`** — you never need to touch components to update the site:

| File              | Content                                                             |
| ----------------- | ------------------------------------------------------------------- |
| `profile.ts`      | Name, roles, tagline, bio, email, location, hero "focus area" cards |
| `experience.ts`   | Work experience                                                     |
| `education.ts`    | Education timeline                                                  |
| `skills.ts`       | Programming logos, experimental & in-silico skills                  |
| `album.ts`        | Photo album                                                         |
| `publications.ts` | Publications                                                        |
| `certificates.ts` | Certificates page (grouped by category)                             |
| `socials.tsx`     | GitHub / LinkedIn links                                             |
| `site.ts`         | Navbar links and section titles                                     |

### Adding images

1. Put the original (any size JPG/PNG) into the matching folder under `legacy/src/assets/img/` (e.g. `certificates/python/`).
2. Run `npm run optimize-images` — it writes a resized `.webp` into `src/assets/images/` (same folder, kebab-case name).
3. Reference it in the data file, e.g. `img("certificates/python/my-new-cert")`.

## Project structure

```
src/
  app/          router + root layout
  pages/        HomePage, CertificatesPage, NotFoundPage
  sections/     one folder per home-page section (hero, about, experience, …)
  components/   layout (navbar, footer, theme toggle), ui primitives, three (3D helix)
  data/         all site content
  hooks/ lib/   small helpers (media queries, active section, theme, image lookup)
  styles/       Tailwind entry + theme tokens
scripts/        image optimization
```

## Contact form

Uses [Web3Forms](https://web3forms.com) (free, no backend). Enter your email on their site to receive an access key, then set
`VITE_WEB3FORMS_KEY` in `.env.local` (local) and in Cloudflare (production). Without a key the form shows a "please email me" notice.

## Deploying to Cloudflare Pages (free)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: preset **React (Vite)**, build command `npm run build`, output directory `dist`.
4. Environment variables: `NODE_VERSION` = `22`, `VITE_WEB3FORMS_KEY` = your key.
5. Deploy. Every push to `main` redeploys automatically. (`public/_redirects` makes deep links like `/certificates` work.)
