"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Textarea } from "@/components/ui/Textarea";
import { GradientButton } from "@/components/ui/GradientButton";
import { useCreatePost } from "@/hooks/useFeed";
import { useProfile } from "@/hooks/useProfile";
import { ROUTES } from "@/lib/constants/routes";

const DEFAULT_POST_IMAGE = "https://picsum.photos/id/1062/600/450";

export function NewPostForm() {
  const t = useTranslations("NewPost");
  const router = useRouter();
  const { data: profile } = useProfile();
  const createPost = useCreatePost();
  const [text, setText] = useState("");

  function handleSubmit() {
    if (!profile) return;

    createPost.mutate(
      { authorName: profile.fullName, avatarUrl: profile.avatarUrl, images: [DEFAULT_POST_IMAGE] },
      { onSuccess: () => router.push(ROUTES.home) },
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-base font-semibold text-ink">{t("title")}</h1>

      {profile && (
        <div className="flex items-center gap-2">
          <Avatar src={profile.avatarUrl} alt={profile.fullName} size="sm" />
          <span className="text-sm font-semibold text-ink">{profile.fullName}</span>
        </div>
      )}

      <Textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder={t("placeholder")}
      />

      <GradientButton onClick={handleSubmit} disabled={createPost.isPending}>
        {t("submit")}
      </GradientButton>
    </div>
  );
}
