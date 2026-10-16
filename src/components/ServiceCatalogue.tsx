"use client";

import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { services, type ServiceCategory } from "@/lib/site";

const categories = [
  "All services",
  ...new Set(services.map((service) => service.category)),
] as const;
type Category = "All services" | ServiceCategory;

export function ServiceCatalogue() {
  const [category, setCategory] = useState<Category>("All services");
  const visible =
    category === "All services"
      ? services
      : services.filter((service) => service.category === category);

  return (
    <>
      <div
        role="group"
        aria-label="Filter services"
        className="mb-9 flex flex-wrap gap-2"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            aria-controls="service-results"
            onClick={() => setCategory(item)}
            className={`min-h-11  border px-5 text-xs font-semibold transition-colors sm:text-sm ${category === item ? "border-bluestone bg-bluestone text-white" : "border-line bg-white text-ink-soft hover:border-sky-deep hover:text-sky-ink"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <p role="status" className="sr-only">
        Showing {visible.length} {category.toLowerCase()} options.
      </p>
      <div
        id="service-results"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </>
  );
}
