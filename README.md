# Max Wall — maxwall.com.au

Website for Max Wall Building Solutions Pty Ltd, render and cladding specialists in Adelaide, SA.

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Editing content

- Business details, services, areas, FAQs: `src/lib/site.ts`
- Homepage inspiration, finish guide and project types: `src/lib/home.ts`
- Renovation, new-build and guide content: `src/lib/content.ts`
- SEO metadata and structured data: `src/lib/seo.ts`
- Photos: `src/lib/images.ts` and `public/images/` (optimized local stock photography with source and licence records)

The homepage uses photo-led service cards, finish-selection links and project guides. The services page includes a filterable catalogue and finish comparison guide.
The UI uses only the exact RMI blue, orange and white palette, with square surfaces and larger typography. The hero form starts with essential details and lets visitors expand optional fields; entered details are retained after validation errors.
The mobile navigation uses a native modal dialog for keyboard focus management and Escape dismissal.
Inspiration photographs are labelled as examples, rather than presented as completed Max Wall jobs.

## Quote form email

Quote requests are emailed via [Resend](https://resend.com), connected through the Vercel Marketplace
(resource `resend-email-cerulean-magnet`, which provides `RESEND_API_KEY` and `RESEND_EMAIL_DOMAIN`).

- `QUOTE_TO_EMAIL` — where quote requests go (comma-separated for several)
- `QUOTE_FROM_EMAIL` — optional sender override; defaults to `quotes@$RESEND_EMAIL_DOMAIN`

Run `vercel env pull .env.local` to get these locally.

## Development

```bash
npm install
npm run dev
```

## Verification

Run `npm run lint`, `npm run build`, then `npm run verify`. The verification script checks the built static pages for unique titles, canonical and sharing URLs, one h1, contact links, valid JSON-LD and sitemap coverage.

`npm run build -- --webpack` is an alternate local build command when the default Turbopack subprocess is restricted. Vercel uses the default build command.

## Photography policy

Use real licensed stock photography suited to Australian or South Australian housing and construction. Do not use AI-generated photographic assets. Stock images are examples, not completed Max Wall projects. Photo provenance is recorded in `public/images/PHOTO-CREDITS.md`; prefer verified Australian locations when choosing new photos.
