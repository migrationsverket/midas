import { defineConfig } from 'eslint/config'
import nxEslintPlugin from '@nx/eslint-plugin'
import baseConfig from '../../eslint.config.mjs'
import midasPlugin from '../../tools/eslint/index.js'
import pkg from './package.json' with { type: 'json' }

export default defineConfig([
  ...nxEslintPlugin.configs['flat/react'],
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    ignores: ['!**/*'],
    plugins: {
      midas: midasPlugin,
    },
    rules: {
      'midas/handle-deprecated-comments': [
        1,
        {
          version: pkg.version,
        },
      ],
      'jsx-a11y/no-autofocus': 'off',
    },
  },
])
