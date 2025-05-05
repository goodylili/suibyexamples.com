import {defineConfig} from "vocs";
import sidebar from "./sidebar";
import topNav from "./topNav.ts";

// @ts-ignore
export default defineConfig({


    theme: {
        accentColor: {
            dark: '#4da2ff',
            light: '#050f1c',
        },
        variables: {
            color: {
                background: {
                    light: '#f9f9f9', // Main background color
                    dark: '#0e0d0f', // Optional: Dark mode background
                },
            }
        }

    },


    logoUrl: {light: "/dark.svg", dark: "/yellow.svg"},


    sidebar,
    // TODO: change the base URL and edit link before deploying to production
    editLink: {
        pattern: 'https://github.com/goodylili/suibyexamples.com/tree/main/docs/pages/:path',
        text: 'Edit this Page',
    },
    socials: [
        {
            icon: 'github',
            link: 'https://github.com/goodylili',
        },
        {
            icon: 'x',
            link: 'https://x.com/goodylili',
        },
        {
            icon: 'discord',
            link: 'https://discord.com/users/823402886854737960',
        },
        {
            icon: 'telegram',
            link: 'https://t.me/goodylili'
        },
    ],
    title: "Sui by Examples",
    description: "Sui Examples for Developers to Start Moving Fast",
    topNav,
});