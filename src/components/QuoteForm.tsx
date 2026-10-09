"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };

/**
 * Quote request form. `compact` is the short version in the home quote section:
 * the optional wall-area field is dropped. Labels stay visible for clarity.
 */
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

  const input = `mt-2 w-full rounded-md border border-line text-base transition placeholder:text-ink-soft focus:border-sky-deep focus:bg-white focus:ring-2 focus:ring-sky/25 ${
    compact ? "min-h-11 bg-white px-3 py-2.5" : "min-h-12 bg-render px-4 py-3"
  }`;
  const label = "block text-xs font-semibold text-bluestone";
  const optional = (
    <span className="font-normal text-ink-soft">(optional)</span>
  );

  if (state.ok) {
    return (
      <div className="py-10 text-center" role="status">
        <p className="font-display text-3xl font-bold text-bluestone">
          Thanks, we&apos;ve got it.
        </p>
        <p className="mt-3 text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className={`grid sm:grid-cols-2 ${compact ? "gap-x-4 gap-y-5" : "gap-x-5 gap-y-5"}`}
    >
      <div className={compact ? "" : "sm:col-span-2"}>
        <label htmlFor="service" className={label}>
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className={`${input} cursor-pointer`}
          defaultValue={defaultService}
        >
          <option value="" disabled>
            {compact ? "Service needed" : "Choose a service"}
          </option>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="suburb" className={label}>
          Suburb
        </label>
        <input
          id="suburb"
          name="suburb"
          required
          autoComplete="address-level2"
          placeholder={compact ? "e.g. Glenelg" : "e.g. Mawson Lakes"}
          className={input}
        />
      </div>

      {!compact && (
        <div>
          <label htmlFor="size" className={label}>
            Approx. wall area {optional}
          </label>
          <input
            id="size"
            name="size"
            placeholder="e.g. 80 m²"
            className={input}
          />
        </div>
      )}

      <div>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder={compact ? "Your name" : undefined}
          className={input}
        />
      </div>

      <div>
        <label htmlFor="mobile" className={label}>
          Mobile
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder={compact ? "Your mobile number" : undefined}
          className={input}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className={label}>
          Email {optional}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={compact ? "you@example.com" : undefined}
          className={input}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="details" className={label}>
          Anything else? {optional}
        </label>
        <textarea
          id="details"
          name="details"
          rows={compact ? 2 : 3}
          placeholder={
            compact
              ? "Tell us about the job (optional)"
              : "Tell us about your walls, the look you're after and your ideal timing…"
          }
          className={input}
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

      <div className="sm:col-span-2">
        {state.message && (
          <p
            className="mb-3 text-sm font-semibold text-ochre-dark"
            aria-live="polite"
          >
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className={`min-h-12 w-full rounded-md bg-bluestone px-6 text-sm font-semibold text-white transition-colors hover:bg-bluestone-soft disabled:opacity-60 ${
            compact ? "py-3" : "py-4"
          }`}
        >
          {pending ? "Sending…" : "Get my free quote"}
        </button>
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft">
          No obligation. We only use your details to quote your job (
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          ).
        </p>
      </div>
    </form>
  );
}
