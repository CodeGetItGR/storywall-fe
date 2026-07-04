import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function TextInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-2xl border border-border bg-surface px-4 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
