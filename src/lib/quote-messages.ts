import { site } from "@/lib/site";

export type QuoteState = {
  ok: boolean;
  message: string;
};

export const QUOTE_SUCCESS = "We'll call or text you within the hour.";
export const QUOTE_BOT_OK = "Thanks!";
export const QUOTE_RATE_LIMITED =
  "Please wait a few minutes and try again, or call us on " + site.phone + ".";
export const QUOTE_GENERIC_ERROR = `Sorry, something went wrong. Please call us on ${site.phone}.`;
export const QUOTE_UNAVAILABLE = `Sorry, the form isn't working right now. Please call us on ${site.phone}.`;
export const QUOTE_VALIDATION_REQUIRED =
  "Please add your name, mobile and suburb.";
export const QUOTE_VALIDATION_MOBILE = "Please check your mobile number.";
