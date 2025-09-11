import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'

const buildPath = 'src/lib/style-dictionary-dist/'

export const config = {
  source: ['tokens/**/*.json'],
  platforms: {
    es6: {
      options: {
        flat: true,
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: buildPath,
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
        flat: true,
      },
      transformGroups: transformGroups.js,
      transforms: [transforms.nameCamel],
      buildPath: buildPath,
      files: [
        {
          destination: 'generated-object.js',
          format: formats.javascriptEs6,
        },
        {
          destination: 'generated-object.d.ts',
          format: 'typescript/es6-declarations',
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
