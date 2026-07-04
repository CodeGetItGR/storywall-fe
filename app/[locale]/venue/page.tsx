"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { VenueCard } from "@/components/venue/VenueCard";

export default function VenuePage() {
  const t = useTranslations("Venue");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="flex flex-col gap-4 px-4 pb-4">
        <VenueCard icon="church" name={t("churchName")} address={t("churchAddress")} mapCta={t("mapCta")} />
        <VenueCard icon="wine" name={t("receptionName")} address={t("receptionAddress")} mapCta={t("mapCta")} />
      </div>
    </div>
  );
}
