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
  ],
}
