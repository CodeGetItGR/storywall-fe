"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useFeed } from "@/hooks/useFeed";
import { StoryViewer } from "@/components/story/StoryViewer";

export default function StoryPage() {
  const params = useParams<{ storyId: string }>();
  const { data: posts = [] } = useFeed();
  const tPosts = useTranslations("Posts");
  const postCaptions = tPosts.raw("items") as Array<{ caption: string }>;

  const postIndex = posts.findIndex((post) => post.id === params.storyId);
  const post = posts[postIndex];

  if (!post) return null;

  return <StoryViewer post={post} caption={postCaptions[postIndex]?.caption} />;
}
