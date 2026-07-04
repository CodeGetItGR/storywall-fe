"use client";

import Image from "next/image";
import { Gift, Heart, Wine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { CountdownStats } from "@/components/feed/CountdownStats";
import { StoryAvatarRow } from "@/components/feed/StoryAvatarRow";
import { RsvpBanner } from "@/components/feed/RsvpBanner";
import { PostCard } from "@/components/feed/PostCard";
import { PostMenuFab } from "@/components/feed/PostMenuFab";
import { IconButton } from "@/components/ui/IconButton";
import { useWeddingInfo } from "@/providers/WeddingProvider";
import { useFeed } from "@/hooks/useFeed";
import { useNotifications } from "@/hooks/useNotifications";
import { useRsvp } from "@/hooks/useRsvp";
import { ROUTES } from "@/lib/constants/routes";

export default function HomePage() {
  const t = useTranslations("App");
  const tPosts = useTranslations("Posts");
  const wedding = useWeddingInfo();
  const { data: posts = [] } = useFeed();
  const { data: notifications = [] } = useNotifications();
  const { data: rsvp } = useRsvp();
  const postCaptions = tPosts.raw("items") as Array<{ caption: string }>;

  return (
    <AppShell notificationsCount={notifications.length}>
      <header className="flex items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-primary">{t("name")}</span>
        <CountdownStats targetIso={wedding.weddingDateIso} />
      </header>

      <div className="relative mx-4 aspect-[4/3] overflow-hidden rounded-[--radius-card]">
        <Image
          src={wedding.heroImageUrl}
          alt={wedding.coupleNames}
          fill
          sizes="480px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h1 className="text-2xl font-semibold text-white">{wedding.coupleNames}</h1>
        </div>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <Link href={ROUTES.rsvp}>
            <IconButton aria-label="RSVP">
              <Heart className="h-5 w-5" />
            </IconButton>
          </Link>
          <Link href={ROUTES.venue}>
            <IconButton aria-label="Venue">
              <Wine className="h-5 w-5" />
            </IconButton>
          </Link>
          <Link href={ROUTES.gifts}>
            <IconButton aria-label="Gifts">
              <Gift className="h-5 w-5" />
            </IconButton>
          </Link>
        </div>
      </div>

      <StoryAvatarRow guests={wedding.guests} />

      {rsvp?.attending === null && <RsvpBanner />}

      <div>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} caption={postCaptions[index]?.caption ?? ""} />
        ))}
      </div>

      <PostMenuFab />
    </AppShell>
  );
}
