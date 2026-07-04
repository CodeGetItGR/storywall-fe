import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-none rounded-2xl border border-border bg-surface p-4 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
