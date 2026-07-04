import { minutesAgoIso } from "@/lib/utils/time";

export type Post = {
  id: string;
  authorName: string;
  avatarUrl: string;
  createdAtIso: string;
  images: string[];
  likes: number;
  commentsCount: number;
  layout: "single" | "grid";
};

export const POSTS: Post[] = [
  {
    id: "post-1",
    authorName: "Eleni Papadopoulou",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    createdAtIso: minutesAgoIso(38),
    images: [
      "https://picsum.photos/id/1025/600/450",
      "https://picsum.photos/id/1027/600/450",
      "https://picsum.photos/id/1035/600/450",
    ],
    likes: 1300,
    commentsCount: 273,
    layout: "grid",
  },
  {
    id: "post-2",
    authorName: "Eleni Papadopoulou",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    createdAtIso: minutesAgoIso(96),
    images: ["https://picsum.photos/id/1041/600/750"],
    likes: 1300,
    commentsCount: 273,
    layout: "single",
  },
];
