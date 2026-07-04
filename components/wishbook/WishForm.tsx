"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Textarea } from "@/components/ui/Textarea";
import { GradientButton } from "@/components/ui/GradientButton";
import { useSubmitWish } from "@/hooks/useWishes";

export function WishForm() {
  const t = useTranslations("Wishbook");
  const submitWish = useSubmitWish();
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!text.trim()) return;
    submitWish.mutate(text.trim());
    setText("");
  }

  return (
    <div className="flex flex-col gap-3">
      <Textarea value={text} onChange={(event) => setText(event.target.value)} placeholder={t("placeholder")} />
      <GradientButton onClick={handleSubmit} disabled={submitWish.isPending}>
        {t("submit")}
      </GradientButton>
    </div>
  );
}
