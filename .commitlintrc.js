const fs = require('fs')
const path = require('path')

async function getConfig() {
  const {
    default: {
      utils: { getProjects },
    },
  } = await import('@commitlint/config-nx-scopes')

  const componentsPath = path.join(__dirname, 'packages', 'components', 'src')
  const componentFolders = fs
    .readdirSync(componentsPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  return {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'scope-enum': async ctx => [
        2,
        'always',
        [
          ...(await getProjects(ctx)),
          ...componentFolders,
          'release',
          'project',
          'deps',
        ],
      ],
      'body-leading-blank': [1, 'always'],
      'body-max-line-length': [2, 'always', 100],
      'footer-leading-blank': [1, 'always'],
      'footer-max-line-length': [2, 'always', 100],
      'header-max-length': [2, 'always', 100],
      'header-trim': [2, 'always'],
      'subject-case': [
        2,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
      ],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
        ],
      ],
    },
  }
}

module.exports = getConfig()
