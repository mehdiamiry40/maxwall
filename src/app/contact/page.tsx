import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Check,
  container,
  Eyebrow,
  Footer,
  Header,
  PhoneIcon,
} from "@/components/ui";
import { phoneHref, site, steps } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact Us: Free Measure & Quote in Adelaide",
  `Contact Max Wall for a free on-site measure and fixed written quote in Adelaide. Call ${site.phone}, email us or send the quote form.`,
  "/contact",
);

const reassurances = [
  "Free on-site measure and quote",
  "Fixed written price, no hidden extras",
  "No obligation",
];

const inlineLink = "font-semibold underline underline-offset-4";

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 bg-sandstone">
        <div
          className={`${container} grid gap-8 py-6 md:grid-cols-[1fr_1.5fr] md:gap-x-16 md:gap-y-10 md:py-20`}
        >
          <div className="md:col-start-1 md:row-start-1">
            <Eyebrow>Free measure &amp; quote</Eyebrow>
            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl text-bluestone">
              Contact Max Wall for a free quote
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tell us your suburb and a little about the job. We&apos;ll book a
              free on-site measure, then send a fixed written quote. We usually
              reply within the hour.
            </p>
          </div>
          <div className="self-start surface-card p-6 sm:p-10 md:col-start-2 md:row-span-2 md:row-start-1">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-sky-ink uppercase">
              Your next step
            </p>
            <h2 className="text-2xl font-semibold">
              Tell us about your project
            </h2>
            <p className="mb-8 mt-3 text-sm leading-relaxed text-ink-soft">
              Your name, mobile and suburb are enough to start. Not sure of the
              area or which product suits? That&apos;s fine. Choose &ldquo;Not
              sure yet&rdquo; and we&apos;ll work it out with you at the
              measure.
            </p>
            <QuoteForm />
          </div>
          <div className="md:col-start-1 md:row-start-2">
            <ul className="space-y-3">
              {reassurances.map((r) => (
                <li key={r} className="flex gap-3 font-medium">
                  <Check /> {r}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-sm font-semibold text-ink-soft">
                Prefer to talk?
              </p>
              <a
                href={phoneHref}
                className="mt-2 flex items-center gap-3 text-2xl font-bold"
              >
                <PhoneIcon className="h-5 w-5 text-ochre" /> {site.phone}
              </a>
              <p className="mt-3 text-ink-soft">
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
                <br />
                {site.hours}
              </p>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[2.25rem_1fr] gap-2">
                    <span className="text-lg font-bold text-sky-ink">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Read more about{" "}
                <Link href="/how-we-work" className={inlineLink}>
                  how we measure, quote and install
                </Link>
                , or check{" "}
                <Link href="/areas" className={inlineLink}>
                  the Adelaide suburbs we cover
                </Link>
                .
              </p>
            </div>
            <p className="mt-10 border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
              {site.legalName}
              <br />
              ABN {site.abn}
              <br />
              {site.city}, {site.region}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
