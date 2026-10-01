"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { phoneHref, serviceBySlug, services, site } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };

const fieldClass =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-zinc-500 focus:border-ochre focus:ring-1 focus:ring-ochre/25";

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(requestQuote, initialState);
  const serviceRef = useRef<HTMLSelectElement>(null);

  // Service pages link to /?service=<slug>#contact — preselect that service.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    const title = slug ? serviceBySlug(slug)?.title : undefined;
    if (title && serviceRef.current) serviceRef.current.value = title;
  }, []);

  if (state.ok) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-lg border border-zinc-200 bg-white p-10 text-center shadow-sm shadow-zinc-200/60">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-success text-white">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">Thanks — request received</h3>
        <p className="mt-2 max-w-sm text-sm text-zinc-500">{state.message} Need us sooner? Give us a call.</p>
        <a
          href={phoneHref}
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-ink transition hover:bg-zinc-50"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-200/60 sm:p-8"
    >
      <h3 className="font-display text-lg font-semibold text-ink">Request your free quote</h3>
      <p className="mt-1 text-sm text-zinc-500">We&apos;ll get back to you, usually within the hour.</p>

      {/* Honeypot field — hidden from humans, catches bots. */}
      <div className="hidden" aria-hidden>
        <label>
          Leave this empty
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Mobile" name="mobile" type="tel" autoComplete="tel" inputMode="tel" required />
        <Field label="Email" name="email" type="email" autoComplete="email" className="sm:col-span-2" />
        <Field label="Suburb" name="suburb" autoComplete="address-level2" placeholder="e.g. Mawson Lakes" required />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium text-ink">
            Service needed
          </label>
          <select ref={serviceRef} id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <Field label="Approx. wall area" name="size" placeholder="e.g. 80 m²" className="sm:col-span-2" />
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="details" className="text-sm font-medium text-ink">
            Tell us about your project
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="e.g. Re-render the front of a single-storey brick home."
            className={fieldClass}
          />
        </div>
      </div>

      {state.message && (
        <p role="alert" className="mt-4 rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-ink">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ochre px-6 py-3.5 text-base font-medium text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send my request
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-zinc-500">
        By submitting, you agree to be contacted about your enquiry (
        <Link href="/privacy" className="underline">
          privacy policy
        </Link>
        ).
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {props.required && <span className="text-zinc-500"> *</span>}
      </label>
      <input id={name} name={name} type={type} className={fieldClass} {...props} />
    </div>
  );
}
