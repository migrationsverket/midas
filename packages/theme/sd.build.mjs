import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'

const buildPath = 'src/lib/style-dictionary-dist/'

export const config = {
  source: ['tokens/**/*.json'],
  platforms: {
    es6: {
      options: {
        flat: false,
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: buildPath,
      files: [
        {
          destination: 'tokens.js',
          format: formats.javascriptEs6,
        },
        {
          destination: 'tokens.d.ts',
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
      buildPath: buildPath,
      files: [
        {
          destination: 'object.js',
          format: formats.javascriptEsm,
        },
        {
          destination: 'object.d.ts',
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
      buildPath: buildPath,
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
