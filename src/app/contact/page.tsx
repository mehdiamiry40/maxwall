import type { Metadata } from "next";
import Image from "next/image";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer, Header, PhoneIcon } from "@/components/ui";
import { images } from "@/lib/images";
import { phoneHref, serviceBySlug, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free, fixed-price render or cladding quote anywhere in Adelaide.",
  alternates: { canonical: "/contact" },
};

export default async function Contact(props: PageProps<"/contact">) {
  const { service } = await props.searchParams;
  const preselected = typeof service === "string" ? serviceBySlug(service)?.title : undefined;

  return (
    <>
      <Header />
      <main className="flex-1 bg-sandstone">
        <div className="mx-auto grid w-full max-w-5xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.6fr] md:py-28">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-ink-soft uppercase">Contact</p>
            <h1 className="font-display text-5xl leading-tight">Let&apos;s talk walls</h1>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Tell us a little about the job and we&apos;ll get back to you with a price. We
              usually reply within the hour.
            </p>
            <div className="my-8 h-px bg-ochre" />
            <div className="space-y-3">
              <a href={phoneHref} className="flex items-center gap-3 font-display text-2xl">
                <PhoneIcon className="h-5 w-5 text-ochre" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block text-ink-soft hover:text-ink">
                {site.email}
              </a>
              <p className="text-ink-soft">{site.hours}</p>
              <p className="text-ink-soft">Servicing all of {site.city}</p>
            </div>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden md:block">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                sizes="340px"
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
          <div className="self-start bg-render p-7 sm:p-12">
            <h2 className="mb-8 font-display text-3xl">Request a free quote</h2>
            <QuoteForm defaultService={preselected} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
