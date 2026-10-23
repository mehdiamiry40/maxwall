/** Instant submits are bots. Real people take longer than this after the form is shown. */
export const MIN_SUBMIT_MS = 2000;
/** Allow a few seconds of client/server clock skew before treating a timestamp as forged. */
const CLOCK_SKEW_MS = 5000;

/**
 * Honeypot and minimum time-to-submit. A true result should be answered like a
 * success and dropped, so the caller does not teach bots which check failed.
 * A missing timestamp is allowed so the form still submits with JavaScript off.
 */
export function silentBotDrop(formData: FormData, now = Date.now()): boolean {
  if (String(formData.get("company") ?? "").trim()) return true;

  const startedRaw = String(formData.get("startedAt") ?? "").trim();
  if (!startedRaw) return false;

  const started = Number(startedRaw);
  if (!Number.isFinite(started)) return true;

  const elapsed = now - started;
  if (elapsed < -CLOCK_SKEW_MS) return true;
  return elapsed >= 0 && elapsed < MIN_SUBMIT_MS;
}
