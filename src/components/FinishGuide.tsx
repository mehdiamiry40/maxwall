import {
  Arrow,
  Button,
  Check,
  container,
  Eyebrow,
  Reveal,
} from "@/components/ui";
import Link from "next/link";
import { finishOptions } from "@/lib/home";

export function FinishGuide() {
  return (
    <section id="finish-guide" className="bg-sandstone py-20 sm:py-24">
      <div className={container}>
        <Reveal className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>A little guidance goes a long way</Eyebrow>
            <h2 className="section-title mt-4 text-bluestone">
              A finish that fits
              <br className="hidden sm:block" /> your home.
            </h2>
          </div>
          <p className="max-w-lg leading-relaxed text-ink-soft md:justify-self-end">
            The right choice starts with what&apos;s underneath. Here&apos;s a
            simple guide to three popular options. We&apos;ll check your walls
            and help you narrow it down on site.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {finishOptions.map((option, index) => (
            <Reveal
              key={option.slug}
              delay={index * 70}
              className="flex flex-col rounded-sm border border-line bg-white p-6 shadow-sm shadow-bluestone/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-bluestone/10 sm:p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-ink-soft uppercase">
                  {option.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-13 w-13 rounded-full border border-black/5 ${index < 2 ? "texture-swatch" : "bg-[repeating-linear-gradient(0deg,transparent,transparent_10px,#ffffff50_10px,#ffffff50_12px)]"}`}
                  style={{
                    backgroundColor: option.colour,
                    backgroundBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-bluestone">{option.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {option.description}
              </p>
              <div className="mb-6 mt-6 space-y-3 border-t border-line pt-5 text-xs leading-relaxed">
                <p className="flex gap-2">
                  <Check />
                  {option.suits}
                </p>
                <p className="flex gap-2">
                  <Check />
                  {option.detail}
                </p>
              </div>
              <Link
                href={`/services/${option.slug}`}
                className="flex min-h-11 items-center justify-between border-t border-line pt-4 text-sm font-semibold text-sky-ink hover:text-ink"
              >
                Explore this finish <Arrow />
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">
              Not sure where to start?
            </span>{" "}
            You don&apos;t need to know the technical details. That&apos;s our
            job.
          </p>
          <Button href="/contact" variant="outline" className="shrink-0">
            Let&apos;s talk through it <Arrow />
          </Button>
        </div>
      </div>
    </section>
  );
}
