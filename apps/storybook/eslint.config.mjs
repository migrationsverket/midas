import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'
import nxEslintPlugin from '@nx/eslint-plugin'
import baseConfig from '../../eslint.config.mjs'

export default defineConfig([
  ...baseConfig,
  ...nxEslintPlugin.configs['flat/react'],
  ...storybook.configs['flat/recommended'],
  globalIgnores(['!.storybook', 'storybook-static']),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'jsx-a11y/no-autofocus': 'off',
      'storybook/no-uninstalled-addons': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
    },
  },
])
