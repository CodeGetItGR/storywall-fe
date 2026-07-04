"use client";

import { useTranslations } from "next-intl";
import { TopBar } from "@/components/layout/TopBar";
import { NotificationItem } from "@/components/notifications/NotificationItem";
import { useNotifications } from "@/hooks/useNotifications";

export default function NotificationsPage() {
  const t = useTranslations("Notifications");
  const tCommon = useTranslations("Common");
  const { data: notifications = [] } = useNotifications();
  const copy = t.raw("items") as Array<{ text: string; timeAgo: string }>;

  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-2 bg-background">
      <TopBar title={t("title")} backLabel={tCommon("back")} />
      <ul className="px-4 pb-4">
        {notifications.length === 0 && <p className="py-6 text-center text-sm text-ink-muted">{t("empty")}</p>}
        {notifications.map((notification, index) => (
          <NotificationItem key={notification.id} notification={notification} text={copy[index]?.text ?? ""} />
        ))}
      </ul>
    </div>
  );
}
