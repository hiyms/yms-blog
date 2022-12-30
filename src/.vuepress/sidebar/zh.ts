import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "OI",
      icon: "note",
      prefix: "OI/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
