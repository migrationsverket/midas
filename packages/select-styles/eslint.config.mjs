import baseConfig from '../../eslint.config.mjs'
import * as jsoncEslintParser from 'jsonc-eslint-parser'

export default [
  ...baseConfig,
  {
    files: ['{package,project}.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          buildTargets: ['build'],
          // select-styles has an implicit dependency to theme
          ignoredDependencies: ['@midas-ds/theme'],
          includeTransitiveDependencies: false,
          ignoredFiles: ['{projectRoot}/vite.config.mts'],
          checkMissingDependencies: true,
          checkObsoleteDependencies: true,
          checkVersionMismatches: true,
        },
      ],
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
]
