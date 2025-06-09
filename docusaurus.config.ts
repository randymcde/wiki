import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'rpxls.de Wiki',
    tagline: 'Und ich bin auch dabei! 👀',
    favicon: 'img/favicon.ico',

    url: 'https://wiki.rpxls.de',
    baseUrl: '/',

    organizationName: 'rpxls',
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
            title: 'rpxls.de Wiki',
            logo: {
                alt: 'rpxls.de Logo',
                src: 'img/logo.ico',
            },
            items: [
                {
                    to: "https://support.rpxls.de",
                    label: "Support",
                    position: "left",
                }
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} rpxls.de - Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
