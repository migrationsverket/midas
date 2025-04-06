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
        pages: {},
        theme: {
          customCss: ['./src/css/custom.css'],
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
          to: '/changelog',
          label: 'Changelog',
        },
        {
          href: 'https://github.com/migrationsverket/midas',
          className: 'navbar--github-link',
          ariaLabel: 'GitHub Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ['bash', 'git', 'css'],
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

function adjustChangelogHeadings() {
  const changelogPath = path.resolve(
    __dirname,
    '../../packages/components/CHANGELOG.md',
  )
  const staticChangelogPath = path.resolve(
    __dirname,
    './static/files/CHANGELOG.md',
  )

  fs.readFile(changelogPath, 'utf8', (err: any, data: string) => {
    if (err) {
      console.error('Error reading changelog:', err)
      return
    }

    const adjustedData = data.replace(
      /^(#{1,5}) /gm,
      (match, p1) => `${'#'.repeat(p1.length + 1)} `,
    )

    fs.writeFile(staticChangelogPath, adjustedData, 'utf8', err => {
      if (err) {
        console.error('Error writing adjusted changelog:', err)
      } else {
        console.log('Adjusted changelog saved to static folder.')
      }
    })
  })
}

adjustChangelogHeadings()
