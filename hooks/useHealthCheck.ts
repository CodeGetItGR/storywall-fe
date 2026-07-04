import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api/client";

type HealthCheck = {
  status: string;
};

export const healthCheckKeys = {
  all: ["health-check"] as const,
};

export function useHealthCheck() {
  return useQuery({
    queryKey: healthCheckKeys.all,
    queryFn: () => api.get<HealthCheck>("/health"),
  });
}

export function usePingHealthCheck() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.post<HealthCheck>("/health/ping"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: healthCheckKeys.all });
    },
  });
}
