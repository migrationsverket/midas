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
          ignoredDependencies: [
            // table-styles has an implicit dependency to theme
            '@midas-ds/theme',
            // bundled dependencies
            'lucide-react',
          ],
          includeTransitiveDependencies: false,
          ignoredFiles: [
            '{projectRoot}/vite.config.mts',
            '{projectRoot}/vitest.config.mts',
            '{projectRoot}/vitest.setup.mts',
          ],
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
