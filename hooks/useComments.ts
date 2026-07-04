import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { COMMENTS, type CommentRecord } from "@/lib/mock/comments";
import { minutesAgoIso } from "@/lib/utils/time";

let commentsStore: CommentRecord[] = [...COMMENTS];

export const commentsKeys = {
  all: ["comments"] as const,
};

export function useComments() {
  return useQuery({
    queryKey: commentsKeys.all,
    queryFn: () => Promise.resolve(commentsStore),
  });
}

export function useAddComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => {
      const comment: CommentRecord = {
        id: `comment-${commentsStore.length + 1}`,
        avatarUrl: "https://i.pravatar.cc/150?img=68",
        createdAtIso: minutesAgoIso(0),
        text,
      };
      commentsStore = [...commentsStore, comment];
      return Promise.resolve(comment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: commentsKeys.all });
    },
  });
}
