import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { docgenPlugin } from './docgenPlugin.ts'

const require = createRequire(import.meta.url)

const basePath = process.cwd().endsWith('/apps/storybook')
  ? process.cwd()
  : join(process.cwd(), 'apps', 'storybook')

export default {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/examples/*.@(mdx|stories.@(md|tsx))',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: join(basePath, 'vite.config.ts'),
      },
    },
  },
  typescript: {
    // Spike: fed from the shared tools/docgen JSON via docgenPlugin below
    // instead of Storybook's own extraction. See docgenPlugin.ts.
    reactDocgen: false,
  },
  async viteFinal(config) {
    config.plugins ??= []
    config.plugins.push(docgenPlugin())
    return config
  },
  staticDirs: [join(basePath, 'static')],
  managerHead: head =>
    `${head}<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`,
  previewHead: head =>
    `${head}<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`,
} satisfies StorybookConfig

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
