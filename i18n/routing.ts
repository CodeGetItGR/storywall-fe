import { defineRouting } from "next-intl/routing";

export const LOCALES = ["en", "gr"] as const;
export const DEFAULT_LOCALE = "en" satisfies (typeof LOCALES)[number];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
});
