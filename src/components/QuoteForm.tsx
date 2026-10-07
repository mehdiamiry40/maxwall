"use client";

import Link from "next/link";
import { useActionState, useState, type ChangeEvent } from "react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };
const label = "block text-sm font-semibold";

export function QuoteForm({
  defaultService = "",
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    requestQuote,
    initialState,
  );
  // Controlled fields retain the customer's details when a server action returns an error.
  const [values, setValues] = useState(() => ({
    name: "",
    mobile: "",
    suburb: "",
    service: defaultService,
    email: "",
    details: "",
    size: "",
  }));
  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }
  const id = (field: string) => (compact ? `hero-${field}` : field);
  const input = `mt-1.5 min-h-11 w-full rounded-sm border border-navy/55 bg-white px-3 text-base transition placeholder:text-ink-soft focus:border-navy ${compact ? "py-2" : "min-h-12 bg-sky-soft/40 px-4 py-3"}`;
  const fieldLabel = compact ? "block text-xs font-semibold" : label;
  const fullWidth = compact ? "col-span-2" : "sm:col-span-2";

  if (state.ok) {
    return (
      <div className="py-10 text-center" role="status">
        <span
          aria-hidden="true"
          className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-sky-soft text-2xl text-navy"
        >
          ✓
        </span>
        <p className="text-2xl font-bold">Thanks, we&apos;ve got it.</p>
        <p className="mt-3 text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      aria-label="Request a free quote"
      action={formAction}
      className={`grid ${compact ? "grid-cols-2 gap-x-3 gap-y-3" : "gap-x-5 gap-y-5 sm:grid-cols-2"}`}
    >
      <div className={compact ? "col-span-2" : ""}>
        <label htmlFor={id("name")} className={fieldLabel}>
          Name
        </label>
        <input
          id={id("name")}
          name="name"
          value={values.name}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder={compact ? "Your name" : undefined}
          className={input}
        />
      </div>
      <div>
        <label htmlFor={id("mobile")} className={fieldLabel}>
          Mobile
        </label>
        <input
          id={id("mobile")}
          name="mobile"
          value={values.mobile}
          onChange={handleChange}
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder={compact ? "04xx xxx xxx" : undefined}
          className={input}
        />
      </div>
      <div>
        <label htmlFor={id("suburb")} className={fieldLabel}>
          Suburb
        </label>
        <input
          id={id("suburb")}
          name="suburb"
          value={values.suburb}
          onChange={handleChange}
          required
          autoComplete="address-level2"
          placeholder={compact ? "Your suburb" : "e.g. Mawson Lakes"}
          className={input}
        />
      </div>
      <div className={compact ? "col-span-2" : ""}>
        <label htmlFor={id("service")} className={fieldLabel}>
          What do you need?
        </label>
        <select
          id={id("service")}
          name="service"
          className={`${input} cursor-pointer`}
          value={values.service}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </div>
      {!compact && (
        <div className={fullWidth}>
          <label htmlFor="size" className={label}>
            Approx. wall area{" "}
            <span className="font-normal text-ink-soft">(optional)</span>
          </label>
          <input
            id="size"
            name="size"
            value={values.size}
            onChange={handleChange}
            placeholder="e.g. 80 m²"
            className={input}
          />
        </div>
      )}
      <div className={fullWidth}>
        <label htmlFor={id("email")} className={fieldLabel}>
          Email <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input
          id={id("email")}
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          autoComplete="email"
          placeholder={compact ? "you@example.com" : undefined}
          className={input}
        />
      </div>
      <div className={fullWidth}>
        <label htmlFor={id("details")} className={fieldLabel}>
          Project details{" "}
          <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id={id("details")}
          name="details"
          value={values.details}
          onChange={handleChange}
          rows={compact ? 2 : 3}
          placeholder={
            compact
              ? "New build, facade refresh or repairs?"
              : "Tell us about your walls, the look you're after and your ideal timing…"
          }
          className={`${input} resize-y`}
        />
      </div>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className={fullWidth}>
        {state.message && (
          <p className="mb-4 text-sm text-coral-dark" role="alert">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className={`flex min-h-12 w-full items-center justify-center gap-3 rounded-sm px-5 py-3 font-display text-lg font-semibold tracking-[0.04em] uppercase transition-colors disabled:opacity-60 ${compact ? "bg-navy text-white hover:bg-navy-soft" : "bg-coral text-navy hover:bg-coral-dark hover:text-white"}`}
        >
          {pending ? "Sending…" : "Get my free quote"}
          {!pending && <span aria-hidden="true">→</span>}
        </button>
        <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-ink-soft">
          Free quote. No obligation. Your details stay private.
          <br />
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy policy
          </Link>
        </p>
      </div>
    </form>
  );
}
