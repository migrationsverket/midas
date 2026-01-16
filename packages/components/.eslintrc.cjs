const { version } = require('./package.json')

module.exports = {
  extends: ['plugin:@nx/react', '../../.eslintrc.json'],
  ignorePatterns: ['!**/*'],
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
      files: ['*.stories.*'],
      rules: {
        '@nx/enforce-module-boundaries': 'off',
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
