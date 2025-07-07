// @ts-check
// Docusaurus configuration file

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aussivo ',
  tagline: 'Complete Guide to Aussivo',
  favicon: 'img/logo.png',

  url: 'https://your-docusaurus-site.com', // Replace with your actual website URL
  baseUrl: '/',

  organizationName: 'your-org', // Replace with your GitHub org/user
  projectName: 'Aussivo', // Replace with your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Aussivo',
        logo: {
          alt: 'Aussivo Logo',
          src: 'img/logo.png',
                  },
        items: [
          
        ],

        
      },
      
      

      footer: {
        style: 'dark',
        links: [
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aussivo`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
    }),
};

export default config;