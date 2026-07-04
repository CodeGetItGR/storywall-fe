import { ROUTES } from "@/lib/constants/routes";

export const NAV_ITEM_IDS = {
  home: "home",
  post: "post",
  tools: "tools",
  profile: "profile",
  notifications: "notifications",
} as const;

export type NavItemId = (typeof NAV_ITEM_IDS)[keyof typeof NAV_ITEM_IDS];

export type NavItem = {
  id: NavItemId;
  href: string;
  labelKey: "home" | "post" | "tools" | "profile" | "notifications";
  icon: "home" | "camera" | "sparkles" | "user" | "bell";
};

export const NAV_ITEMS: NavItem[] = [
  { id: NAV_ITEM_IDS.home, href: ROUTES.home, labelKey: "home", icon: "home" },
  { id: NAV_ITEM_IDS.post, href: ROUTES.newPost, labelKey: "post", icon: "camera" },
  { id: NAV_ITEM_IDS.tools, href: ROUTES.tools, labelKey: "tools", icon: "sparkles" },
  { id: NAV_ITEM_IDS.profile, href: ROUTES.profile, labelKey: "profile", icon: "user" },
  { id: NAV_ITEM_IDS.notifications, href: ROUTES.notifications, labelKey: "notifications", icon: "bell" },
];
