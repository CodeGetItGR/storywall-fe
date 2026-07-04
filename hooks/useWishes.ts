import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type WishRecord = {
  id: string;
  author: string;
  text: string;
};

let wishesStore: WishRecord[] = [];

export const wishesKeys = {
  all: ["wishes"] as const,
};

export function useWishes() {
  return useQuery({
    queryKey: wishesKeys.all,
    queryFn: () => Promise.resolve(wishesStore),
  });
}

export function useSubmitWish() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => {
      const wish: WishRecord = { id: `wish-${wishesStore.length + 1}`, author: "You", text };
      wishesStore = [...wishesStore, wish];
      return Promise.resolve(wish);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wishesKeys.all });
    },
  });
}
