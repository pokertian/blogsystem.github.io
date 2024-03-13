import { defineUserConfig } from "vuepress";
import  MetingPlugins  from "vuepress-plugin-meting2";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客系统-dlut",
  description: "大连理工大学校内实训博客系统项目",
  
  theme,

  plugins:[
    MetingPlugins({
      metingOptions:{
        global:true,
        server: "netease",
        type: "playlist",
        mid: "9421210530"
      },
    })
  ],
  
});
