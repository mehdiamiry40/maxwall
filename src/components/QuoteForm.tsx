"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };

/** The hero shows the essential fields first; optional details can be expanded. */
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
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    suburb: "",
    service: defaultService,
    size: "",
    email: "",
    details: "",
  });
  const prefix = compact ? "hero-" : "";
  const input =
    "mt-1.5 min-h-12 w-full rounded-lg border border-line bg-render/70 px-3 py-2.5 text-base text-ink transition placeholder:text-ink-soft focus:border-sky-deep focus:bg-white focus:ring-2 focus:ring-sky/20";
  const label = "block text-sm font-semibold text-bluestone";
  const optional = (
    <span className="font-normal text-ink-soft">(optional)</span>
  );
  function field(key: keyof typeof values) {
    return {
      id: `${prefix}${key}`,
      name: key,
      value: values[key],
      onChange: (
        event: React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
      ) =>
        setValues((previous) => ({ ...previous, [key]: event.target.value })),
    };
  }

  if (state.ok)
    return (
      <div className="py-10 text-center" role="status">
        <span
          aria-hidden="true"
          className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-sky-soft text-xl text-sky-ink"
        >
          ✓
        </span>
        <p className="mt-5 font-display text-3xl font-bold text-bluestone">
          Thanks, we&apos;ve got it.
        </p>
        <p className="mt-3 text-ink-soft">{state.message}</p>
      </div>
    );

  const extras = (
    <>
      <div>
        <label htmlFor={`${prefix}email`} className={label}>
          Email {optional}
        </label>
        <input
          {...field("email")}
          type="email"
          autoComplete="email"
          onInvalid={(event) => {
            event.currentTarget.closest("details")?.setAttribute("open", "");
          }}
          placeholder="you@example.com"
          className={input}
        />
      </div>
      <div>
        <label htmlFor={`${prefix}details`} className={label}>
          Project details {optional}
        </label>
        <textarea
          {...field("details")}
          rows={compact ? 2 : 3}
          placeholder="Your walls, preferred finish or timing…"
          className={input}
        />
      </div>
    </>
  );

  return (
    <form
      action={formAction}
      // React resets the native form after an action, including validation failures.
      // Preserve the controlled fields; successful submissions replace the form.
      onReset={(event) => event.preventDefault()}
      className={`grid gap-x-4 gap-y-4 ${compact ? "grid-cols-2" : "sm:grid-cols-2"}`}
    >
      <div>
        <label htmlFor={`${prefix}name`} className={label}>
          Name <span className="text-ochre-dark">*</span>
        </label>
        <input
          {...field("name")}
          required
          autoComplete="name"
          placeholder="Your name"
          className={input}
        />
      </div>
      <div>
        <label htmlFor={`${prefix}mobile`} className={label}>
          Mobile <span className="text-ochre-dark">*</span>
        </label>
        <input
          {...field("mobile")}
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="Mobile number"
          className={input}
        />
      </div>
      <div>
        <label htmlFor={`${prefix}service`} className={label}>
          Service
        </label>
        <select {...field("service")} className={`${input} cursor-pointer`}>
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((service) => (
            <option key={service.slug}>{service.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${prefix}suburb`} className={label}>
          Suburb <span className="text-ochre-dark">*</span>
        </label>
        <input
          {...field("suburb")}
          required
          autoComplete="address-level2"
          placeholder="e.g. Glenelg"
          className={input}
        />
      </div>
      {!compact && (
        <div className="sm:col-span-2">
          <label htmlFor="size" className={label}>
            Approx. wall area {optional}
          </label>
          <input
            {...field("size")}
            placeholder="e.g. 80 m²"
            className={input}
          />
        </div>
      )}
      {compact ? (
        <details className="group col-span-2 border-y border-line py-3">
          <summary className="flex min-h-8 list-none items-center justify-between gap-3 text-sm font-semibold text-sky-ink">
            Add email or project details{" "}
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-3 grid gap-4">{extras}</div>
        </details>
      ) : (
        <div className="grid gap-4 sm:col-span-2">{extras}</div>
      )}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className={compact ? "col-span-2" : "sm:col-span-2"}>
        {state.message && (
          <p
            className="mb-3 rounded-lg border border-ochre/20 bg-orange-50 p-3 text-sm font-semibold text-ochre-dark"
            role="alert"
          >
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-ochre px-5 py-3 font-display text-xl font-bold tracking-wide text-white uppercase transition-colors hover:bg-ochre-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : "Get my free quote"}
          {!pending && <span aria-hidden="true">→</span>}
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft">
          No obligation. Your details stay private.{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy policy
          </Link>
        </p>
      </div>
    </form>
  );
}
