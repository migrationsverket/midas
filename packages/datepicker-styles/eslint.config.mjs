import baseConfig from '../../eslint.config.mjs'
import nx from '@nx/eslint-plugin'
import * as jsoncEslintParser from 'jsonc-eslint-parser'

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
          ignoredDependencies: [
            // datepicker-styles has an implicit dependency to theme
            '@midas-ds/theme',
            // the styles target react-datepicker's class names, not its code
            'react-datepicker',
          ],
          includeTransitiveDependencies: false,
          ignoredFiles: [
            '{projectRoot}/vite.config.mts',
            '{projectRoot}/vitest.config.mts',
            '{projectRoot}/vitest.config.visual.mts',
            '{projectRoot}/vitest.setup.mts',
            '{projectRoot}/vitest.setup.visual.mts',
            // story/spec fixture — the build only emits react-datepicker.css
            '{projectRoot}/src/lib/ReactDatepicker.tsx',
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
