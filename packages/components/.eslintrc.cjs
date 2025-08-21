const { version } = require('./package.json')

module.exports = {
  extends: [
    'plugin:@nx/react',
    '../../.eslintrc.json',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['!**/*', 'storybook-static'],
  plugins: ['midas'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'midas/handle-deprecated-comments': [
          1,
          {
            version,
          },
        ],
        'jsx-a11y/no-autofocus': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
}
