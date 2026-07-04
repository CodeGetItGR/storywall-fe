"use client";

import { useLocale, useTranslations } from "next-intl";
import { Avatar } from "@/components/ui/Avatar";
import { formatRelativeTime } from "@/lib/utils/time";
import type { CommentRecord } from "@/lib/mock/comments";

type CommentCopy = { author: string; timeAgo: string; text: string };

export function CommentsList({ comments, copy }: { comments: CommentRecord[]; copy: CommentCopy[] }) {
  const t = useTranslations("Comments");
  const locale = useLocale();

  return (
    <ul className="flex flex-1 flex-col gap-4 overflow-y-auto py-2">
      {comments.map((comment, index) => {
        const isSeedComment = index < copy.length;
        const author = isSeedComment ? copy[index].author : t("you");
        const text = isSeedComment ? copy[index].text : (comment.text ?? "");
        const timeLabel = isSeedComment ? copy[index].timeAgo : formatRelativeTime(comment.createdAtIso, locale);

        return (
          <li key={comment.id} className="flex gap-3">
            <Avatar src={comment.avatarUrl} alt={author} size="sm" />
            <div>
              <p className="text-sm">
                <span className="font-semibold text-ink">{author}</span>{" "}
                <span className="text-ink-muted">{timeLabel}</span>
              </p>
              <p className="text-sm text-ink">{text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
