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
    packageAliases[`@midas-ds/${dir}/theme`] = path.resolve(
      packagePath,
      'src/theme/index.ts',
    )
    packageAliases[`@midas-ds/${dir}`] = path.resolve(
      packagePath,
      'src/index.ts',
    )
  }
})

const config: Config = {
  title: 'Migrationsverkets designsystem',
  tagline: 'Midas',
  url: 'https://designsystem.migrationsverket.se',
  baseUrl: process.env.PR_NUMBER
    ? `/pr-preview/pr-${process.env.PR_NUMBER}/`
    : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico?v=3',
  organizationName: 'migrationsverket', // Usually your GitHub org/user name.
  projectName: 'midas', // Usually your repo name.
  trailingSlash: true,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv'],
  },
  plugins: [
    [
      'docusaurus-plugin-react-docgen-typescript',
      /** @type {import('docusaurus-plugin-react-docgen-typescript').Options} */
      {
        global: true,
        src: Object.values(packageAliases),
        parserOptions: {
          // prop table gets a bit crowded if we allow everything
          propFilter: (prop, component) => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react')
            }
            return true
          },
          savePropValueAsString: true,
          shouldExtractLiteralValuesFromEnum: false,
        },
      },
    ],
    [
      'docusaurus-plugin-module-alias',
      {
        alias: packageAliases,
      },
    ],
  ],
  markdown: {
    mermaid: true,
    parseFrontMatter: async params => {
      const result = await params.defaultParseFrontMatter(params)

      // Remove previous / next links at bottom of pages
      result.frontMatter.pagination_prev = null
      result.frontMatter.pagination_next = null

      return result
    },
  },
  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // reference: https://github.com/easyops-cn/docusaurus-search-local
        hashed: true,
        docsRouteBasePath: '/',
        language: ['sv'],
        searchBarShortcut: true,
        highlightSearchTermsOnTargetPage: true,
        indexPages: true,
      },
    ],
  ],
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
              { converters: ['yarn', 'pnpm'], sync: true },
            ],
          ],
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Alla inlägg',
          blogSidebarCount: 'ALL',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['yarn', 'pnpm'], sync: true },
            ],
          ],
        },
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'open_source',
    //   content:
    //     'Midas har nu öppen källkod. <a href="/blog/midas-open-source">Läs mer om vad det innebär.</a>',
    //   isCloseable: false,
    //   backgroundColor: '#eaf2f6'
    // },
    navbar: {
      logo: {
        alt: 'Migrationsverket Logotyp',
        src: 'img/mig-logo.svg',
        height: '52px',
        width: 'auto',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started/use',
          position: 'left',
          label: 'Dokumentation',
        },
        {
          to: '/blog',
          position: 'left',
          label: 'Nyheter',
        },
        {
          href: 'https://github.com/migrationsverket/midas/releases',
          label: 'Senaste versionen',
          position: 'right',
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
      // logo: {
      //   alt: 'Migrationsverket Logotyp',
      //   src: 'img/mig-logo-white.svg',
      //   height: '45px',
      //   width: 'auto'
      // },
      // links: [
      //   {
      //     title: 'Dokumentation',
      //     items: [
      //       {
      //         label: 'Kom igång',
      //         to: 'get-started'
      //       },
      //       {
      //         label: 'Grunderna',
      //         to: 'basics'
      //       },
      //       {
      //         label: 'Komponenter',
      //         to: 'components'
      //       },
      //       {
      //         label: 'Designmönster',
      //         to: 'design-patterns'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Om',
      //     items: [
      //       {
      //         label: 'Nyheter',
      //         to: '/blog'
      //       },
      //       {
      //         label: 'Om',
      //         to: '/about'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Övrigt',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/migrationsverket/midas'
      //       },
      //       {
      //         label: 'NPM',
      //         href: 'https://www.npmjs.com/org/midas-ds'
      //       }
      //     ]
      //   }
      // ],
      // copyright: 'Migrationsverkets designsystem - Midas'
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      //darkTheme: prismThemes.dracula,
    },
    mermaid: {
      options: {
        flowchart: {
          curve: 'linear',
        },
      },
    },
  } satisfies Preset.ThemeConfig,
}

export default config
