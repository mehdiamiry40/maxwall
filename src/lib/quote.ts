import { silentBotDrop } from "@/lib/quote-guard";
import {
  QUOTE_BOT_OK,
  QUOTE_GENERIC_ERROR,
  QUOTE_SUCCESS,
  QUOTE_UNAVAILABLE,
  QUOTE_VALIDATION_MOBILE,
  QUOTE_VALIDATION_REQUIRED,
  type QuoteState,
} from "@/lib/quote-messages";

export type QuoteResult = QuoteState & {
  status: number;
};

const field = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "").trim().slice(0, 2000);

export async function submitQuote(formData: FormData): Promise<QuoteResult> {
  if (silentBotDrop(formData)) {
    return { ok: true, message: QUOTE_BOT_OK, status: 200 };
  }

  const lead = {
    name: field(formData, "name"),
    mobile: field(formData, "mobile"),
    email: field(formData, "email"),
    suburb: field(formData, "suburb"),
    service: field(formData, "service"),
    size: field(formData, "size"),
    details: field(formData, "details"),
  };

  if (!lead.name || !lead.mobile || !lead.suburb) {
    return { ok: false, message: QUOTE_VALIDATION_REQUIRED, status: 400 };
  }
  if (lead.mobile.replace(/\D/g, "").length < 8) {
    return { ok: false, message: QUOTE_VALIDATION_MOBILE, status: 400 };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn("Quote request (email not configured):", lead);
    if (process.env.NODE_ENV === "production") {
      return { ok: false, message: QUOTE_UNAVAILABLE, status: 503 };
    }
    return { ok: true, message: QUOTE_SUCCESS, status: 200 };
  }

  const text = [
    `Name: ${lead.name}`,
    `Mobile: ${lead.mobile}`,
    `Email: ${lead.email || "-"}`,
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

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        // Lets you hit "reply" to answer the customer directly
        ...(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)
          ? { reply_to: lead.email }
          : {}),
        subject: `New quote request: ${lead.service || "General enquiry"} in ${lead.suburb}`,
        text,
      }),
    });

    if (!res.ok) {
      console.error("Quote email failed:", res.status, await res.text());
      return { ok: false, message: QUOTE_GENERIC_ERROR, status: 502 };
    }
  } catch (error) {
    console.error(
      "Quote email failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return { ok: false, message: QUOTE_GENERIC_ERROR, status: 502 };
  }

  return { ok: true, message: QUOTE_SUCCESS, status: 200 };
}
