import Image from "next/image";
import Link from "next/link";
import { Arrow, WallIcon, type WallIconName } from "@/components/brand";
import { container, FaqList, Reveal, section, TextLink } from "@/components/ui";
import { projectTypes } from "@/lib/home";
import { blurProps, images } from "@/lib/images";
import { faqs } from "@/lib/site";

const audiences = [
  {
    ...projectTypes[0],
    image: images.services["acrylic-render"],
    icon: "wall" as const,
    summary: "Refresh your facade, finish an extension or repair tired walls.",
  },
  {
    ...projectTypes[1],
    image: images.scaffold,
    icon: "measure" as const,
    summary:
      "Render, panels and cladding that work with your plans and schedule.",
  },
];
const craftsmanship: { icon: WallIconName; title: string; body: string }[] = [
  {
    icon: "wall",
    title: "Proper preparation",
    body: "Sound surfaces before the first coat.",
  },
  {
    icon: "finish",
    title: "Care in every detail",
    body: "Clean lines and a consistent finish.",
  },
  {
    icon: "repair",
    title: "A tidy site",
    body: "Your home protected, your site left clean.",
  },
];

export function ProjectTypesSection() {
  return (
    <section
      id="your-project"
      aria-labelledby="project-types-heading"
      className={`bg-white ${section}`}
    >
      <div className={container}>
        <h2
          id="project-types-heading"
          className="section-title mb-8 text-ochre sm:mb-10"
        >
          Your project. Our expertise.
        </h2>
        <div className="grid gap-9 md:grid-cols-2 md:gap-8">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 70}>
              <Link href={audience.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src={audience.image.src}
                    {...blurProps(audience.image)}
                    alt={audience.image.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <WallIcon
                    name={audience.icon}
                    className="h-8 w-8 text-ochre"
                  />
                  <h3 className="flex-1 text-2xl font-semibold text-bluestone">
                    {audience.title}
                  </h3>
                  <Arrow className="h-5 w-5 text-bluestone transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-3 max-w-lg text-bluestone">
                  {audience.summary}
                </p>
                <span className="mt-4 inline-block min-h-11 text-sm font-semibold text-bluestone underline underline-offset-4">
                  {audience.link}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-bluestone">
          Inspiration photography, not completed Max Wall projects.
        </p>
      </div>
    </section>
  );
}

export function CraftsmanshipSection() {
  return (
    <section
      id="craftsmanship"
      aria-labelledby="craftsmanship-heading"
      className={`bg-white ${section}`}
    >
      <div
        className={`${container} grid gap-8 md:grid-cols-2 md:items-center md:gap-14`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-white md:aspect-[4/5]">
          <Image
            src={images.servicesBanner.src}
            {...blurProps(images.servicesBanner)}
            alt={images.servicesBanner.alt}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-[10px] text-bluestone">
            Inspiration photograph
          </span>
        </div>
        <Reveal>
          <h2
            id="craftsmanship-heading"
            className="section-title text-bluestone"
          >
            <span className="text-ochre">The difference</span> is in the detail.
          </h2>
          <p className="mt-4 max-w-md text-lg text-bluestone">
            A local team. Proper prep. Walls finished with care.
          </p>
          <ul className="my-7 space-y-6">
            {craftsmanship.map((item) => (
              <li key={item.title} className="flex gap-4">
                <WallIcon
                  name={item.icon}
                  className="mt-1 h-8 w-8 text-ochre"
                />
                <div>
                  <h3 className="text-lg font-semibold text-bluestone">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-bluestone">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <TextLink href="/about">Meet Max Wall</TextLink>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeFaqSection() {
  return (
    <section
      id="questions"
      aria-labelledby="home-faq-heading"
      className={`bg-white ${section}`}
    >
      <div
        className={`${container} grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}
      >
        <Reveal>
          <WallIcon name="quote" className="mb-5 h-10 w-10 text-ochre" />
          <h2 id="home-faq-heading" className="section-title text-ochre">
            A few helpful answers.
          </h2>
          <p className="mb-5 mt-4 max-w-sm text-bluestone">
            Choosing a finish or planning the job? Start here.
          </p>
          <TextLink href="/faq">All your questions answered</TextLink>
        </Reveal>
        <FaqList items={[faqs[0], faqs[1], faqs[2], faqs[4]]} />
      </div>
    </section>
  );
}
