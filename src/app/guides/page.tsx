import Image from "next/image";
import Link from "next/link";
import {
  Arrow,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  section,
} from "@/components/ui";
import { guides } from "@/lib/content";
import { blurProps, images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Cladding, Insulation & Microcement Guides",
  "Plain guides for Adelaide homeowners: Linea vs Axon vs Stria, what affects cladding cost, where to insulate first and microcement over tiles.",
  "/guides",
);
// Guides explain the choices; these pages own quoting and installation
const servicePages = [
  {
    href: "/services/james-hardie-cladding",
    label: "James Hardie cladding installation",
  },
  {
    href: "/services/re-cladding",
    label: "Re-cladding an existing home or facade",
  },
  {
    href: "/services/insulation",
    label: "Insulation for ceilings, walls and floors",
  },
  {
    href: "/services/microcement",
    label: "Microcement for bathrooms, walls and floors",
  },
];
export default function GuidesPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          crumb={[{ label: "Guides" }]}
          title="Guides for cladding, insulation and microcement projects"
          intro="Plain answers to the questions people ask before they call: which James Hardie profile to choose, what moves the price, where to insulate first, whether microcement can go over tiles and what to have ready for a quote."
          image={images.servicesBanner}
        />
        <section className={`bg-white ${section}`}>
          <div className={`${container} grid gap-9 md:grid-cols-2`}>
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={guide.image.src}
                    {...blurProps(guide.image)}
                    alt={guide.image.alt}
                    fill
                    sizes="(min-width:768px)45vw,90vw"
                    className="object-cover transition-transform group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-5 flex items-start justify-between gap-4 text-2xl font-semibold text-bluestone">
                  {guide.title}
                  <Arrow className="mt-2 h-5 w-5 shrink-0" />
                </h2>
                <p className="mt-3">{guide.intro}</p>
                <span className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
                  Read the guide
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="border-t border-line bg-white py-12 sm:py-16">
          <div className={container}>
            <h2 className="text-xl font-semibold text-bluestone">
              After a price, not a guide?
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed">
              These guides explain the choices. The service pages set out what
              we install and what is included, and{" "}
              <Link href="/how-we-work" className="underline underline-offset-4">
                how we work
              </Link>{" "}
              explains the site measure and fixed written quote.
            </p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {servicePages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center font-semibold text-bluestone underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CtaSection title="Want advice for your own walls?" />
      </main>
      <Footer />
    </>
  );
}
