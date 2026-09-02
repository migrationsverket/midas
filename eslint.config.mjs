import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import js from '@eslint/js'
import nx from '@nx/eslint-plugin'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import stylisticEslintPlugin from '@stylistic/eslint-plugin'
import jsoncEslintParser from 'jsonc-eslint-parser'

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
})

export default [
  ...nx.configs['flat/base'],
  {
    plugins: {
      'jsx-a11y': eslintPluginJsxA11y,
      react: eslintPluginReact,
      '@stylistic': stylisticEslintPlugin,
    },
  },
  ...compat
    .config({
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': true,
        'mdx/language-mapper': {},
      },
    })
    .map(config => ({
      ...config,
      files: ['**/*.md', '**/*.mdx'],
      ignores: ['**/README.md'],
      rules: {
        ...config.rules,
      },
    })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'ignore',
        },
      ],
      'react/self-closing-comp': [
        'warn',
        {
          component: true,
          html: false,
        },
      ],
    },
  },
  ...nx.configs['flat/typescript'],
  ...compat
    .config({
      extends: ['plugin:jsx-a11y/recommended'],
    })
    .map(config => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        ...config.rules,
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-extra-semi': 'off',
        'prefer-const': 2,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    })),
  ...nx.configs['flat/javascript'],
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      '@stylistic/no-extra-semi': 'error',
      'no-extra-semi': 'off',
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
            'vite',
            '@vitejs/plugin-react',
            '@nx/vite',
            'vite-plugin-dts',
            'clsx',
            'rollup-preserve-directives',
            'vite-plugin-lib-inject-css',
          ],
          includeTransitiveDependencies: false,
          ignoredFiles: [],
          checkMissingDependencies: false,
          checkObsoleteDependencies: false,
          checkVersionMismatches: true,
        },
      ],
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
  {
    files: ['**/*.stories.[jt]sx'],
    rules: {
      '@nx/enforce-module-boundaries': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
]
