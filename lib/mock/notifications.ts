import { minutesAgoIso } from "@/lib/utils/time";

export type NotificationRecord = {
  id: string;
  avatarUrl: string;
  createdAtIso: string;
};

export const NOTIFICATIONS: NotificationRecord[] = [
  { id: "notif-1", avatarUrl: "https://i.pravatar.cc/150?img=47", createdAtIso: minutesAgoIso(3) },
  { id: "notif-2", avatarUrl: "https://i.pravatar.cc/150?img=12", createdAtIso: minutesAgoIso(48) },
  { id: "notif-3", avatarUrl: "https://i.pravatar.cc/150?img=25", createdAtIso: minutesAgoIso(120) },
  { id: "notif-4", avatarUrl: "https://i.pravatar.cc/150?img=33", createdAtIso: minutesAgoIso(125) },
];
