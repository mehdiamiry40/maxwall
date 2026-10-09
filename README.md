# Max Wall — maxwall.com.au

Website for Max Wall Building Solutions Pty Ltd, render and cladding specialists in Adelaide, SA.

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Editing content

- Business details, services, areas, FAQs: `src/lib/site.ts`
- Homepage inspiration, finish guide and project types: `src/lib/home.ts`
- Photos: `src/lib/images.ts` and `public/images/` (locally hosted, optimised Unsplash images — swap in real job photos when available)

The homepage and services page share a filterable service catalogue and a finish comparison guide.
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
