# Max Wall — maxwall.com.au

Website for Max Wall Building Solutions Pty Ltd: James Hardie cladding, CSR Bradford insulation, Dulux AcraStone microcement and related wall work in Adelaide, SA.

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel. Every page is prerendered; the only server code is the quote form endpoint.

## Editing content

- Business details, services, areas, FAQs: `src/lib/site.ts`
- Homepage inspiration, finish guide and project types: `src/lib/home.ts`
- Renovation, new-build, guide and area page content: `src/lib/content.ts`
- SEO metadata and structured data: `src/lib/seo.ts`
- Photos: `src/lib/images.ts` and `public/images/` (see [Photography](#photography))

Service, guide, project and area pages are generated from those files. A URL whose slug is not in them returns the 404 page.

## Design

The UI uses a blue, orange and white palette with square surfaces and large type; 14px (`text-xs`) is the smallest text size outside the logo. The colours and the shared focus ring are defined in `src/app/globals.css`.

The mobile navigation is a native modal dialog, which handles keyboard focus and Escape. Inspiration photographs are labelled as examples, not presented as completed Max Wall jobs.

## Quote form

The form (`src/components/QuoteForm.tsx`) posts to `/api/quote` (`src/app/api/quote/route.ts`), which validates the request and emails the lead through [Resend](https://resend.com) (`src/lib/quote.ts`). Without JavaScript the same form submits as a normal POST and gets a plain confirmation page.

Spam and abuse checks, all server-side:

- a hidden honeypot field and a minimum time between showing the form and submitting it (`src/lib/quote-guard.ts`)
- a same-origin check
- a limit of 5 requests per 10 minutes per IP (`src/lib/rate-limit.ts`). It is held in memory, so each server instance counts separately.

Environment variables, set on the Vercel project:

- `RESEND_API_KEY` — Resend API key
- `RESEND_EMAIL_DOMAIN` — the sending domain verified in Resend
- `QUOTE_TO_EMAIL` — where quote requests go (comma-separated for several)
- `QUOTE_FROM_EMAIL` — optional sender override; defaults to `quotes@$RESEND_EMAIL_DOMAIN`
- `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` — optional search console verification codes

`.env.example` lists them. If the email variables are missing, production answers with a "form isn't working" message; development logs the lead to the console and reports success.

## Development

```bash
npm install
npm run dev
```

`vercel env pull .env.local` copies the project's variables for local use. With a real `RESEND_API_KEY` in `.env.local`, submitting the form locally sends a real email. To test the form without sending, blank the key for that run:

```bash
RESEND_API_KEY= npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run verify
```

- `npm run typecheck` runs `next typegen` and then `tsc --noEmit`. The route types and `next-env.d.ts` are generated, not committed, so `tsc` alone fails on a fresh clone.
- `npm test` covers the rate limiter, the spam checks and the Content-Security-Policy build step.
- `npm run verify` checks the built static pages for unique titles, canonical and sharing URLs, one h1, contact links, valid JSON-LD and sitemap coverage.

GitHub Actions (`.github/workflows/ci.yml`) runs lint, typecheck, build and test on every pull request and on pushes to `main`.

## Security headers

`next.config.ts` sets the security headers, including a Content-Security-Policy that allows inline scripts by hash only. The hashes are not known until the pages are prerendered, so they are filled in after the build:

- locally, `npm run build` runs `scripts/csp-hashes.ts` after `next build`
- on Vercel, `scripts/csp-adapter.mjs` wraps Vercel's Next.js adapter so the hashes are in the header before the deployment's routing config is written

The build fails if a prerendered inline script has no hash. Because the adapter step relies on how Vercel's adapter works, check the `Content-Security-Policy` header on the deployment after upgrading Next.js.

## Deployment

Pushes to `main` deploy to production on Vercel. Other branches and pull requests get preview deployments, which sit behind Vercel sign-in.

## Photography

Photos are local files in `public/images/`, listed in `src/lib/images.ts`. The image optimizer only accepts paths under `/images/`, so a photo placed anywhere else will not load through `next/image`.

Use real licensed stock photography suited to Australian or South Australian housing and construction. Do not use AI-generated photographic assets. Stock images are examples, not completed Max Wall projects. Photo provenance is recorded in `public/images/PHOTO-CREDITS.md`; prefer verified Australian locations when choosing new photos.

## Icons

`src/app/icon.svg` is the source for the site icon. `src/app/favicon.ico`, `src/app/apple-icon.png` and the two files in `public/icons/` (used by `src/app/manifest.ts`) are rasterised copies of it and need regenerating if the mark changes.
