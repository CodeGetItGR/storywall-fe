import { useLocale } from "next-intl";
import { Avatar } from "@/components/ui/Avatar";
import { formatRelativeTime } from "@/lib/utils/time";
import type { NotificationRecord } from "@/lib/mock/notifications";

export function NotificationItem({ notification, text }: { notification: NotificationRecord; text: string }) {
  const locale = useLocale();

  return (
    <li className="flex items-start gap-3 border-b border-border py-3">
      <Avatar src={notification.avatarUrl} alt="" size="sm" />
      <div>
        <p className="text-sm text-ink">{text}</p>
        <p className="text-xs text-ink-muted">{formatRelativeTime(notification.createdAtIso, locale)}</p>
      </div>
    </li>
  );
}
