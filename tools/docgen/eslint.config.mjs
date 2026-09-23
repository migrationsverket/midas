import baseConfig from '../../eslint.config.mjs'
import jsoncEslintParser from 'jsonc-eslint-parser'

export default [
  ...baseConfig,
  {
    files: ['{package,project}.json'],
    rules: {
      '@nx/dependency-checks': ['error', {}],
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
]
