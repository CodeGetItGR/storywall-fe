export const RSVP_OPTIONS = [
  { id: "full", icon: "church" },
  { id: "ceremonyOnly", icon: "landmark" },
  { id: "receptionOnly", icon: "cocktail" },
  { id: "cannotAttend", icon: "sad" },
] as const;

export type RsvpOptionId = (typeof RSVP_OPTIONS)[number]["id"];
