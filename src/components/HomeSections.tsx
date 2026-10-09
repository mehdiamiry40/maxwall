import { guides } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { Arrow, WallIcon, type WallIconName } from "@/components/brand";
import {
  Button,
  container,
  FaqList,
  Reveal,
  section,
  TextLink,
} from "@/components/ui";
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

export function FinishSelectionSection() {
  const choices = [
    {
      icon: "wall" as const,
      title: "Render",
      text: "A unified finish for brick, block and compatible wall systems.",
      href: "/guides/cement-vs-acrylic-render",
    },
    {
      icon: "cladding" as const,
      title: "Cladding",
      text: "Profiles and panels that bring texture to a facade or extension.",
      href: "/services/fibre-cement-cladding",
    },
    {
      icon: "repair" as const,
      title: "Repair & refresh",
      text: "Prepare tired surfaces before giving your walls a fresh look.",
      href: "/projects/renovations",
    },
  ];
  return (
    <section
      id="choose-your-finish"
      aria-labelledby="finish-choice-heading"
      className={`bg-white ${section}`}
    >
      <div className={container}>
        <h2
          id="finish-choice-heading"
          className="section-title mb-8 text-ochre"
        >
          Find the right finish.
        </h2>
        <div className="grid gap-7 md:grid-cols-3">
          {choices.map((choice) => (
            <Link
              key={choice.title}
              href={choice.href}
              className="group border-t-4 border-ochre py-6"
            >
              <WallIcon
                name={choice.icon}
                className="mb-5 h-10 w-10 text-ochre"
              />
              <h3 className="text-2xl font-semibold text-bluestone">
                {choice.title}
              </h3>
              <p className="mt-3 mb-4 text-base">{choice.text}</p>
              <span className="inline-flex min-h-11 items-center gap-3 font-semibold">
                Explore the options <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdviceSection() {
  return (
    <section
      id="planning-advice"
      aria-labelledby="planning-advice-heading"
      className={`bg-white ${section}`}
    >
      <div className={container}>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 id="planning-advice-heading" className="section-title text-ochre">
            Plan with confidence.
          </h2>
          <TextLink href="/guides">All guides</TextLink>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={guide.image.src}
                  {...blurProps(guide.image)}
                  alt={guide.image.alt}
                  fill
                  sizes="(min-width:768px)45vw,90vw"
                  className="object-cover transition-transform group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-5 flex items-start justify-between gap-4 text-2xl font-semibold text-bluestone">
                {guide.title}
                <Arrow className="mt-2 h-5 w-5 shrink-0" />
              </h3>
              <p className="mt-3 text-base">{guide.intro}</p>
              <span className="mt-5 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">
                Read the guide
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PaintingSection() {
  const photo = images.services.painting;
  return (
    <section
      id="painting"
      aria-labelledby="painting-heading"
      className={`bg-white ${section}`}
    >
      <div
        className={`${container} grid gap-8 md:grid-cols-2 md:items-center md:gap-14`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={photo.src}
            {...blurProps(photo)}
            alt={photo.alt}
            fill
            sizes="(min-width:768px)45vw,90vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 right-3 bg-white px-2 py-1 text-xs text-bluestone">
            Stock photograph
          </span>
        </div>
        <Reveal>
          <WallIcon name="finish" className="mb-5 h-10 w-10 text-ochre" />
          <h2 id="painting-heading" className="section-title text-bluestone">
            <span className="text-ochre">Fresh colour.</span> Inside and out.
          </h2>
          <p className="mt-4 text-lg">
            Interior and exterior wall painting, with proper preparation and a
            finish chosen for your walls.
          </p>
          <p className="mt-3 mb-6 text-base">
            Book painting on its own or combine it with your render, cladding or
            renovation work.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/services/painting">
              Explore painting <Arrow />
            </Button>
            <Button href="/contact?service=painting" variant="outline">
              Get a painting quote
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
