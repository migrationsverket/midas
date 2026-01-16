import { existsSync, readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'

const PACKAGE_NAME = '@midas-ds'

const getDirectoryContents = (path: string) =>
  readdirSync(resolve(__dirname, path))

const fileExists = (fileName: string) =>
  existsSync(fileName) && statSync(fileName).isFile()

export const createAliases = (path: string) =>
  getDirectoryContents(path)
    .filter(fileName => !fileExists(resolve(path, fileName)))
    .reduce((aliases, fileName) => {
      const src = resolve(path, fileName, 'src')
      const content = resolve(src, '*')
      const entryPoint = resolve(src, 'index.ts')

      if (fileExists(entryPoint)) {
        aliases[`${PACKAGE_NAME}/${fileName}`] = entryPoint
      }

      aliases[`${PACKAGE_NAME}/${fileName}/*`] = content

      return aliases
    }, {})
