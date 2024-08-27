import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'
const path = require('path')
const fs = require('fs')

const packagesDir = path.resolve(__dirname, '../../packages')
const packageAliases = {}

fs.readdirSync(packagesDir).forEach((dir) => {
  if (dir.startsWith('.')) {
    return
  }

  const packagePath = path.resolve(packagesDir, dir)
  if (fs.statSync(packagePath).isDirectory()) {
    packageAliases[`@migrationsverket/${dir}`] = path.resolve(
      packagePath,
      'src/index.ts'
    )
  }
})

const config: Config = {
  title: 'MIDAS',
  tagline: 'Migrationsverket Designsystem',
  url: 'https://designsystem.migrationsverket.se',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'migrationsverket', // Usually your GitHub org/user name.
  projectName: 'midas', // Usually your repo name.
  trailingSlash: false,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },
  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: packageAliases,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', '@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/migrationsverket/midas/edit/main/apps/docs',
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Alla inlägg',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl:
            'https://github.com/migrationsverket/midas/edit/main/apps/docs/blog',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ],
        },
        pages: {},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      id: 'open_source',
      content:
        'MIDAS är nu open sourced! <a href="/blog/midas-open-source">Läs mer om vad det innebär.</a>',
      isCloseable: false,
    },

    navbar: {
      title: 'MIDAS',
      logo: {
        alt: 'Midas Logo',
        src: 'img/MIDAS_crown.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'components/index',
          position: 'left',
          label: 'Designsystem',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Nyheter',
        },
        {
          to: '/about',
          position: 'left',
          label: 'Om',
        },
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
          title: 'Docs',
          items: [
            {
              label: 'Components',
              to: 'components',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mattermost',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/migrationsverket/midas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Midas by Dreamteam`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
