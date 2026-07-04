"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { FutureMessageForm } from "@/components/future-messages/FutureMessageForm";

export default function FutureMessagesPage() {
  const t = useTranslations("FutureMessages");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="flex flex-col gap-4 px-4 pb-4">
        <p className="text-sm text-ink-muted">{t("subtitle")}</p>
        <FutureMessageForm />
      </div>
    </div>
  );
}
