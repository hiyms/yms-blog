import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "OI",
    icon: "edit",
    prefix: "/OI",
    children: [
      { text: "c++", icon: "note", link: "/cpp/" },
      { text: "python", icon: "note", link: "/python/" },
      { text: "工具", icon: "note", link: "/tools/" },
    ],
  },
]);
