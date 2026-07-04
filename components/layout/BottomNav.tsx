"use client";

import { Bell, Camera, Home, Sparkles, User } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { NAV_ITEMS, type NavItem } from "@/lib/constants/nav";
import { CountBadge } from "@/components/ui/CountBadge";
import { cn } from "@/lib/utils/cn";

const ICONS: Record<NavItem["icon"], typeof Home> = {
  home: Home,
  camera: Camera,
  sparkles: Sparkles,
  user: User,
  bell: Bell,
};

export function BottomNav({ notificationsCount = 0 }: { notificationsCount?: number }) {
  const t = useTranslations("Nav");
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-30 flex items-center justify-around border-t border-border bg-surface/95 py-2 backdrop-blur">
      {NAV_ITEMS.map((item) => {
        const Icon = ICONS[item.icon];
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-label={t(item.labelKey)}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-full",
              isActive ? "text-primary" : "text-ink-muted",
            )}
          >
            <Icon className="h-6 w-6" />
            {item.id === "notifications" && <CountBadge count={notificationsCount} />}
          </Link>
        );
      })}
    </nav>
  );
}
