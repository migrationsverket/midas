const fs = require('fs')
const path = require('path')

module.exports = function (plop) {
  const getProjects = () => {
    const srcPath = path.join(__dirname, '../packages/components/src')
    return fs
      .readdirSync(srcPath)
      .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
      .map(folder => ({ name: folder, value: folder }))
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
          path: `../apps/docs/docs/components/${componentName}.mdx`,
          templateFile: '../apps/docs/static/templates/component-docs.mdx.hbs',
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
