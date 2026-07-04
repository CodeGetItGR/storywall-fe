import { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";

export function AppShell({ children, notificationsCount }: { children: ReactNode; notificationsCount?: number }) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-md flex-1 flex-col bg-background">
      <div className="flex-1 overflow-y-auto pb-2">{children}</div>
      <BottomNav notificationsCount={notificationsCount} />
    </div>
  );
}
