"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/Textarea";
import { GradientButton } from "@/components/ui/GradientButton";
import { useSubmitFutureMessage } from "@/hooks/useFutureMessages";
import { FUTURE_MESSAGE_DELAYS, type FutureMessageDelayId } from "@/lib/constants/future-messages";
import { cn } from "@/lib/utils/cn";

export function FutureMessageForm() {
  const t = useTranslations("FutureMessages");
  const submitMessage = useSubmitFutureMessage();
  const [delayId, setDelayId] = useState<FutureMessageDelayId>(FUTURE_MESSAGE_DELAYS[0].id);
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!text.trim()) return;
    submitMessage.mutate({ delayId, text: text.trim() });
    setText("");
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm font-semibold text-ink">{t("openInLabel")}</p>
        <div className="flex flex-wrap gap-2">
          {FUTURE_MESSAGE_DELAYS.map((delay) => (
            <button
              key={delay.id}
              type="button"
              onClick={() => setDelayId(delay.id)}
              className={cn(
                "rounded-[--radius-pill] border px-4 py-2 text-sm",
                delayId === delay.id ? "border-primary bg-surface-muted text-ink" : "border-border text-ink-muted",
              )}
            >
              {t(`delayOptions.${delay.id}`)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-ink">{t("messageLabel")}</p>
        <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={t("placeholder")} />
      </div>

      <GradientButton onClick={handleSubmit} disabled={submitMessage.isPending}>
        {t("submit")}
      </GradientButton>
    </div>
  );
}
