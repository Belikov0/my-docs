import { defineConfig } from "vitepress";
import nav from "./nav.mts";
import { front_end, theories } from "./sidebar.mts";
// import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的文档",
  // description: "A VitePress Site",
  // srcDir: "/docs",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav,

    sidebar: { ...front_end, ...theories},

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    math: true
  }
});
