"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GradientButton } from "@/components/ui/GradientButton";
import { TextInput } from "@/components/ui/TextInput";
import { Textarea } from "@/components/ui/Textarea";
import { useSubmitRsvp } from "@/hooks/useRsvp";
import { DEFAULT_RSVP, type RsvpRecord } from "@/lib/mock/rsvp";
import { RSVP_OPTIONS } from "@/lib/constants/rsvp";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

function Counter({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-ink">{label}</span>
      <div className="flex items-center gap-3">
        <Button variant="secondary" className="h-8 w-8 px-0" onClick={() => onChange(Math.max(0, value - 1))}>
          -
        </Button>
        <span className="w-6 text-center text-sm font-semibold text-ink">{value}</span>
        <Button variant="secondary" className="h-8 w-8 px-0" onClick={() => onChange(value + 1)}>
          +
        </Button>
      </div>
    </div>
  );
}

export function RsvpForm() {
  const t = useTranslations("Rsvp");
  const router = useRouter();
  const submitRsvp = useSubmitRsvp();
  const [form, setForm] = useState<RsvpRecord>(DEFAULT_RSVP);

  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-sm text-ink-muted">{t("subtitle")}</p>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink">{t("attendingQuestion")}</p>
        <div className="flex flex-col gap-2">
          {RSVP_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, attending: option.id }))}
              className={cn(
                "rounded-2xl border px-4 py-3 text-left text-sm",
                form.attending === option.id ? "border-primary bg-surface-muted" : "border-border bg-surface",
              )}
            >
              {t(`options.${option.id}`)}
            </button>
          ))}
        </div>
      </div>

      <Card className="flex flex-col gap-3">
        <Counter label={t("adults")} value={form.adults} onChange={(value) => setForm((prev) => ({ ...prev, adults: value }))} />
        <Counter label={t("children")} value={form.children} onChange={(value) => setForm((prev) => ({ ...prev, children: value }))} />
      </Card>

      <TextInput
        placeholder={t("phone")}
        value={form.phone}
        onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
      />
      <TextInput
        placeholder={t("email")}
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
      />
      <Textarea
        placeholder={t("notes")}
        value={form.notes}
        onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
      />

      <GradientButton
        disabled={!form.attending || submitRsvp.isPending}
        onClick={() => submitRsvp.mutate(form, { onSuccess: () => router.push(ROUTES.home) })}
      >
        {t("submit")}
      </GradientButton>
    </div>
  );
}
