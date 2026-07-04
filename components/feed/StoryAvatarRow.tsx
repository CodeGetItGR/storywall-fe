import { Avatar } from "@/components/ui/Avatar";
import type { WEDDING_INFO } from "@/lib/mock/wedding";

type Guest = (typeof WEDDING_INFO)["guests"][number];

export function StoryAvatarRow({ guests }: { guests: readonly Guest[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-3">
      {guests.map((guest) => (
        <div key={guest.id} className="flex flex-col items-center gap-1">
          <Avatar src={guest.avatarUrl} alt={guest.name} size="sm" ringed={!guest.isSelf} />
          <span className="text-xs text-ink-muted">{guest.name}</span>
        </div>
      ))}
    </div>
  );
}
