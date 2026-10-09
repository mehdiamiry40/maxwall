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
import { StructuredData } from "@/components/StructuredData";
import { guides } from "@/lib/content";
import { blurProps, images } from "@/lib/images";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Render & Cladding Guides Adelaide",
  "Practical guides from Max Wall to help Adelaide homeowners choose a render finish, plan wall cladding and prepare for a quote.",
  "/guides",
);
export default function GuidesPage() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <StructuredData
          value={breadcrumbSchema([{ label: "Guides", href: "/guides" }])}
        />
        <PageHero
          crumb={[{ label: "Guides" }]}
          title="Good advice. Better walls."
          intro="Simple guidance for choosing a finish and planning your project."
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
        <CtaSection title="Want advice for your own walls?" />
      </main>
      <Footer />
    </>
  );
}
