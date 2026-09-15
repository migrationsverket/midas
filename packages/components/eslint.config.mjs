import { defineConfig } from 'eslint/config'
import nxEslintPlugin from '@nx/eslint-plugin'
import baseConfig from '../../eslint.config.mjs'
import midasPlugin from '../../tools/eslint/index.js'
import pkg from './package.json' with { type: 'json' }
import jsoncEslintParser from 'jsonc-eslint-parser'

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
  {
    files: ['{package,project}.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          buildTargets: ['build'],
          ignoredDependencies: [
            // bundled dependencies
            '@internationalized/string',
            '@react-aria/utils',
            '@react-spectrum/utils',
            '@react-stately/utils',
            '@react-types/shared',
            'clsx',
            'lucide-react',
          ],
          includeTransitiveDependencies: false,
          ignoredFiles: [
            '{projectRoot}/test-utils.ts',
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
])
