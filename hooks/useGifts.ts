import { useQuery } from "@tanstack/react-query";
import { GIFT_REGISTRY } from "@/lib/mock/gifts";

export const giftsKeys = {
  all: ["gifts"] as const,
};

export function useGifts() {
  return useQuery({
    queryKey: giftsKeys.all,
    queryFn: () => Promise.resolve(GIFT_REGISTRY),
  });
}
