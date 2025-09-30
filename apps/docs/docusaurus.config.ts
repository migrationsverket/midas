import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes as prismThemes } from 'prism-react-renderer'
import path from 'path'
import fs from 'fs'

const packagesDir = path.resolve(__dirname, '../../packages')
const packageAliases = {}
// eslint-disable-next-line
const version: string = require(
  `${packagesDir}/components/package.json`,
).version

const isUnreleased = !!process.env.UNRELEASED

fs.readdirSync(packagesDir).forEach(dir => {
  if (dir.startsWith('.')) {
    return
  }

  const packagePath = path.resolve(packagesDir, dir)

  if (fs.statSync(packagePath).isDirectory()) {
    const index = path.resolve(packagePath, 'src/index.ts')

    if (fs.existsSync(index) && fs.statSync(index).isFile()) {
      packageAliases[`@midas-ds/${dir}`] = index
    } else {
      packageAliases[`@midas-ds/${dir}/*`] = path.resolve(packagePath, 'src/*')
    }
  }
})

const getBaseUrl = (): string => {
  if (isUnreleased) {
    return `/unreleased/`
  }

  if (process.env.PR_NUMBER) {
    return `/pr-preview/pr-${process.env.PR_NUMBER}/`
  }

  return '/'
}

const config: Config = {
  noIndex: isUnreleased || !!process.env.PR_NUMBER,
  title: 'Migrationsverkets designsystem',
  tagline: 'Midas',
  url: 'https://designsystem.migrationsverket.se',
  baseUrl: getBaseUrl(),
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico?v=3',
  organizationName: 'migrationsverket', // Usually your GitHub org/user name.
  projectName: 'midas', // Usually your repo name.
  trailingSlash: true,
  i18n: { defaultLocale: 'sv', locales: ['sv'] },
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
    ['docusaurus-plugin-module-alias', { alias: packageAliases }],
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
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
          path: 'blog/release-notes',
          blogSidebarTitle: 'Release notes',
          blogSidebarCount: 'ALL',
          routeBasePath: '/release-notes',
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
        { type: 'doc', docId: 'get-started/install', label: 'Dokumentation' },
        {
          to: `/release-notes`,
          label: 'Release notes',
        },
        {
          type: 'html',
          position: 'right',
          value: isUnreleased
            ? `<code class="unreleased">Version ${version} (unreleased)</code>`
            : `<code>Version ${version}</code>`,
        },
        {
          href: 'https://github.com/migrationsverket/midas',
          className: 'navbar--github-link',
          'aria-label': 'GitHub Repository',
          position: 'right',
        },
      ],
    },
    footer: { style: 'dark' },
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
    mermaid: { options: { flowchart: { curve: 'linear' } } },
    metadata: [
      { name: 'color-scheme', content: 'light dark' },
      { name: 'theme-color', content: 'white' },
      {
        name: 'theme-color',
        content: '#242526',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  } satisfies Preset.ThemeConfig,
}

export default config
