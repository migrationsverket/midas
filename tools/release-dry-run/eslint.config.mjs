import baseConfig from '../../eslint.config.mjs'
import * as jsoncEslintParser from 'jsonc-eslint-parser'

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/rollup.config.cjs',
            '{projectRoot}/vitest.config.mts',
          ],
        },
      ],
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
  {
    files: ['./package.json'],
    rules: {
      '@nx/nx-plugin-checks': 'error',
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
]
