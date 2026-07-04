import { useQuery } from "@tanstack/react-query";
import { NOTIFICATIONS } from "@/lib/mock/notifications";

export const notificationsKeys = {
  all: ["notifications"] as const,
};

export function useNotifications() {
  return useQuery({
    queryKey: notificationsKeys.all,
    queryFn: () => Promise.resolve(NOTIFICATIONS),
  });
}
