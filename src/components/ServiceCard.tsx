import Image from "next/image";
import Link from "next/link";
import { Arrow, WallIcon } from "@/components/brand";
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
  const image = images.services[service.slug];
  const icon =
    service.slug === "render-repairs"
      ? "repair"
      : service.slug.includes("cladding")
        ? "cladding"
        : "wall";
  return (
    <Reveal delay={(index % 3) * 70} className="flex">
      <Link href={`/services/${service.slug}`} className="group block w-full">
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src={image.src}
              {...blurProps(image)}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="flex items-center gap-3 border-b border-bluestone py-4">
          <WallIcon name={icon} className="h-7 w-7 text-ochre" />
          <h3 className="flex-1 text-lg font-semibold text-bluestone">
            {service.title}
          </h3>
          <Arrow className="h-5 w-5 text-bluestone transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </Reveal>
  );
}
