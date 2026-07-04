"use client";

import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import { PhotoGrid } from "@/components/feed/PhotoGrid";
import type { Post } from "@/lib/mock/posts";
import { formatRelativeTime } from "@/lib/utils/time";
import { ROUTES } from "@/lib/constants/routes";

export function PostCard({ post, caption }: { post: Post; caption: string }) {
  const t = useTranslations("PostCard");
  const locale = useLocale();

  return (
    <article className="flex flex-col gap-3 border-b border-border px-4 py-4">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar src={post.avatarUrl} alt={post.authorName} size="sm" />
          <div>
            <p className="text-sm font-semibold text-ink">{post.authorName}</p>
            <p className="text-xs text-ink-muted">{formatRelativeTime(post.createdAtIso, locale)}</p>
          </div>
        </div>
        <IconButton aria-label={t("moreOptions")} className="bg-transparent shadow-none">
          <MoreHorizontal className="h-5 w-5" />
        </IconButton>
      </header>

      <Link href={ROUTES.story(post.id)} aria-label={t("viewGallery")}>
        <PhotoGrid images={post.images} alt={caption} />
      </Link>

      {caption && <p className="text-sm leading-relaxed text-ink">{caption}</p>}

      <footer className="flex items-center gap-4 text-sm text-ink-muted">
        <span className="flex items-center gap-1">
          <Heart className="h-4 w-4 fill-danger text-danger" />
          {t("likes", { count: post.likes })}
        </span>
        <Link href={ROUTES.comments(post.id)} className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          {t("comments", { count: post.commentsCount })}
        </Link>
      </footer>
    </article>
  );
}
