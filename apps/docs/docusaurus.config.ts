import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'
const path = require('path')
const fs = require('fs')

const packagesDir = path.resolve(__dirname, '../../packages')
const packageAliases = {}

fs.readdirSync(packagesDir).forEach(dir => {
  if (dir.startsWith('.')) {
    return
  }

  const packagePath = path.resolve(packagesDir, dir)
  if (fs.statSync(packagePath).isDirectory()) {
    packageAliases[`@midas-ds/${dir}`] = path.resolve(
      packagePath,
      'src/index.ts'
    )
  }
})

const config: Config = {
  title: 'Migrationsverkets designsystem',
  tagline: 'Midas',
  url: 'https://designsystem.migrationsverket.se',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'migrationsverket', // Usually your GitHub org/user name.
  projectName: 'midas', // Usually your repo name.
  trailingSlash: true,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv']
  },
  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: packageAliases
      }
    ]
  ],
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid', '@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['yarn', 'pnpm'], sync: true }
            ]
          ]
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Alla inlägg',
          blogSidebarCount: 'ALL',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['yarn', 'pnpm'], sync: true }
            ]
          ]
        },
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css']
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    announcementBar: {
      id: 'open_source',
      content:
        'Midas är nu open sourced! <a href="/blog/midas-open-source">Läs mer om vad det innebär.</a>',
      isCloseable: false,
      backgroundColor: '#eaf2f6'
    },
    navbar: {
      title: 'Designsystem',
      logo: {
        alt: 'Migrationsverket Logotyp',
        src: 'img/mig-logo.svg',
        height: '100%',
        width: '100px',
        className: 'migNavbarLogo'
      },
      items: [
        {
          type: 'doc',
          docId: 'components/index',
          position: 'left',
          label: 'Dokumentation'
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Nyheter'
        },
        {
          to: '/about',
          position: 'left',
          label: 'Om'
        },
        {
          to: '/blog/release-13',
          label: 'Release notes',
          position: 'right'
        },
        {
          href: 'https://github.com/migrationsverket/midas',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Migrationsverket Logotyp',
        src: 'img/mig-logo-white.svg',
        height: '100%',
        width: '100px'
      },
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'Kom igång',
              to: 'get-started'
            },
            {
              label: 'Grunderna',
              to: 'basics'
            },
            {
              label: 'Komponenter',
              to: 'components'
            },
            {
              label: 'Designmönster',
              to: 'design-patterns'
            }
          ]
        },
        {
          title: 'Om',
          items: [
            {
              label: 'Nyheter',
              to: '/blog'
            },
            {
              label: 'Om',
              to: '/about'
            }
          ]
        },
        {
          title: 'Övrigt',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/migrationsverket/midas'
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/org/midas-ds'
            }
          ]
        }
      ],
      copyright: `Migrationsverkets designsystem - Midas`
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    prism: {
      theme: prismThemes.github
      //darkTheme: prismThemes.dracula,
    },
    mermaid: {
      options: {
        flowchart: {
          curve: 'linear'
        }
      }
    }
  } satisfies Preset.ThemeConfig
}

export default config
