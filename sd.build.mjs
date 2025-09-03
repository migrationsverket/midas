import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'

export const config = {
  source: ['packages/components/src/theme/tokens/**/*.json'],
  platforms: {
    object: {
      options: {
        flat: false
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: 'packages/components/src/theme/',
      files: [
        {
          destination: 'generated-tokens.js',
          format: formats.javascriptModule,
        },
      ],
    },
    css: {
      transforms: [],
      transformGroup: transformGroups.css,
      options: {
        outputReferences: true,
      },
      prefix: 'midas',
      buildPath: 'packages/components/src/theme/',
      files: [
        {
          destination: 'variables.css',
          format: formats.cssVariables,
        },
      ],
    },
  },
}

const sd = new StyleDictionary(config, { verbosity: 'verbose' })
await sd.buildAllPlatforms()
