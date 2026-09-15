import baseConfig from '../../eslint.config.mjs'
import nx from '@nx/eslint-plugin'
import jsoncEslintParser from 'jsonc-eslint-parser'

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['{package,project}.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          buildTargets: ['build'],
          // datepicker-styles has an implicit dependency to theme
          ignoredDependencies: ['@midas-ds/theme'],
          includeTransitiveDependencies: false,
          ignoredFiles: ['{projectRoot}/vite.config.ts'],
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
