"use client";

import { useState } from "react";
import { Camera, Music, Plus, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { POST_MENU_ITEMS, type PostMenuItemId } from "@/lib/constants/post-menu";
import { cn } from "@/lib/utils/cn";

const ICONS: Record<PostMenuItemId, typeof Camera> = {
  post: Camera,
  story: Zap,
  music: Music,
};

export function PostMenuFab() {
  const t = useTranslations("PostMenu");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-30 flex flex-col items-end gap-2">
      {isExpanded &&
        POST_MENU_ITEMS.map((item) => {
          const Icon = ICONS[item.id];
          const href = item.id === "post" ? ROUTES.newPost : ROUTES.home;

          return (
            <Link
              key={item.id}
              href={href}
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-3 rounded-[--radius-pill] border border-border bg-surface py-2 pl-4 pr-2 shadow-sm"
            >
              <span className="text-right">
                <span className="block text-sm font-semibold text-ink">{t(item.titleKey)}</span>
                <span className="block text-xs text-ink-muted">{t(item.subtitleKey)}</span>
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-ink">
                <Icon className="h-4 w-4" />
              </span>
            </Link>
          );
        })}

      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((value) => !value)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent-pink to-accent-orange text-white shadow-lg transition-transform",
          isExpanded && "rotate-45",
        )}
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}
