import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import path from 'path'
import prismLight from './src/theme/prismLight'
import prismDark from './src/theme/prismDark'
import { createAliases } from './aliases'

const packagesDir = path.resolve(__dirname, '../../packages')
const toolsDir = path.resolve(__dirname, '../../tools')

// eslint-disable-next-line
const version: string = require(
  `${packagesDir}/components/package.json`,
).version

const isUnreleased = !!process.env.UNRELEASED

const packageAliases = {
  ...createAliases(packagesDir),
  ...createAliases(toolsDir),
}

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
    process.env.DOCUSAURUS_HIDE_API === 'true'
      ? null
      : [
          require.resolve('./docgen-fix-plugin'),
          {
            src: `${packagesDir}/components/src/**/[A-Z]*.tsx`,
            parserOptions: {
              shouldExtractValuesFromUnion: true,
              shouldExtractLiteralValuesFromEnum: false,
            },
          },
        ],
    ['docusaurus-plugin-module-alias', { alias: packageAliases }],
    function webpackAliasPlugin() {
      return {
        name: 'webpack-alias-plugin',
        configureWebpack() {
          // Transform packageAliases for webpack (remove /* suffix)
          const webpackAliases = {}
          Object.keys(packageAliases).forEach(key => {
            if (key.endsWith('/*')) {
              // Remove /* and /src/* from the path for webpack
              const aliasKey = key.slice(0, -2)
              const aliasPath = packageAliases[key].replace('/src/*', '/src')
              webpackAliases[aliasKey] = aliasPath
            } else if (!webpackAliases[key]) {
              // Only add if not already added by wildcard version
              webpackAliases[key] = packageAliases[key]
            }
          })

          return {
            resolve: {
              alias: webpackAliases,
            },
          }
        },
      }
    },
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
            : `<a href="https://github.com/migrationsverket/midas/releases" target="_blank" rel="noopener noreferrer"><code>Version ${version}</code></a>`,
        },
        {
          href:
            process.env.NODE_ENV !== 'production'
              ? 'http://localhost:4400'
              : `https://designsystem.migrationsverket.se${getBaseUrl()}storybook`,
          className: 'navbar--storybook-link',
          'aria-label': 'Storybook',
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
    footer: { style: 'dark' },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ['bash', 'git', 'css', 'diff'],
      theme: prismLight,
      darkTheme: prismDark,
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
