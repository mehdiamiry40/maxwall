"use server";

import { site } from "@/lib/site";

export type QuoteState = {
  ok: boolean;
  message: string;
};

const field = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim().slice(0, 2000);

export async function requestQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  // Honeypot: real people never fill this hidden field
  if (field(formData, "company")) return { ok: true, message: "Thanks!" };

  const lead = {
    name: field(formData, "name"),
    mobile: field(formData, "mobile"),
    suburb: field(formData, "suburb"),
    service: field(formData, "service"),
    size: field(formData, "size"),
    details: field(formData, "details"),
  };

  if (!lead.name || !lead.mobile || !lead.suburb) {
    return { ok: false, message: "Please add your name, mobile and suburb." };
  }
  if (lead.mobile.replace(/\D/g, "").length < 8) {
    return { ok: false, message: "Please check your mobile number." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn("Quote request (email not configured):", lead);
    if (process.env.NODE_ENV === "production") {
      return {
        ok: false,
        message: `Sorry, the form isn't working right now. Please call us on ${site.phone}.`,
      };
    }
    return { ok: true, message: "We'll call or text you within the hour." };
  }

  const text = [
    `Name: ${lead.name}`,
    `Mobile: ${lead.mobile}`,
    `Suburb: ${lead.suburb}`,
    `Service: ${lead.service || "-"}`,
    `Approx. size: ${lead.size || "-"}`,
    "",
    lead.details || "(no details)",
  ].join("\n");

  // Send from whichever domain is verified in Resend (set by the Vercel Resend integration)
  const from =
    process.env.QUOTE_FROM_EMAIL ??
    `Max Wall Website <quotes@${process.env.RESEND_EMAIL_DOMAIN ?? "maxwall.com.au"}>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      subject: `New quote request: ${lead.service || "Render/cladding"} in ${lead.suburb}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Quote email failed:", res.status, await res.text());
    return {
      ok: false,
      message: `Sorry, something went wrong. Please call us on ${site.phone}.`,
    };
  }

  return { ok: true, message: "We'll call or text you within the hour." };
}
