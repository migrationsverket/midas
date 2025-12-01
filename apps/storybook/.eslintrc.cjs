module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../.eslintrc.json',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['!**/*', 'storybook-static'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'jsx-a11y/no-autofocus': 'off',
        '@nx/enforce-module-boundaries': 'off',
      },
    },
    {
      files: ['*.test.tsx', '*.spec.tsx'],
      rules: {
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/prefer-presence-queries': 'off',
        'testing-library/no-container': 'off',
      },
    },
  ],
}
