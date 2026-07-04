"use client";

import { createContext, useContext, type ReactNode } from "react";
import { WEDDING_INFO } from "@/lib/mock/wedding";

type WeddingInfo = typeof WEDDING_INFO;

const WeddingContext = createContext<WeddingInfo | null>(null);

export function WeddingProvider({ children }: { children: ReactNode }) {
  return <WeddingContext.Provider value={WEDDING_INFO}>{children}</WeddingContext.Provider>;
}

export function useWeddingInfo(): WeddingInfo {
  const context = useContext(WeddingContext);

  if (!context) {
    throw new Error("useWeddingInfo must be used within a WeddingProvider");
  }

  return context;
}
