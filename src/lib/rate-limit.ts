/** About five quote submissions per IP in a sliding 10 minute window. */
export const RATE_LIMIT_MAX = 5;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const buckets = new Map<string, number[]>();
const PRUNE_AT = 1000;

export type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

/**
 * In-memory sliding window. Each serverless instance has its own buckets, so
 * the limit is per instance rather than global across the deployment.
 */
export function rateLimit(
  ip: string,
  now = Date.now(),
  store: Map<string, number[]> = buckets,
): RateLimitResult {
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const recent = (store.get(ip) ?? []).filter((stamp) => stamp > cutoff);

  if (recent.length >= RATE_LIMIT_MAX) {
    store.set(ip, recent);
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((recent[0] + RATE_LIMIT_WINDOW_MS - now) / 1000),
    );
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  store.set(ip, recent);

  if (store.size > PRUNE_AT) {
    for (const [key, stamps] of store) {
      if (stamps.every((stamp) => stamp <= cutoff)) store.delete(key);
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

/** Prefer the first x-forwarded-for hop, then x-real-ip. */
export function clientIpFromHeaders(headers: Headers): string {
  const forwarded = firstAddress(headers.get("x-forwarded-for"));
  if (forwarded) return forwarded;
  const real = firstAddress(headers.get("x-real-ip"));
  if (real) return real;
  return "unknown";
}

function firstAddress(value: string | null): string | null {
  if (!value) return null;
  const first = value.split(",")[0]?.trim();
  if (!first) return null;
  return first.slice(0, 200);
}
