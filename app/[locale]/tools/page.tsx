"use client";

import { BookHeart, Mail, Sofa } from "lucide-react";
import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { ToolCard } from "@/components/tools/ToolCard";
import { ROUTES } from "@/lib/constants/routes";

export default function ToolsHubPage() {
  const t = useTranslations("ToolsHub");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="flex flex-col gap-3 px-4 pb-4">
        <ToolCard href={ROUTES.seating} icon={Sofa} title={t("findSeatTitle")} description={t("findSeatDescription")} />
        <ToolCard href={ROUTES.wishbook} icon={BookHeart} title={t("wishbookTitle")} description={t("wishbookDescription")} />
        <ToolCard
          href={ROUTES.futureMessages}
          icon={Mail}
          title={t("futureMessagesTitle")}
          description={t("futureMessagesDescription")}
        />
      </div>
    </div>
  );
}
