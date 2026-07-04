export const POST_MENU_ITEMS = [
  { id: "post", titleKey: "postTitle", subtitleKey: "postSubtitle", icon: "camera" },
  { id: "story", titleKey: "storyTitle", subtitleKey: "storySubtitle", icon: "bolt" },
  { id: "music", titleKey: "musicTitle", subtitleKey: "musicSubtitle", icon: "music" },
] as const;

export type PostMenuItemId = (typeof POST_MENU_ITEMS)[number]["id"];
