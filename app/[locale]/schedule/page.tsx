"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { ScheduleTimeline } from "@/components/schedule/ScheduleTimeline";

export default function SchedulePage() {
  const t = useTranslations("Schedule");
  const tCommon = useTranslations("Common");
  const items = t.raw("items") as Array<{ time: string; title: string; subtitle: string }>;

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="flex flex-col gap-4 px-4 pb-4">
        <p className="text-sm text-ink-muted">{t("intro")}</p>
        <ScheduleTimeline items={items} />
      </div>
    </div>
  );
}
