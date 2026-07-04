import { Card } from "@/components/ui/Card";
import type { WishRecord } from "@/hooks/useWishes";

type SeedWish = { author: string; text: string };

export function WishList({ seedWishes, submittedWishes }: { seedWishes: SeedWish[]; submittedWishes: WishRecord[] }) {
  return (
    <div className="flex flex-col gap-3">
      {submittedWishes.map((wish) => (
        <Card key={wish.id}>
          <p className="text-sm text-ink">{wish.text}</p>
          <p className="mt-1 text-xs text-ink-muted">— {wish.author}</p>
        </Card>
      ))}
      {seedWishes.map((wish, index) => (
        <Card key={`seed-${index}`}>
          <p className="text-sm text-ink">{wish.text}</p>
          <p className="mt-1 text-xs text-ink-muted">— {wish.author}</p>
        </Card>
      ))}
    </div>
  );
}
