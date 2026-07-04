"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { RsvpForm } from "@/components/rsvp/RsvpForm";

export default function RsvpPage() {
  const t = useTranslations("Rsvp");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <RsvpForm />
    </div>
  );
}
