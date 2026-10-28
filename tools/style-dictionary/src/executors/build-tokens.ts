import { PromiseExecutor } from '@nx/devkit'
import { resolve } from 'node:path'
import { BuildTokensExecutorSchema } from './schema.js'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'
import { Config } from 'style-dictionary/types'
import { dimensionToUnit } from './transforms/dimensionToUnit.js'
import { tailwindTheme } from './formats/tailwindTheme.js'
import StyleDictionary from 'style-dictionary'

StyleDictionary.registerTransform(dimensionToUnit)
StyleDictionary.registerFormat(tailwindTheme)

const runExecutor: PromiseExecutor<BuildTokensExecutorSchema> = async (
  options,
  context,
) => {
  // Nx passes the paths relative to the workspace root, and Style Dictionary
  // resolves them from the cwd: started from a project folder, it read no
  // tokens and wrote empty files into that folder
  const fromRoot = (path: string) => resolve(context.root, path)
  const buildPath = `${fromRoot(options.buildPath)}/`
  const config: Config = {
    usesDtcg: true,
    source: options.source.map(fromRoot),
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
        transforms: [
          transforms.attributeCti,
          transforms.nameKebab,
          transforms.timeSeconds,
          transforms.htmlIcon,
          'dimensionToUnit',
          transforms.colorCss,
          transforms.assetUrl,
          transforms.fontFamilyCss,
          transforms.cubicBezierCss,
          transforms.strokeStyleCssShorthand,
          transforms.borderCssShorthand,
          transforms.typographyCssShorthand,
          transforms.transitionCssShorthand,
          transforms.shadowCssShorthand,
        ],
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
        transforms: [
          transforms.attributeCti,
          transforms.nameKebab,
          transforms.timeSeconds,
          transforms.htmlIcon,
          'dimensionToUnit',
          transforms.colorCss,
          transforms.assetUrl,
          transforms.fontFamilyCss,
          transforms.cubicBezierCss,
          transforms.strokeStyleCssShorthand,
          transforms.borderCssShorthand,
          transforms.typographyCssShorthand,
          transforms.transitionCssShorthand,
          transforms.shadowCssShorthand,
        ],
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
  const sd = new StyleDictionary(config, { verbosity: 'verbose' })
  const res = await sd.buildAllPlatforms()

  return {
    success: !!res,
  }
}

export default runExecutor
