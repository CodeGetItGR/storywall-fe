"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { ReactNode } from "react";

export function TopBar({ title, backLabel, action }: { title: string; backLabel: string; action?: ReactNode }) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-4 py-3">
      <IconButton aria-label={backLabel} onClick={() => router.back()}>
        <ChevronLeft className="h-5 w-5" />
      </IconButton>
      <h1 className="text-base font-semibold text-ink">{title}</h1>
      <div className="flex h-10 w-10 items-center justify-center">{action}</div>
    </header>
  );
}
