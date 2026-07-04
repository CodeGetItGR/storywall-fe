"use client";

import { useTranslations, useFormatter } from "next-intl";
import { useSubmitRsvp } from "@/hooks/useRsvp";
import { RSVP_DEADLINE_ISO } from "@/lib/mock/wedding";
import { DEFAULT_RSVP } from "@/lib/mock/rsvp";
import { Button } from "@/components/ui/Button";
import { GradientButton } from "@/components/ui/GradientButton";

export function RsvpBanner() {
  const t = useTranslations("Home");
  const format = useFormatter();
  const submitRsvp = useSubmitRsvp();

  return (
    <div className="mx-4 mb-3 flex items-center justify-between rounded-[--radius-card] bg-surface-muted px-4 py-3">
      <div>
        <p className="text-sm font-semibold text-ink">{t("rsvpQuestion")}</p>
        <p className="text-xs text-ink-muted">
          {t("rsvpDeadline", { date: format.dateTime(new Date(RSVP_DEADLINE_ISO), { dateStyle: "long" }) })}
        </p>
      </div>
      <div className="flex gap-2">
        <GradientButton
          className="h-9 px-4 text-xs"
          onClick={() => submitRsvp.mutate({ ...DEFAULT_RSVP, attending: "full" })}
        >
          {t("yes")}
        </GradientButton>
        <Button
          variant="secondary"
          className="h-9 px-4 text-xs"
          onClick={() => submitRsvp.mutate({ ...DEFAULT_RSVP, attending: "cannotAttend" })}
        >
          {t("no")}
        </Button>
      </div>
    </div>
  );
}
