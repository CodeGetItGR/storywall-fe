import { cn } from "@/lib/utils/cn";

export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={cn(
            "h-1.5 flex-1 rounded-[--radius-pill]",
            index < current ? "bg-primary" : "bg-surface-muted",
          )}
        />
      ))}
    </div>
  );
}
