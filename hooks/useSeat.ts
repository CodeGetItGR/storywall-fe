import { useMutation } from "@tanstack/react-query";
import { findSeatByName, type SeatResult } from "@/lib/mock/seating";

export function useFindSeat() {
  return useMutation<SeatResult, Error, string>({
    mutationFn: (name: string) => Promise.resolve(findSeatByName(name)),
  });
}
