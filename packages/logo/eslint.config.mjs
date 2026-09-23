import baseConfig from '../../eslint.config.mjs'
import jsoncEslintParser from 'jsonc-eslint-parser'

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
            // logo has an implicit dependency to theme (CSS custom properties only)
            '@midas-ds/theme',
            // bundled dependencies
            'clsx',
            // peer dependency required for JSX, not imported directly
            'react-dom',
          ],
          includeTransitiveDependencies: false,
          ignoredFiles: [
            '{projectRoot}/vite.config.ts',
            '{projectRoot}/vitest.config.ts',
            '{projectRoot}/vitest.setup.ts',
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
