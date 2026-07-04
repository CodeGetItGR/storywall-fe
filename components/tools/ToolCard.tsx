import { ChevronRight, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export function ToolCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <Link href={href}>
      <Card className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-ink">{title}</p>
          <p className="text-xs text-ink-muted">{description}</p>
        </div>
        <ChevronRight className="h-4 w-4 text-ink-muted" />
      </Card>
    </Link>
  );
}
