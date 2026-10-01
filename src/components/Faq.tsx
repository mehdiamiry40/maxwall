import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

/** Two-column FAQ: heading on the left, questions on the right. */
export function Faq({
  id,
  title = "Frequently asked questions",
  description,
  items,
  className = "bg-white",
}: {
  id?: string;
  title?: string;
  description?: string;
  items: { q: string; a: string }[];
  className?: string;
}) {
  return (
    <section id={id} className={`py-18 sm:py-20 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold text-bluestone">{title}</h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-zinc-600">{description}</p>}
        </Reveal>
        <Reveal delay={100} className="divide-y divide-zinc-200 border-y border-zinc-200">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-semibold text-ink">
                {item.q}
                <Plus className="mt-0.5 h-5 w-5 shrink-0 text-ochre transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 text-base leading-relaxed text-zinc-600">{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
