"use client";

import { phoneHref, site } from "@/lib/site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="bg-porcelain">
      <div className="mx-auto max-w-3xl px-4 py-28 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold text-bluestone sm:text-5xl">Something went wrong</h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-zinc-600">
          Sorry about that. Please try again, or call us on {site.phone}.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="bg-ochre px-7 py-4 text-base font-semibold text-white transition hover:bg-ochre-dark"
          >
            Try again
          </button>
          <a href={phoneHref} className="border border-ochre px-7 py-4 text-base font-semibold text-ochre">
            Call {site.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
