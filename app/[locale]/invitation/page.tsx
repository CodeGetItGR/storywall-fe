"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GradientButton } from "@/components/ui/GradientButton";
import { useWeddingInfo } from "@/providers/WeddingProvider";
import { ROUTES } from "@/lib/constants/routes";

export default function InvitationPage() {
  const t = useTranslations("Invitation");
  const wedding = useWeddingInfo();

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col items-center justify-between bg-background px-6 py-12 text-center">
      <div className="relative h-64 w-full overflow-hidden rounded-[--radius-card]">
        <Image src={wedding.heroImageUrl} alt={wedding.coupleNames} fill sizes="480px" className="object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-ink">{wedding.coupleNames}</h1>
        <p className="text-lg font-medium text-primary">{t("heading")}</p>
        <p className="text-sm text-ink-muted">{t("subheading")}</p>
      </div>

      <Link href={ROUTES.home} className="w-full">
        <GradientButton className="w-full">{t("cta")}</GradientButton>
      </Link>
    </div>
  );
}
