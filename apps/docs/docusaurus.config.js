// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dream',
  tagline: 'Designsystem',
  url: 'https://sslproxyutvlb.migrationsverket.se',
  baseUrl: '/dream/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName: 'dream', // Usually your GitHub org/user name.
  projectName: 'dream', // Usually your repo name.
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          // TODO: should work for all cases? manually adding for now
          '@mvds/*': path.resolve(__dirname, '../../packages/'),
          '@mvds/fileupload': path.resolve(
            __dirname,
            '../../packages/file-upload'
          ),
          '@mvds/button': path.resolve(
            __dirname,
            '../../packages/button/src/index.ts'
          ),
          '@mvds/toast': path.resolve(
            __dirname,
            '../../packages/toast/src/index.ts'
          ),
          '@mvds/theme': path.resolve(
            __dirname,
            '../../packages/theme/src/index.ts'
          ),
        },
      },
    ],
    [
      'docusaurus-plugin-react-docgen-typescript',
      /** @type {import('docusaurus-plugin-react-docgen-typescript').Options} */
      {
        // pass in a single string or an array of strings
        src: ['../*/**/packages/*/src/lib/*.tsx'],
        parserOptions: {
          // pass parserOptions to react-docgen-typescript
          // here is a good starting point which filters out all
          // types from react
          propFilter: (prop, component) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react');
            }

            return true;
          },
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { sync: true, converters: ['yarn'] },
            ],
          ],
          // Please change this to your repo.
          editUrl:
            'https://github.com/migrationsverket/midas',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MIDAS',
        logo: {
          alt: 'MIDAS Logo',
          src: 'img/MIDAS_crown.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: ' ',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/migrationsverket/midas',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentation',
            items: [
              {
                label: 'Komponenter',
                to: '/components',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'MatterMost',
                href: 'https://itverktyg.migrationsverket.se/mattermost/migrationsverket/channels/designsystem-support',
              },
            ],
          },
          {
            title: 'Resurser',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/migrationsverket/midas',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Dream`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
