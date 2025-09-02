import StyleDictionary from 'style-dictionary'
import { formats, transformGroups, transforms } from 'style-dictionary/enums'

const config = {
  source: ['packages/components/src/theme/tokens/**/*.json'],
  platforms: {
    jsObject: {
      transformGroups: transformGroups.js,
      buildPath: 'packages/components/src/theme/',
      files: [
        {
          destination: 'generated_tokens.js',
          format: formats.javascriptObject,
        },
      ],
    },
    css: {
      transforms: [transforms.colorHex],
      transformGroup: transformGroups.css,
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
