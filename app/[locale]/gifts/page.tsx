"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { GiftRegistryCard } from "@/components/gifts/GiftRegistryCard";

export default function GiftsPage() {
  const t = useTranslations("Gifts");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="px-4 pb-4">
        <GiftRegistryCard />
      </div>
    </div>
  );
}
