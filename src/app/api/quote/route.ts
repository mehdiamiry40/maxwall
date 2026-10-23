import { submitQuote } from "@/lib/quote";
import {
  QUOTE_GENERIC_ERROR,
  QUOTE_RATE_LIMITED,
} from "@/lib/quote-messages";
import { clientIpFromHeaders, rateLimit } from "@/lib/rate-limit";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const limit = rateLimit(clientIpFromHeaders(request.headers));
  if (!limit.allowed) {
    return respond(request, {
      ok: false,
      message: QUOTE_RATE_LIMITED,
      status: 429,
      retryAfterSeconds: limit.retryAfterSeconds,
    });
  }

  if (!sameOrigin(request)) {
    return respond(request, {
      ok: false,
      message: QUOTE_GENERIC_ERROR,
      status: 403,
    });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return respond(request, {
      ok: false,
      message: QUOTE_GENERIC_ERROR,
      status: 400,
    });
  }

  try {
    const result = await submitQuote(formData);
    return respond(request, result);
  } catch (error) {
    console.error(
      "Quote request failed:",
      error instanceof Error ? error.message : "unknown error",
    );
    return respond(request, {
      ok: false,
      message: QUOTE_GENERIC_ERROR,
      status: 500,
    });
  }
}

function respond(
  request: Request,
  result: {
    ok: boolean;
    message: string;
    status: number;
    retryAfterSeconds?: number;
  },
) {
  const headers = new Headers({ "Cache-Control": "no-store" });
  if (result.retryAfterSeconds) {
    headers.set("Retry-After", String(result.retryAfterSeconds));
  }

  const accept = request.headers.get("accept") ?? "";
  if (accept.includes("application/json")) {
    return NextResponse.json(
      { ok: result.ok, message: result.message },
      { status: result.status, headers },
    );
  }

  headers.set("Content-Type", "text/html; charset=utf-8");
  return new NextResponse(htmlPage(result.message, backHref(request)), {
    status: result.status,
    headers,
  });
}

function sameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!host) return false;
  try {
    return new URL(origin).host === host.split(",")[0]?.trim();
  } catch {
    return false;
  }
}

function backHref(request: Request): string {
  const referer = request.headers.get("referer");
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!referer || !host) return "/contact";
  try {
    const url = new URL(referer);
    if (url.host !== host.split(",")[0]?.trim()) return "/contact";
    return `${url.pathname}${url.search}` || "/contact";
  } catch {
    return "/contact";
  }
}

function htmlPage(message: string, back: string) {
  const safeMessage = escapeHtml(message);
  const safeBack = escapeHtml(back);
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Quote request | Max Wall</title>
</head>
<body>
<main>
<p>${safeMessage}</p>
<p><a href="${safeBack}">Back</a></p>
</main>
</body>
</html>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
