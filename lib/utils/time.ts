import { toIntlLocale } from "@/lib/i18n/intl-locale";

const DIVISIONS: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ["year", 60 * 60 * 24 * 365],
  ["month", 60 * 60 * 24 * 30],
  ["day", 60 * 60 * 24],
  ["hour", 60 * 60],
  ["minute", 60],
];

export function formatRelativeTime(isoDate: string, locale: string): string {
  const diffSeconds = Math.round((new Date(isoDate).getTime() - Date.now()) / 1000);
  const rtf = new Intl.RelativeTimeFormat(toIntlLocale(locale), { numeric: "auto" });

  for (const [unit, secondsInUnit] of DIVISIONS) {
    if (Math.abs(diffSeconds) >= secondsInUnit) {
      return rtf.format(Math.round(diffSeconds / secondsInUnit), unit);
    }
  }

  return rtf.format(diffSeconds, "second");
}

export function minutesAgoIso(minutes: number): string {
  return new Date(Date.now() - minutes * 60_000).toISOString();
}
