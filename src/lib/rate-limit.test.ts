import assert from "node:assert/strict";
import test from "node:test";
import { silentBotDrop, MIN_SUBMIT_MS } from "./quote-guard.ts";
import {
  RATE_LIMIT_MAX,
  RATE_LIMIT_WINDOW_MS,
  clientIpFromHeaders,
  rateLimit,
} from "./rate-limit.ts";

test("allows five submissions in the window and blocks the sixth", () => {
  const store = new Map<string, number[]>();
  const start = 1_700_000_000_000;
  for (let i = 0; i < RATE_LIMIT_MAX; i += 1) {
    const result = rateLimit("203.0.113.5", start + i * 1000, store);
    assert.equal(result.allowed, true);
  }
  const blocked = rateLimit("203.0.113.5", start + 6000, store);
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterSeconds > 0);
});

test("sliding window opens a slot after the oldest submission expires", () => {
  const store = new Map<string, number[]>();
  const start = 1_700_000_000_000;
  for (let i = 0; i < RATE_LIMIT_MAX; i += 1) {
    assert.equal(rateLimit("203.0.113.6", start + i * 60_000, store).allowed, true);
  }
  assert.equal(
    rateLimit("203.0.113.6", start + 4 * 60_000, store).allowed,
    false,
  );
  const after = rateLimit(
    "203.0.113.6",
    start + RATE_LIMIT_WINDOW_MS + 1,
    store,
  );
  assert.equal(after.allowed, true);
});

test("limits are tracked separately per IP", () => {
  const store = new Map<string, number[]>();
  const now = 1_700_000_000_000;
  for (let i = 0; i < RATE_LIMIT_MAX; i += 1) {
    rateLimit("203.0.113.7", now, store);
  }
  assert.equal(rateLimit("203.0.113.7", now, store).allowed, false);
  assert.equal(rateLimit("203.0.113.8", now, store).allowed, true);
});

test("reads the client IP from x-forwarded-for, then x-real-ip", () => {
  const forwarded = new Headers({
    "x-forwarded-for": " 198.51.100.4 , 10.0.0.1",
    "x-real-ip": "203.0.113.9",
  });
  assert.equal(clientIpFromHeaders(forwarded), "198.51.100.4");
  assert.equal(
    clientIpFromHeaders(new Headers({ "x-real-ip": "203.0.113.9" })),
    "203.0.113.9",
  );
  assert.equal(clientIpFromHeaders(new Headers()), "unknown");
});

test("honeypot and too-fast submits are silent drops", () => {
  const now = 1_700_000_000_000;
  const honeypot = new FormData();
  honeypot.set("company", "Acme Bots");
  assert.equal(silentBotDrop(honeypot, now), true);

  const instant = new FormData();
  instant.set("startedAt", String(now - 500));
  assert.equal(silentBotDrop(instant, now), true);

  const ready = new FormData();
  ready.set("startedAt", String(now - MIN_SUBMIT_MS));
  assert.equal(silentBotDrop(ready, now), false);

  const noScript = new FormData();
  assert.equal(silentBotDrop(noScript, now), false);

  const forgedFuture = new FormData();
  forgedFuture.set("startedAt", String(now + 60_000));
  assert.equal(silentBotDrop(forgedFuture, now), true);
});
