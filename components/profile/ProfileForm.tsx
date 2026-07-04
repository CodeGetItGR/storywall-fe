"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Avatar } from "@/components/ui/Avatar";
import { TextInput } from "@/components/ui/TextInput";
import { GradientButton } from "@/components/ui/GradientButton";
import { useProfile, useUpdateProfile } from "@/hooks/useProfile";
import type { ProfileRecord } from "@/lib/mock/profile";

export function ProfileForm() {
  const { data: profile } = useProfile();

  if (!profile) return null;

  return <ProfileFields key={profile.email} initialProfile={profile} />;
}

function ProfileFields({ initialProfile }: { initialProfile: ProfileRecord }) {
  const t = useTranslations("Profile");
  const updateProfile = useUpdateProfile();
  const [form, setForm] = useState(initialProfile);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-center">
        <Avatar src={form.avatarUrl} alt={form.fullName} size="lg" />
      </div>

      <TextInput
        placeholder={t("fullName")}
        value={form.fullName}
        onChange={(event) => setForm({ ...form, fullName: event.target.value })}
      />
      <TextInput
        placeholder={t("nickname")}
        value={form.nickname}
        onChange={(event) => setForm({ ...form, nickname: event.target.value })}
      />
      <TextInput
        placeholder={t("email")}
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <TextInput
        placeholder={t("role")}
        value={form.role}
        onChange={(event) => setForm({ ...form, role: event.target.value })}
      />

      <GradientButton onClick={() => updateProfile.mutate(form)} disabled={updateProfile.isPending}>
        {t("save")}
      </GradientButton>
    </div>
  );
}
