import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";
import { phoneHref, site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-porcelain py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Details */}
        <Reveal className="rounded-lg bg-charcoal p-7 text-white sm:p-9">
          <span className="text-xs font-medium uppercase text-white/50">Get in touch</span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">Ready for a free quote?</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/62">
            Call us or send a quick message about your walls. We&apos;ll get back to you with honest
            advice and a fixed price.
          </p>

          <dl className="mt-10 divide-y divide-white/12 border-y border-white/12">
            <ContactRow icon={Phone} label="Call us" value={site.phone} href={phoneHref} />
            <ContactRow icon={Mail} label="Email us" value={site.email} href={`mailto:${site.email}`} />
            <ContactRow icon={Clock} label="Opening hours" value={site.hours} />
            <ContactRow icon={MapPin} label="Service area" value={site.serviceArea} />
          </dl>

          <p className="mt-6 text-sm text-white/50">
            {site.legalName} · ABN {site.abn}
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={100}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 py-5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ochre" strokeWidth={1.5} aria-hidden />
      <div>
        <dt className="text-xs uppercase text-white/65">{label}</dt>
        <dd className="mt-1 text-base font-medium text-white">
          {href ? (
            <a href={href} className="transition hover:text-white/75">
              {value}
            </a>
          ) : (
            value
          )}
        </dd>
      </div>
    </div>
  );
}
