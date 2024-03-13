import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "参考模板",
      icon: "file",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "博文",
      icon: "blog",
      prefix: "posts/",
      children: "structure",
    },
     "upload/",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
