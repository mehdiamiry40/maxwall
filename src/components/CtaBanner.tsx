import Link from "next/link";
import { Reveal } from "./Reveal";
import { phoneHref, site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden bg-ochre px-6 py-20 text-center text-white shadow-2xl shadow-zinc-300/70 sm:px-10">
        {/* Weatherboard courses across the banner */}
        <div className="courses absolute inset-0 -z-10 text-black/60" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,transparent_0%,transparent_50%,rgba(20,29,35,0.25)_51%,rgba(20,29,35,0.25)_100%)]" />
        <div className="relative">
          <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">Contact us today.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg font-semibold leading-relaxed text-white">
            Whether it&apos;s a re-render, new cladding or a Hebel install, we can help. Contact us for a
            free, fixed-price quote.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center border border-white px-8 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-ochre"
            >
              {site.phone}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white px-8 py-3 text-base font-semibold text-ochre transition hover:bg-bluestone hover:text-white"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
