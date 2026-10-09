import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/brand";
import { Reveal } from "@/components/Reveal";
import { blurProps, images } from "@/lib/images";
import type { Service } from "@/lib/site";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const img = images.services[service.slug];
  return (
    <Reveal delay={(index % 3) * 70} className="flex">
      <Link
        href={`/services/${service.slug}`}
        className="group flex w-full flex-col overflow-hidden surface-card transition duration-300 hover:-translate-y-0.5 hover:border-sky-deep/40 hover:shadow-lg hover:shadow-bluestone/10"
      >
        {img && (
          <div className="relative aspect-[16/10] overflow-hidden bg-sandstone">
            <Image
              src={img.src}
              {...blurProps(img)}
              alt={img.alt}
              fill
              sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        )}
        <div className="relative flex flex-1 flex-col p-6">
          <h3 className="flex items-center justify-between gap-4 text-xl font-bold text-bluestone transition-colors group-hover:text-sky-ink">
            {service.title}
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line transition-colors group-hover:border-ochre group-hover:bg-ochre group-hover:text-white">
              <Arrow className="h-4 w-4" />
            </span>
          </h3>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
            {service.body}
          </p>
          <span className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-sky-deep transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      </Link>
    </Reveal>
  );
}
