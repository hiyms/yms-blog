import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "yms的博客",
      description: "面向未来！",
    }
  },

  theme,

  shouldPrefetch: false,
});
