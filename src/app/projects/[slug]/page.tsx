import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Button,
  Check,
  container,
  CtaSection,
  Footer,
  Header,
  PageHero,
  section,
  SectionHead,
  ServiceCard,
} from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { projects } from "@/lib/content";
import { businessId, breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? pageMetadata(project.title, project.description, `/projects/${slug}`)
    : {};
}
export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <StructuredData
          value={breadcrumbSchema([
            { label: project.shortTitle, href: `/projects/${slug}` },
          ])}
        />
        <StructuredData
          value={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: project.title,
            description: project.description,
            url: `${site.url}/projects/${slug}`,
            provider: { "@id": businessId },
            areaServed: { "@type": "City", name: "Adelaide" },
          }}
        />
        <PageHero
          crumb={[{ label: project.shortTitle }]}
          title={project.title}
          intro={project.intro}
          image={project.image}
        >
          <Button href={project.quote}>Discuss your project</Button>
        </PageHero>
        <section className={`bg-white ${section}`}>
          <div className={container}>
            <ul className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-lg font-semibold"
                >
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="grid gap-9 lg:grid-cols-3">
              {project.sections.map((item) => (
                <div key={item.title}>
                  <h2 className="text-2xl font-semibold text-bluestone">
                    {item.title}
                  </h2>
                  <p className="mt-4 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`bg-white ${section}`}>
          <div className={container}>
            <SectionHead title="Services for this project" accent />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.services.map((slug) => (
                <ServiceCard
                  key={slug}
                  service={services.find((service) => service.slug === slug)!}
                />
              ))}
            </div>
          </div>
        </section>
        <CtaSection
          title="Let’s plan your wall finish."
          body="A free on-site measure and a clear, fixed written quote."
        />
      </main>
      <Footer />
    </>
  );
}
