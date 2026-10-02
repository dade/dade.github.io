import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {catppuccinLatte, catppuccinMocha} from './src/utils/prismCatppuccin';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Dale Emasiri',
  tagline: 'Me, Myself, and i = 0',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://demasiri.com',
  baseUrl: '/',

  organizationName: 'dade',
  projectName: 'dade.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/apple-touch-icon.png'},
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'projects',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
        },
        blog: {
          path: 'blog',
          routeBasePath: 'writing',
          blogTitle: 'Writing',
          blogDescription: 'Writing by Dale Emasiri',
          showReadingTime: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Dale Emasiri',
      items: [
        {to: '/professional', label: 'Professional', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {to: '/writing', label: 'Writing', position: 'left'},
        {to: '/creative', label: 'Creative', position: 'left'},
        {
          href: 'https://github.com/dade',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com/in/demasiri',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://bsky.app/profile/demasiri.com',
          label: 'Bluesky',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Dale Emasiri. Built with Docusaurus.`,
    },
    prism: {
      theme: catppuccinLatte,
      darkTheme: catppuccinMocha,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
