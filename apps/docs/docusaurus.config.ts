import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'
import path from 'path'
import fs from 'fs'
import { getBranchUrl } from './src/utils/chromatic'

const packagesDir = path.resolve(__dirname, '../../packages')
const defaultLocale = 'sv'
const packageAliases = {}
// eslint-disable-next-line
const version = require(`${packagesDir}/components/package.json`).version

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
  customFields: {
    currentChromaticBranchUrl: getBranchUrl(process.env.GITHUB_HEAD_REF),
    midasVersion: version,
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
          propFilter: prop => {
            if (prop.parent) {
              return !prop.parent.fileName.includes('@types/react')
            }
            return true
          },
          savePropValueAsString: true,
          shouldExtractValuesFromUnion: true,
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
    [
      './src/plugins/changelog/index.ts',
      {
        blogTitle: 'Midas changelog',
        blogDescription:
          'Håll dig uppdaterad med allt som händer i varje release',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Changelog',
        routeBasePath: '/changelog',
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        authorsMapPath: 'authors.json',
        feedOptions: {
          type: 'all',
          title: 'Midas changelog',
          description:
            'Håll dig uppdaterad med allt som händer i varje release',
          copyright: `${new Date().getFullYear()} Migrationsverket`,
          language: defaultLocale,
        },
        onInlineAuthors: 'warn',
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
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css', './src/css/highlight.css'],
        },
        blog: {
          path: 'blog',
          blogSidebarTitle: 'Midas versioner',
          blogSidebarCount: 'ALL',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Migrationsverket Logotyp',
        src: 'img/mig-logo.svg',
        srcDark: 'img/mig-logo-white.svg',
        height: '52px',
        width: 'auto',
      },
      items: [
        {
          type: 'doc',
          docId: 'get-started/use',
          label: 'Dokumentation',
        },
        {
          to: `/blog/releases/${version}`,
          label: `Version ${version}`,
          position: 'right',
        },
        {
          href: 'https://github.com/migrationsverket/midas',
          className: 'navbar--github-link',
          'aria-label': 'GitHub Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'Changelog',
              to: '/changelog',
            },
          ],
        },
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ['bash', 'git', 'css', 'diff'],
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
    mermaid: {
      options: {
        flowchart: {
          curve: 'linear',
        },
      },
    },
    metadata: [
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'theme-color',
        content: '#242526',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  } satisfies Preset.ThemeConfig,
}

export default config
