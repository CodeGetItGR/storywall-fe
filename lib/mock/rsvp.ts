import type { RsvpOptionId } from "@/lib/constants/rsvp";

export type RsvpRecord = {
  attending: RsvpOptionId | null;
  adults: number;
  children: number;
  phone: string;
  email: string;
  notes: string;
};

export const DEFAULT_RSVP: RsvpRecord = {
  attending: null,
  adults: 1,
  children: 0,
  phone: "",
  email: "",
  notes: "",
};
