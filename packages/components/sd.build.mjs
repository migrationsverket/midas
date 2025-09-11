import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'

export const config = {
  source: ['src/theme/tokens/**/*.json'],
  platforms: {
    es6: {
      options: {
        flat: false,
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: 'src/theme/',
      files: [
        {
          destination: 'generated-tokens.js',
          format: formats.javascriptEs6,
        },
        {
          destination: 'generated-tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    object: {
      options: {
        flat: false,
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: 'src/theme/',
      files: [
        {
          destination: 'generated-object.js',
          format: formats.javascriptEsm,
        },
        {
          destination: 'generated-object.d.ts',
          format: 'typescript/module-declarations',
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
      buildPath: 'src/theme/',
      files: [
        {
          destination: 'variables.css',
          format: formats.cssVariables,
        }
      ],
    },
  },
}

const sd = new StyleDictionary(config, { verbosity: 'verbose' })
await sd.buildAllPlatforms()
