import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { images } from "@/lib/images";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading title="Our Render, Cladding and Hebel Services" />

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {services.map((service, i) => {
            const img = images.services[service.slug];
            return (
              <Reveal key={service.slug} delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative aspect-[1.16] overflow-hidden bg-linen">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-bluestone">{service.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink">{service.intro}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex text-base font-medium text-ochre underline underline-offset-2 transition hover:text-ochre-dark"
                  >
                    Learn more
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
