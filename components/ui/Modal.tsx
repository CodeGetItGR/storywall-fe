"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export function Modal({
  children,
  onClose,
  closeLabel,
}: {
  children: ReactNode;
  onClose: () => void;
  closeLabel: string;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center">
      <div className="relative flex max-h-[90vh] w-full max-w-md flex-col overflow-y-auto rounded-t-[--radius-card] bg-surface p-4 sm:rounded-[--radius-card]">
        <IconButton aria-label={closeLabel} onClick={onClose} className="absolute right-4 top-4">
          <X className="h-5 w-5" />
        </IconButton>
        {children}
      </div>
    </div>
  );
}
