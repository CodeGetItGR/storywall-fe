import { minutesAgoIso } from "@/lib/utils/time";

export type CommentRecord = {
  id: string;
  avatarUrl: string;
  createdAtIso: string;
  text?: string;
};

export const COMMENTS: CommentRecord[] = [
  { id: "comment-1", avatarUrl: "https://i.pravatar.cc/150?img=47", createdAtIso: minutesAgoIso(3) },
  { id: "comment-2", avatarUrl: "https://i.pravatar.cc/150?img=12", createdAtIso: minutesAgoIso(18) },
  { id: "comment-3", avatarUrl: "https://i.pravatar.cc/150?img=8", createdAtIso: minutesAgoIso(120) },
  { id: "comment-4", avatarUrl: "https://i.pravatar.cc/150?img=33", createdAtIso: minutesAgoIso(180) },
  { id: "comment-5", avatarUrl: "https://i.pravatar.cc/150?img=15", createdAtIso: minutesAgoIso(720) },
];
