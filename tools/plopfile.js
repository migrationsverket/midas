const { exec } = require('child_process')

module.exports = function (plop) {
  function parseNxOutput(stream) {
    let chunks = []

    return new Promise((resolve, reject) => {
      stream.on('data', chunk => {
        chunks = JSON.parse(chunk)
          .filter(value => !value.includes('playground') && value !== 'docs')
          .map(item => ({ name: item, value: item }))

        return Buffer.from(chunks)
      })
      stream.on('error', err => reject(err))
      stream.on('end', () => resolve(chunks))
    })
  }

  const getProjects = async () => {
    return await parseNxOutput(
      exec('nx show projects --json --exclude=tag:apps').stdout
    )
  }

  plop.setGenerator('docs', {
    description: 'Generate component documentation',
    prompts: [
      {
        type: 'list',
        name: 'componentName',
        message: 'Which component do you want to generate documentation for?',
        choices: getProjects
      }
    ],
    actions: data => {
      let { componentName } = data
      process.chdir(plop.getPlopfilePath())
      let actions = [
        {
          type: 'add',
          path: `apps/docs/docs/components/${componentName}.mdx`,
          templateFile: 'apps/docs/static/templates/component-docs.mdx.hbs',
          data: {
            componentName: '{{componentName}}',
            properName: plop.getHelper('pascalCase')(componentName)
          }
        }
      ]

      return [...actions]
    }
  })
}
