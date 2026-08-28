import { FlatCompat } from '@eslint/eslintrc'
import { defineConfig, globalIgnores } from 'eslint/config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import baseConfig from '../../eslint.config.mjs'
import nx from '@nx/eslint-plugin'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
})

export default defineConfig([
  ...baseConfig,
  ...nx.configs['flat/react'],
  ...compat.extends('plugin:@docusaurus/recommended'),
  ...compat.extends('plugin:mdx/recommended'),
  globalIgnores(['.docusaurus/**']),
  {
    files: ['**/*.md', '**/*.mdx'],
    settings: {
      'mdx/code-blocks': false,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'jsx-a11y/no-autofocus': 'off',
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allowCircularSelfDependency: true,
        },
      ],
    },
  },
])
