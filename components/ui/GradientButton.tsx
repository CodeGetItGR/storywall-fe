import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function GradientButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-[--radius-pill] bg-gradient-to-r from-accent-pink to-accent-orange px-6 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
