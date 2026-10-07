import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Check,
  container,
  Eyebrow,
  Footer,
  Header,
  PhoneIcon,
} from "@/components/ui";
import { phoneHref, serviceBySlug, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, fixed-price render or cladding quote anywhere in Adelaide.",
  alternates: { canonical: "/contact" },
};

const reassurances = [
  "Free on-site measure and quote",
  "Fixed written price, no hidden extras",
  "No obligation",
];

export default async function Contact(props: PageProps<"/contact">) {
  const { service } = await props.searchParams;
  const preselected =
    typeof service === "string" ? serviceBySlug(service)?.title : undefined;

  return (
    <>
      <Header />
      <main id="main" className="flex-1 bg-sandstone">
        <div
          className={`${container} grid gap-12 py-14 md:grid-cols-[1fr_1.5fr] md:gap-16 md:py-20`}
        >
          <div>
            <Eyebrow>Free quote</Eyebrow>
            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl text-bluestone">
              Let&apos;s talk walls
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tell us a little about the job and we&apos;ll get back to you with
              a price. We usually reply within the hour.
            </p>
            <ul className="mt-8 space-y-3">
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
          <div className="self-start rounded-sm border border-line bg-white p-6 shadow-xl shadow-ink/[0.03] sm:p-10">
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-sky-ink uppercase">
              Your next step
            </p>
            <h2 className="text-2xl font-semibold">
              Tell us about your project
            </h2>
            <p className="mb-8 mt-3 text-sm leading-relaxed text-ink-soft">
              Just a few details to get started. Don&apos;t know your wall area
              or which finish to choose? That&apos;s fine — we&apos;ll help you
              work it out.
            </p>
            <QuoteForm defaultService={preselected} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
