import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../../**/src/lib/**/*.docs.@(md|mdx)',
    '../../**/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'packages/ui/vite.config.ts',
      },
    },
  },
  staticDirs: ['./static'],
  typescript: {
    check: false,
    /**
     * For improved speed use react-docgen instead of react-docgen-typescript
     * Use react-docgen-typescript for verbose documentation of mantine components
     */
    reactDocgen: 'react-docgen-typescript', // use react-docgen instead of react-docgen-typescript to improve speed
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // Makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mantine packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!react-aria-components)/.test(
              prop.parent.fileName
            )
          : true,
    },
  },
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
