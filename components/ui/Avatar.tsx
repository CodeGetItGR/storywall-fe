import Image from "next/image";
import { cn } from "@/lib/utils/cn";

const SIZE_CLASSES = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-20 w-20",
} as const;

type AvatarSize = keyof typeof SIZE_CLASSES;

export function Avatar({
  src,
  alt,
  size = "md",
  ringed = false,
  className,
}: {
  src: string;
  alt: string;
  size?: AvatarSize;
  ringed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-surface-muted",
        SIZE_CLASSES[size],
        ringed && "ring-2 ring-accent-pink ring-offset-2 ring-offset-background",
        className,
      )}
    >
      <Image src={src} alt={alt} fill sizes="80px" className="object-cover" />
    </div>
  );
}
