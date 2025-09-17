import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'


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
          destination: 'variables.js',
          format: formats.javascriptEs6,
        },
        {
          destination: 'variables.d.ts',
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
          destination: 'token-dictionary.js',
          format: formats.javascriptEsm,
        },
        {
          destination: 'token-dictionary.d.ts',
          format: formats.typescriptModuleDeclarations,
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
