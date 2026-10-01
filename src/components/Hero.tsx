import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { images } from "@/lib/images";
import { phoneHref, site } from "@/lib/site";

const heroHighlights = [
  "Cement & acrylic render, Hebel and cladding",
  "Free fixed-price quotes",
  "Clean workmanship from prep to final coat",
] as const;

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-bluestone text-white">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bluestone/95 via-bluestone/75 to-bluestone/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

      <div className="relative mx-auto flex min-h-[620px] max-w-6xl flex-col items-start justify-center px-4 py-20 text-left sm:px-6 sm:py-24">
        <h1 className="max-w-[22rem] font-display text-5xl font-semibold leading-[0.98] text-white drop-shadow-sm sm:max-w-4xl sm:text-6xl lg:text-7xl">
          Adelaide Wall Render &amp; Cladding
        </h1>

        <p className="mt-7 max-w-[21rem] text-lg font-medium leading-relaxed text-white/88 sm:max-w-2xl sm:text-xl">
          {site.name} renders and clads homes, extensions and new builds right across Adelaide, from
          the first panel to the final texture coat.
        </p>

        <ul className="mt-8 flex w-full max-w-2xl flex-col gap-3 text-sm font-semibold text-white/90 sm:text-base">
          {heroHighlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-0.5 font-display text-xl leading-none text-ochre" aria-hidden>
                &gt;
              </span>
              <span className="leading-snug drop-shadow-sm">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start justify-center gap-5 sm:flex-row sm:items-center">
          <a
            href={phoneHref}
            className="inline-flex min-w-44 items-center justify-center gap-2 bg-ochre px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-white hover:text-bluestone"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phone}
          </a>
          <span className="text-base text-white/88">
            or{" "}
            <Link href="/#contact" className="underline decoration-white underline-offset-2 hover:text-white">
              request a free quote
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
