"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { formatRelativeTime } from "@/lib/utils/time";
import type { Post } from "@/lib/mock/posts";
import { ROUTES } from "@/lib/constants/routes";

export function StoryViewer({ post, caption }: { post: Post; caption?: string }) {
  const t = useTranslations("StoryViewer");
  const tPostCard = useTranslations("PostCard");
  const locale = useLocale();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultiple = post.images.length > 1;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Avatar src={post.avatarUrl} alt={post.authorName} size="sm" />
          <div>
            <p className="text-sm font-semibold text-white">{post.authorName}</p>
            <p className="text-xs text-white/70">{formatRelativeTime(post.createdAtIso, locale)}</p>
          </div>
        </div>
        <IconButton aria-label={t("close")} onClick={() => router.push(ROUTES.home)}>
          <X className="h-5 w-5" />
        </IconButton>
      </header>

      <div className="relative flex-1">
        <Image
          src={post.images[activeIndex]}
          alt={post.authorName}
          fill
          sizes="480px"
          className="object-cover"
        />

        {hasMultiple && activeIndex > 0 && (
          <button
            type="button"
            aria-label={t("previous")}
            onClick={() => setActiveIndex((index) => index - 1)}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        {hasMultiple && activeIndex < post.images.length - 1 && (
          <button
            type="button"
            aria-label={t("next")}
            onClick={() => setActiveIndex((index) => index + 1)}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}

        {hasMultiple && (
          <span className="absolute bottom-3 right-3 rounded-[--radius-pill] bg-black/40 px-2 py-1 text-xs text-white">
            {activeIndex + 1}/{post.images.length}
          </span>
        )}
      </div>

      <footer className="flex flex-col gap-2 p-4">
        {caption && <p className="text-sm text-white">{caption}</p>}
        <div className="flex items-center gap-4 text-sm text-white">
          <span className="flex items-center gap-1">
            <Heart className="h-4 w-4 fill-danger text-danger" />
            {tPostCard("likes", { count: post.likes })}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            {tPostCard("comments", { count: post.commentsCount })}
          </span>
        </div>
      </footer>
    </div>
  );
}
