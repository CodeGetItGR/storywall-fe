export const WEDDING_INFO = {
  coupleNames: "Maria & Giorgos",
  weddingDateIso: "2026-09-14T18:30:00",
  locationLabel: "Santorini",
  heroImageUrl: "https://picsum.photos/id/1011/800/1000",
  guests: [
    { id: "guest-you", name: "You", avatarUrl: "https://i.pravatar.cc/150?img=68", isSelf: true },
    { id: "guest-benjamin", name: "Benjamin", avatarUrl: "https://i.pravatar.cc/150?img=12", isSelf: false },
    { id: "guest-farita", name: "Farita", avatarUrl: "https://i.pravatar.cc/150?img=45", isSelf: false },
    { id: "guest-marie", name: "Marie", avatarUrl: "https://i.pravatar.cc/150?img=33", isSelf: false },
    { id: "guest-fanis", name: "Fanis", avatarUrl: "https://i.pravatar.cc/150?img=51", isSelf: false },
  ],
} as const;

export const RSVP_DEADLINE_ISO = "2026-08-31T00:00:00";
