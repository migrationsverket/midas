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
        [
          ...(await getProjects(
            ctx,
            ({ name, projectType }) => !name.includes('e2e')
          ))
        ]
      ]
    }
  }
}

module.exports = getConfig()
