# Max Wall — maxwall.com.au

Website for Max Wall Building Solutions Pty Ltd, render and cladding specialists in Adelaide, SA.

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Editing content

- Business details, services, areas, FAQs: `src/lib/site.ts`
- Photos: `src/lib/images.ts` (Unsplash for now — swap in real job photos under `public/images/`)

## Quote form email

The quote form sends email via [Resend](https://resend.com). Set these environment variables in Vercel:

- `RESEND_API_KEY`
- `QUOTE_TO_EMAIL` — where quote requests go (comma-separated for several)
- `QUOTE_FROM_EMAIL` — optional sender, on a domain verified in Resend

## Development

```bash
npm install
npm run dev
```
