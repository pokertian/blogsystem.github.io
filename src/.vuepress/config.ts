import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客系统-dlut",
  description: "大连理工大学校内实训博客系统项目",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
