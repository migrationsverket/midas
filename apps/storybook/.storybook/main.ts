import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'

const require = createRequire(import.meta.url)

const basePath = process.cwd().endsWith('/apps/storybook')
  ? process.cwd()
  : join(process.cwd(), 'apps', 'storybook')

export default {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
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
  staticDirs: [join(basePath, 'static')],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: join(basePath, 'tsconfig.storybook.json'),
      propFilter: prop => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('@types/react')
        }
        return true
      },
      savePropValueAsString: true,
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
} satisfies StorybookConfig

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}
