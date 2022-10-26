import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default"
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Pilrymage\'s Haven',
    description: '主页标题',
    theme: defaultTheme({
        navbar: [
            {
                text: '冲浪版',
                link: '/Memes/',
            },
            {
                text: '科技版',
                link: '/Technology/',
            },
            {
                text: '文史版',
                link: 'Culture',
            },
        ]
    }),

})