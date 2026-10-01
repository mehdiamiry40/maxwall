# Max Wall — maxwall.com.au

Website for Max Wall Building Solutions Pty Ltd, render and cladding specialists in Adelaide, SA.

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Editing content

- Business details, services, areas, FAQs: `src/lib/site.ts`
- Photos: `src/lib/images.ts` (Unsplash for now — swap in real job photos under `public/images/`)

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
