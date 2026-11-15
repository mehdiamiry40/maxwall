"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  QUOTE_GENERIC_ERROR,
  type QuoteState,
} from "@/lib/quote-messages";
import { serviceBySlug, services } from "@/lib/site";

const initialState: QuoteState = { ok: false, message: "" };

function subscribeToServiceQuery() {
  return () => {};
}

function serviceSlugFromLocation(): string {
  return new URLSearchParams(window.location.search).get("service") ?? "";
}

function emptyServiceSlug(): string {
  return "";
}

/** `?service=` is read on the client so /contact can stay a static document. */
function useRequestedServiceTitle(): string {
  const slug = useSyncExternalStore(
    subscribeToServiceQuery,
    serviceSlugFromLocation,
    emptyServiceSlug,
  );
  return serviceBySlug(slug)?.title ?? "";
}

/** Stop waiting after this long so the button can never stay on "Sending…". */
const SUBMIT_TIMEOUT_MS = 30_000;

async function postQuote(formData: FormData): Promise<QuoteState> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);
  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      body: formData,
      headers: { accept: "application/json" },
      signal: controller.signal,
    });
    const data: unknown = await response.json().catch(() => null);
    if (!isQuoteState(data)) return { ok: false, message: QUOTE_GENERIC_ERROR };
    return { ok: data.ok, message: data.message };
  } catch {
    return { ok: false, message: QUOTE_GENERIC_ERROR };
  } finally {
    window.clearTimeout(timer);
  }
}

function isQuoteState(value: unknown): value is QuoteState {
  if (!value || typeof value !== "object") return false;
  const record = value as { ok?: unknown; message?: unknown };
  return typeof record.ok === "boolean" && typeof record.message === "string";
}

/** The hero shows the essential fields first; optional details can be expanded. */
export function QuoteForm({
  defaultService = "",
  compact = false,
}: {
  defaultService?: string;
  compact?: boolean;
}) {
  const [state, setState] = useState<QuoteState>(initialState);
  const [pending, setPending] = useState(false);
  // Set synchronously on submit, so a second tap is ignored before React re-renders.
  const inFlight = useRef(false);
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    suburb: "",
    service: defaultService,
    size: "",
    email: "",
    details: "",
  });
  const requestedService = useRequestedServiceTitle();
  // When the form became usable, for the server's minimum time-to-submit check.
  // Added to the request at submit time: a hidden input loses its value on re-render.
  const startedAt = useRef("");
  useEffect(() => {
    startedAt.current = String(Date.now());
  }, []);
  // The confirmation is much shorter than the form it replaces, so it can land
  // above the viewport. Move focus to it and scroll it back into view; "nearest"
  // leaves the page alone when it is already visible below the sticky header.
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const panel = confirmation.current;
    if (!state.ok || !panel) return;
    panel.focus({ preventScroll: true });
    panel.scrollIntoView({ block: "nearest" });
  }, [state.ok]);

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setPending(true);
    const formData = new FormData(event.currentTarget);
    if (startedAt.current) formData.set("startedAt", startedAt.current);
    const result = await postQuote(formData);
    inFlight.current = false;
    setState(result);
    setPending(false);
  }

  const prefix = compact ? "hero-" : "";
  const input =
    "mt-1.5 min-h-12 w-full  border border-line bg-render px-3 py-2.5 text-base text-ink transition placeholder:text-ink/70 focus:border-sky-deep focus:bg-white";
  const label = "block text-sm font-semibold text-bluestone";
  const optional = (
    <span className="font-normal text-ink-soft">(optional)</span>
  );
  function field(key: keyof typeof values) {
    return {
      id: `${prefix}${key}`,
      name: key,
      value: key === "service" ? values.service || requestedService : values[key],
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
      <div
        ref={confirmation}
        tabIndex={-1}
        className="py-10 text-center"
        role="status"
      >
        <span
          aria-hidden="true"
          className="mx-auto grid h-12 w-12 place-items-center  bg-sky-soft text-xl text-sky-ink"
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
          placeholder="What you need, preferred product or finish, timing…"
          className={input}
        />
      </div>
    </>
  );

  return (
    <form
      action="/api/quote"
      method="POST"
      // The action and method are the fallback for visitors without JavaScript.
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
    >
      <div>
        <label htmlFor={`${prefix}name`} className={label}>
          Name <span className="text-bluestone">*</span>
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
          Mobile <span className="text-bluestone">*</span>
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
          Suburb <span className="text-bluestone">*</span>
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
            Approx. area {optional}
          </label>
          <input
            {...field("size")}
            placeholder="e.g. 80 m²"
            className={input}
          />
        </div>
      )}
      {compact ? (
        <details className="group sm:col-span-2 border-y border-line py-3">
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
      <div className="sm:col-span-2">
        {state.message && (
          <p
            className="mb-3  border border-ochre bg-white p-3 text-sm font-semibold text-bluestone"
            role="alert"
          >
            {state.message}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          aria-busy={pending}
          className="flex min-h-12 w-full items-center justify-center gap-3  bg-ochre px-5 py-3 font-display text-xl font-bold tracking-wide text-white uppercase transition-colors hover:bg-ochre-dark disabled:opacity-60"
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
