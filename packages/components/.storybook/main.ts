import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    './examples/*.stories.@(md|mdx|tsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/experimental-addon-test',
    // '@chromatic-com/storybook', <-- add this if we enable chromatic
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/components/vite.config.ts',
      },
    },
  },

  staticDirs: ['./static'],

  docs: {},
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
