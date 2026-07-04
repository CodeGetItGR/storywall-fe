"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { ProfileForm } from "@/components/profile/ProfileForm";

export default function ProfilePage() {
  const t = useTranslations("Profile");
  const tCommon = useTranslations("Common");

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <ProfileForm />
    </div>
  );
}
