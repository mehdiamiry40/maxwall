import type { Metadata } from "next";
import Image from "next/image";
import { container, CoursesMotif, CtaSection, Footer, Header, PageHero, Pill } from "@/components/ui";
import { images } from "@/lib/images";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Max Wall Building Solutions is an Adelaide render and cladding business focused on honest pricing, tidy sites and a finish that lasts.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Straight talking",
    body: "We tell you what your walls need, not what's most expensive. If a patch will do, we'll say so.",
  },
  {
    title: "Respect for your home",
    body: "Paths, windows and gardens get covered before we start, and the site is left clean every day.",
  },
  {
    title: "Detail in the finish",
    body: "Straight corners, crisp edges and even texture. It's the small things that make a wall look right.",
  },
  {
    title: "Easy to deal with",
    body: "We turn up when we say, keep you in the loop and answer the phone. Simple as that.",
  },
];

const clients = [
  { title: "Homeowners", body: "Facade makeovers, re-renders, extensions and repairs on the family home." },
  { title: "Builders", body: "Reliable render and cladding crews who fit your schedule on new homes and units." },
  { title: "Investors & strata", body: "Pre-sale refreshes and maintenance work that lifts value and street appeal." },
];

export default function AboutPage() {
  return (
    <>
      <Header overlay />
      <main className="flex-1">
        <PageHero
          eyebrow="About us"
          title="Local tradespeople who care how your walls turn out"
          intro={`${site.legalName} renders and clads homes right across Adelaide.`}
          image={images.about}
        />

        <section className="bg-sandstone py-24 sm:py-28">
          <div className={`${container} grid items-center gap-14 md:grid-cols-[1.1fr_1fr]`}>
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Our story</h2>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
                <p>
                  Max Wall started with a simple idea: rendering and cladding done properly, by
                  people who actually pick up the phone.
                </p>
                <p>
                  Based in Adelaide&apos;s northern suburbs, we work with homeowners, builders and
                  investors from Gawler to Seaford and up into the Hills. From a single feature
                  wall to a full two-storey facade, every job gets the same care.
                </p>
                <p>
                  We look after the whole wall, from Hebel, foam and fibre cement installs through
                  to render, texture and paint, so you&apos;re not juggling trades.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.services["hebel-aac-panels"].src}
                  alt={images.services["hebel-aac-panels"].alt}
                  fill
                  sizes="(min-width: 768px) 440px, 90vw"
                  className="object-cover"
                />
              </div>
              <CoursesMotif className="absolute -bottom-8 -left-6 w-28 text-bluestone sm:-left-12 sm:w-36" />
            </div>
          </div>
        </section>

        <section className="bg-sandstone pb-24">
          <div className="texture mx-auto max-w-6xl bg-bluestone px-5 py-16 text-white sm:px-16 sm:py-20">
            <h2 className="font-display text-3xl sm:text-4xl">What you can count on</h2>
            <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
              {pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="max-w-[14rem] font-display text-2xl leading-snug">{p.title}</h3>
                  <div className="my-6 h-px bg-ochre" />
                  <p className="leading-relaxed opacity-90">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_2fr]`}>
            <h2 className="font-display text-4xl leading-tight">How we work with you</h2>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title}>
                  <div className="mb-5 h-px bg-ink/25" />
                  <h3 className="font-display text-2xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-24 text-white">
          <Image src={images.skyline.src} alt={images.skyline.alt} fill sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-bluestone/70" />
          <div className={container}>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Who we work for</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {clients.map((c) => (
                <div key={c.title}>
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <div className="my-5 h-px bg-ochre" />
                  <p className="leading-relaxed opacity-90">{c.body}</p>
                </div>
              ))}
            </div>
            <Pill href="/contact" variant="white" className="mt-12">
              Work with us
            </Pill>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
