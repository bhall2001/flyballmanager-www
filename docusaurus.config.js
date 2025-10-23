// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flyball Manager',
  tagline: 'Planning, Scoring and Reporting',
  url: 'https://thunderous-rolypoly-7aaf6e.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bhall2001', // Usually your GitHub org/user name.
  projectName: 'flyballmanager-www', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Flyball Manager',
        logo: {
          alt: 'Flyball Manager Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'tutorial/info',
            position: 'left',
            label: 'Tutorial',
            to: '/docs/tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Policies',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
            ],
          },
          // {
          //     title: 'Community',
          //     items: [
          //       {
          //         label: 'Stack Overflow',
          //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //       },
          //       {
          //         label: 'Discord',
          //         href: 'https://discordapp.com/invite/docusaurus',
          //       },
          //       {
          //         label: 'Twitter',
          //         href: 'https://twitter.com/docusaurus',
          //       },
          //     ],
          //   },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Robert D Hall`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
