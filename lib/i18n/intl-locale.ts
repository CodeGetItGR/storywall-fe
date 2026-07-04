const INTL_LOCALE_MAP: Record<string, string> = {
  en: "en",
  gr: "el",
};

export function toIntlLocale(appLocale: string): string {
  return INTL_LOCALE_MAP[appLocale] ?? appLocale;
}
