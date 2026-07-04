"use client";

import { ReactNode } from "react";

export function BottomSheet({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/40">
      <div className="flex max-h-[80vh] w-full max-w-md flex-col overflow-y-auto rounded-t-[--radius-card] bg-surface p-4">
        {children}
      </div>
    </div>
  );
}
