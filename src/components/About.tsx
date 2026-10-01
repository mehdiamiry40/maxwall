import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { trustPoints } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading align="left" title="About Max Wall Render and Cladding" />
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink">
            <p>
              Whether it&apos;s a full facade makeover, a new extension or a few cracked and drummy
              walls, we bring the care and know-how that render and cladding work needs.
            </p>
            <p>
              Every job starts with an on-site measure and a clear written quote, then moves through
              prep, panels, mesh, render and finish coat, with tidy site habits from start to
              finish.
            </p>
          </div>
          <a
            href="#services"
            className="mt-10 inline-flex border border-ochre px-6 py-3 text-base font-semibold text-ochre transition hover:bg-ochre hover:text-white"
          >
            Our services
          </a>
        </div>

        <Reveal delay={100} className="lg:pt-20">
          <ul className="space-y-9">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ochre text-white">
                  <Check className="h-6 w-6" strokeWidth={2.4} aria-hidden />
                </span>
                <span className="text-lg font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
