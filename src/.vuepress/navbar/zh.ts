import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "OI",
    icon: "edit",
    prefix: "/OI",
    children: [
      { text: "c++", icon: "discover", link: "/cpp.html" }
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
