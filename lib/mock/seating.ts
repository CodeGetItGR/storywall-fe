export type SeatResult = {
  table: number;
  seat: number;
};

const MOCK_SEAT_RESULT: SeatResult = { table: 23, seat: 9 };

export function findSeatByName(name: string): SeatResult {
  if (!name.trim()) return MOCK_SEAT_RESULT;
  return MOCK_SEAT_RESULT;
}
