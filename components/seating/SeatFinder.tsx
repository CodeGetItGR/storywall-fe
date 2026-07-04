"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { TextInput } from "@/components/ui/TextInput";
import { GradientButton } from "@/components/ui/GradientButton";
import { Card } from "@/components/ui/Card";
import { useFindSeat } from "@/hooks/useSeat";

export function SeatFinder() {
  const t = useTranslations("Seating");
  const findSeat = useFindSeat();
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <TextInput value={name} onChange={(event) => setName(event.target.value)} placeholder={t("namePlaceholder")} />
      <GradientButton disabled={!name.trim() || findSeat.isPending} onClick={() => findSeat.mutate(name.trim())}>
        {t("submit")}
      </GradientButton>

      {findSeat.data && (
        <div className="grid grid-cols-2 gap-4">
          <Card className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase text-ink-muted">{t("table")}</span>
            <span className="text-4xl font-bold text-ink">{findSeat.data.table}</span>
          </Card>
          <Card className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase text-ink-muted">{t("seat")}</span>
            <span className="text-4xl font-bold text-ink">{findSeat.data.seat}</span>
          </Card>
        </div>
      )}
    </div>
  );
}
