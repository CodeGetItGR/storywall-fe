import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PROFILE, type ProfileRecord } from "@/lib/mock/profile";

let profileStore: ProfileRecord = { ...PROFILE };

export const profileKeys = {
  all: ["profile"] as const,
};

export function useProfile() {
  return useQuery({
    queryKey: profileKeys.all,
    queryFn: () => Promise.resolve(profileStore),
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: ProfileRecord) => {
      profileStore = input;
      return Promise.resolve(profileStore);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: profileKeys.all });
    },
  });
}
