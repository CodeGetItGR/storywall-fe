import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { POSTS, type Post } from "@/lib/mock/posts";
import { minutesAgoIso } from "@/lib/utils/time";

let feedStore: Post[] = [...POSTS];

export const feedKeys = {
  all: ["feed"] as const,
};

export function useFeed() {
  return useQuery({
    queryKey: feedKeys.all,
    queryFn: () => Promise.resolve(feedStore),
  });
}

export type NewPostInput = {
  authorName: string;
  avatarUrl: string;
  images: string[];
};

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: NewPostInput) => {
      const post: Post = {
        id: `post-${feedStore.length + 1}`,
        authorName: input.authorName,
        avatarUrl: input.avatarUrl,
        createdAtIso: minutesAgoIso(0),
        images: input.images,
        likes: 0,
        commentsCount: 0,
        layout: input.images.length > 1 ? "grid" : "single",
      };
      feedStore = [post, ...feedStore];
      return Promise.resolve(post);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: feedKeys.all });
    },
  });
}
