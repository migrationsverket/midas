async function getConfig() {
  const {
    default: {
      utils: { getProjects }
    }
  } = await import('@commitlint/config-nx-scopes')

  return {
    rules: {
      'scope-enum': async ctx => [
        2,
        'always',
        [...(await getProjects(ctx, ({ tags }) => !tags.includes('apps')))]
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
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
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
          'test'
        ]
      ]
    }
  }
}

module.exports = getConfig()
