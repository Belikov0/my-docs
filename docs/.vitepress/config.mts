import { defineConfig } from "vitepress"
import nav from "./nav"
import * as sidebar from "./sidebar"
// import { frontend, theories, dev, questions } from "./sidebar";
// import sidebar from "./sidebar.mts";


const s = () => {
    const res = {}
    for (const value of Object.values(sidebar)) {
        for (const [k, v] of Object.entries(value)) {
            res[k] = v
        }
    }
    return res
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "我的文档",
    // description: "A VitePress Site",
    // srcDir: "/docs",

    themeConfig: {
        search: {
            provider: "local",
        },
        nav,
        sidebar: s(),
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
    markdown: {
        math: true,
    },
})
