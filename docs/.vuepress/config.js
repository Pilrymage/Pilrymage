import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default"
export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Pilrymage\'s Haven',
    description: '主页标题',
    theme: defaultTheme({
        
        navbar: [
            {
                text: '图书推荐',
                link: '/Misc/Books'
            },
            {
                text: '冲浪版',
                link: '/Memes/',
            },
            {
                text: '科技版',
                children: [
                    '/Technology/Basic-Development',
                    '/Technology/AI-Series',
                    '/Technology/Cyber-Security',
                    '/Technology/EDM-Production',
                    '/Technology/GNU-Linux',
                    '/Technology/Lisp-Family',
                    '/Technology/Personal-Server',
                ],
            },
            {
                text: '文史版',
                link: '/Culture/',
            },
            
        ],
        repo: 'Pilrymage/pilrymage',
    }),

})