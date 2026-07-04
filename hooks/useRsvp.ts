import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DEFAULT_RSVP, type RsvpRecord } from "@/lib/mock/rsvp";

let rsvpStore: RsvpRecord = { ...DEFAULT_RSVP };

export const rsvpKeys = {
  all: ["rsvp"] as const,
};

export function useRsvp() {
  return useQuery({
    queryKey: rsvpKeys.all,
    queryFn: () => Promise.resolve(rsvpStore),
  });
}

export function useSubmitRsvp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: RsvpRecord) => {
      rsvpStore = input;
      return Promise.resolve(rsvpStore);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: rsvpKeys.all });
    },
  });
}
