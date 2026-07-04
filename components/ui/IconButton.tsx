import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function IconButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink shadow-sm transition-colors hover:bg-surface-muted",
        className,
      )}
      {...props}
    />
  );
}
