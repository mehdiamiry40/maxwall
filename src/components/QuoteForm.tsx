"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestQuote, type QuoteState } from "@/app/actions";
import { services } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };

const input =
  "mt-2 w-full rounded-[3px] border border-line bg-render px-4 py-3 text-base outline-none transition placeholder:text-ink-soft/50 focus:border-ink focus:bg-white";
const label = "block text-sm font-semibold";

export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState(requestQuote, initialState);

  if (state.ok) {
    return (
      <div className="py-10 text-center" role="status">
        <p className="text-2xl font-bold">Thanks, we&apos;ve got it.</p>
        <p className="mt-3 text-ink-soft">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="service" className={label}>
          What do you need?
        </label>
        <select id="service" name="service" className={`${input} cursor-pointer`} defaultValue={defaultService}>
          <option value="" disabled>
            Choose a service
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
        <input id="suburb" name="suburb" required autoComplete="address-level2" className={input} />
      </div>

      <div>
        <label htmlFor="size" className={label}>
          Approx. wall area <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input id="size" name="size" placeholder="e.g. 80 m²" className={input} />
      </div>

      <div>
        <label htmlFor="name" className={label}>
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={input} />
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
          className={input}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="details" className={label}>
          Anything else? <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="New build, re-render, single or double storey…"
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
          <p className="mb-4 text-sm text-ochre-dark" aria-live="polite">
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-[3px] bg-ochre px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-ochre-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : "Get my free quote"}
        </button>
        <p className="mt-4 text-center text-xs text-ink-soft">
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
