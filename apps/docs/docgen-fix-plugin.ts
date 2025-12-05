import path from 'node:path'
import { glob } from 'glob'
import {
  ComponentDoc,
  withCustomConfig,
  ParserOptions,
} from 'react-docgen-typescript'
import { Options } from 'docusaurus-plugin-react-docgen-typescript'

/**
 * Custom docgen plugin that parses component files individually to prevent
 * generic type resolution conflicts that occur when parsing barrel exports.
 *
 * This plugin replaces docusaurus-plugin-react-docgen-typescript with a version
 * that correctly handles generic types like ValueBase<T> by parsing each component
 * file separately instead of all at once.
 */
export default function customDocgenPlugin(_context, options: Options) {
  const { src, parserOptions: userParserOptions } = options

  return {
    name: 'docusaurus-plugin-react-docgen-typescript',
    async loadContent() {
      const tsconfigPath = path.join(
        __dirname,
        '../../packages/components/tsconfig.lib.json',
      )

      const parserOptions: ParserOptions = {
        propFilter: prop => {
          if (prop.parent) {
            return !(
              prop.parent.fileName.includes('@types/react') ||
              prop.parent.fileName.includes('dom.d.ts')
            )
          }
          return true
        },
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldRemoveUndefinedFromOptional: true,
        ...userParserOptions,
      }

      const parser = withCustomConfig(tsconfigPath, parserOptions)

      // Get all component files
      const files = await glob(src, { absolute: true })

      // Parse each file individually to maintain proper type isolation
      const allComponentDocs: ComponentDoc[] = []
      for (const file of files) {
        try {
          const docs = parser.parse(file)
          allComponentDocs.push(...docs)
        } catch (error) {
          console.warn(
            `Failed to parse ${file}:`,
            error instanceof Error ? error.message : String(error),
          )
        }
      }

      return allComponentDocs
    },
    configureWebpack(config) {
      return {
        resolve: {
          alias: {
            '@docgen': path.join(
              config.resolve.alias['@generated'],
              'docusaurus-plugin-react-docgen-typescript',
              'default',
            ),
          },
        },
      }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      console.warn(
        'Using global data can potentially slow down your entire app. Use with care ❤️',
      )
      setGlobalData(content)
    },
  }
}
