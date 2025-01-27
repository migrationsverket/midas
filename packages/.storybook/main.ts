import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true
  },
  stories: [
    '../components/src/**/*.docs.@(md|mdx)',
    '../components/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/ui/vite.config.ts'
      }
    }
  },
  staticDirs: ['./static'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: false
      },
      // Filter out third-party props from node_modules except @mui packages.
      propFilter: prop =>
        prop.parent
          ? !/node_modules\/(?!react-aria-components)/.test(
              prop.parent.fileName
            )
          : true
    }
  }
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
