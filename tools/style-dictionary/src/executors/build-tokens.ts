import { PromiseExecutor } from '@nx/devkit'
import { BuildTokensExecutorSchema } from './schema'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'
import { Config } from 'style-dictionary/types'
import { dimensionToUnit } from './transforms/dimensionToUnit'
import { tailwindTheme } from './formats/tailwindTheme'
import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransform(dimensionToUnit)
StyleDictionary.registerFormat(tailwindTheme)

const runExecutor: PromiseExecutor<BuildTokensExecutorSchema> = async (
  config,
  context,
) => {
  const buildPath = context.target.options.buildPath
  const defaultConfig: Config = {
    usesDtcg: true,
    source: ['tokens/**/*.json'],
    platforms: {
      es6: {
        options: {
          flat: true,
        },
        transformGroups: transformGroups.js,
        transforms: [transforms.nameCamel, 'dimensionToUnit'],
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
        transforms: [transforms.nameCamel, 'dimensionToUnit'],
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
        transformGroup: transformGroups.css,
        transforms: ['dimensionToUnit'],
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
      tailwind: {
        transformGroup: transformGroups.css,
        transforms: ['dimensionToUnit'],
        options: {
          outputReferences: true,
        },
        buildPath: buildPath,
        files: [
          {
            destination: 'tailwind-theme.css',
            format: 'css/tailwind-theme',
          },
        ],
      },
    },
  }
  const buildConfig: Config = {
    ...defaultConfig,
    ...config,
  }
  const sd = new StyleDictionary(buildConfig, { verbosity: 'verbose' })
  const res = await sd.buildAllPlatforms()

  return {
    success: !!res,
  }
}

export default runExecutor
