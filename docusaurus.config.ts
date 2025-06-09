import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Tavaria.de Wiki',
    tagline: 'Und ich bin auch dabei! 👀',
    favicon: 'img/favicon.ico',

    url: 'https://wiki.tavaria.de',
    baseUrl: '/',

    organizationName: 'Tavaria',
    projectName: 'wiki',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'de',
        locales: ['de'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/banner.png',
        navbar: {
            title: 'Tavaria.de Wiki',
            logo: {
                alt: 'Tavaria.de Logo',
                src: 'img/favicon.ico',
            },
            items: [
                {
                    to: "https://support.tavaria.de",
                    label: "Support",
                    position: "left",
                }
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Tavaria.de - Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
