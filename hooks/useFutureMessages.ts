import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FutureMessageDelayId } from "@/lib/constants/future-messages";

export type FutureMessageRecord = {
  id: string;
  delayId: FutureMessageDelayId;
  text: string;
};

let futureMessagesStore: FutureMessageRecord[] = [];

export const futureMessagesKeys = {
  all: ["future-messages"] as const,
};

export function useFutureMessages() {
  return useQuery({
    queryKey: futureMessagesKeys.all,
    queryFn: () => Promise.resolve(futureMessagesStore),
  });
}

export type SubmitFutureMessageInput = {
  delayId: FutureMessageDelayId;
  text: string;
};

export function useSubmitFutureMessage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: SubmitFutureMessageInput) => {
      const message: FutureMessageRecord = {
        id: `future-message-${futureMessagesStore.length + 1}`,
        ...input,
      };
      futureMessagesStore = [...futureMessagesStore, message];
      return Promise.resolve(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: futureMessagesKeys.all });
    },
  });
}
