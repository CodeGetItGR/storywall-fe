export const FUTURE_MESSAGE_DELAYS = [
  { id: "oneMonth", months: 1 },
  { id: "twoMonths", months: 2 },
  { id: "fourMonths", months: 4 },
  { id: "sixMonths", months: 6 },
  { id: "oneYear", months: 12 },
] as const;

export type FutureMessageDelayId = (typeof FUTURE_MESSAGE_DELAYS)[number]["id"];
