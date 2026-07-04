import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function PhotoGrid({ images, alt }: { images: string[]; alt: string }) {
  if (images.length === 1) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[--radius-card]">
        <Image src={images[0]} alt={alt} fill sizes="480px" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-[--radius-card]">
      {images.map((image, index) => (
        <div
          key={image}
          className={cn("relative aspect-square", index === 0 && "col-span-2 aspect-[16/9]")}
        >
          <Image src={image} alt={alt} fill sizes="480px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
