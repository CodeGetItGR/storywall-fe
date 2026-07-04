"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/Card";
import { IconButton } from "@/components/ui/IconButton";
import { useGifts } from "@/hooks/useGifts";

export function GiftRegistryCard() {
  const t = useTranslations("Gifts");
  const tCommon = useTranslations("Common");
  const { data: gifts } = useGifts();
  const [copied, setCopied] = useState(false);

  if (!gifts) return null;

  async function handleCopy() {
    await navigator.clipboard.writeText(gifts!.bankIban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-ink">{t("heading")}</h2>
      <p className="text-sm leading-relaxed text-ink-muted">{t("body")}</p>

      <Card className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-ink-muted">{t("bankName")}</p>
          <p className="text-sm font-semibold text-ink">
            {t("ibanLabel")}: {gifts.bankIban}
          </p>
        </div>
        <IconButton aria-label={copied ? tCommon("copied") : tCommon("copy")} onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
        </IconButton>
      </Card>
    </div>
  );
}
