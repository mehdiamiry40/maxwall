import { pageMetadata } from "@/lib/seo";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Check,
  container,
  Eyebrow,
  Footer,
  Header,
  PhoneIcon,
} from "@/components/ui";
import { phoneHref, site } from "@/lib/site";

export const metadata = pageMetadata(
  "Cladding, Insulation & Microcement Quote Adelaide",
  `Request a free on-site measure and fixed written quote for cladding, insulation, microcement or painting in Adelaide. Call Max Wall on ${site.phone}.`,
  "/contact",
);

const reassurances = [
  "Free on-site measure and quote",
  "Fixed written price, no hidden extras",
  "No obligation",
];

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1 bg-sandstone">
        <div
          className={`${container} grid gap-8 py-6 md:grid-cols-[1fr_1.5fr] md:gap-x-16 md:gap-y-10 md:py-20`}
        >
          <div className="md:col-start-1 md:row-start-1">
            <Eyebrow>Free quote</Eyebrow>
            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl text-bluestone">
              Let&apos;s talk about your home
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tell us a little about the job. We&apos;ll book a free on-site
              measure, then send a fixed written quote. We usually reply within
              the hour.
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
              Just a few details to get started. Don&apos;t know the area or
              which product to choose? That&apos;s fine — we&apos;ll help you
              work it out.
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
