"use client";

import { useTranslations } from "next-intl";
import { useCountdown } from "@/hooks/useCountdown";

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-bold text-ink">{value}</span>
      <span className="text-[10px] uppercase tracking-wide text-ink-muted">{label}</span>
    </div>
  );
}

export function CountdownStats({ targetIso }: { targetIso: string }) {
  const t = useTranslations("Common");
  const countdown = useCountdown(targetIso);

  return (
    <div className="flex items-center gap-4">
      <Stat value={countdown.days} label={t("days")} />
      <Stat value={countdown.hours} label={t("hours")} />
      <Stat value={countdown.minutes} label={t("minutes")} />
      <Stat value={countdown.seconds} label={t("seconds")} />
    </div>
  );
}
