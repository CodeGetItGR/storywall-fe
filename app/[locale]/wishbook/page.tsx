"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { WishForm } from "@/components/wishbook/WishForm";
import { WishList } from "@/components/wishbook/WishList";
import { useWishes } from "@/hooks/useWishes";

export default function WishbookPage() {
  const t = useTranslations("Wishbook");
  const tCommon = useTranslations("Common");
  const { data: submittedWishes = [] } = useWishes();
  const seedWishes = t.raw("items") as Array<{ author: string; text: string }>;

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-4 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <div className="flex flex-col gap-4 px-4 pb-4">
        <p className="text-sm text-ink-muted">{t("subtitle")}</p>
        <WishForm />
        <WishList seedWishes={seedWishes} submittedWishes={submittedWishes} />
      </div>
    </div>
  );
}
