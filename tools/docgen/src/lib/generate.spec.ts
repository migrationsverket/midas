import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import * as ts from 'typescript'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import {
  type DocgenOptions,
  generateApiDocs,
  readTsConfig,
} from './generate.js'
import type { ApiDoc } from './types.js'
import { watchProgram } from './watch.js'
import { writeApiDocs } from './write.js'

const workspaceRoot = resolve(import.meta.dirname, '../../../..')

const docgenOptions = (projectRoot: string): DocgenOptions => ({
  workspaceRoot,
  projectRoot,
  packageName: '@test/package',
  include: ['**/[A-Z]*.tsx'],
  exclude: ['**/*.stories.tsx', '**/*.spec.tsx', '**/*.test.tsx'],
})

const createProgram = (tsConfig: string, rootNames?: string[]) => {
  const { fileNames, options } = readTsConfig(tsConfig)
  return ts.createProgram(rootNames ?? fileNames, options)
}

describe('given the components package', () => {
  const projectRoot = join(workspaceRoot, 'packages/components')
  const tsConfig = join(projectRoot, 'tsconfig.lib.json')
  const options = {
    ...docgenOptions(projectRoot),
    include: ['src/**/[A-Z]*.tsx'],
  }
  let docs: Map<string, ApiDoc>

  beforeAll(() => {
    docs = generateApiDocs(createProgram(tsConfig), options)
  })

  it('documents components but not stories', () => {
    expect(docs.get('Button')?.sourceFile).toBe(
      'packages/components/src/button/Button.tsx',
    )
    expect(docs.has('Primary')).toBe(false)
    expect(docs.has('render')).toBe(false)
  })

  it('writes workspace-relative paths only', () => {
    expect(JSON.stringify([...docs.values()])).not.toContain(workspaceRoot)
  })

  it("doesn't drill into CSS properties", () => {
    const tables = [...docs.values()].flatMap(doc => Object.values(doc.types))
    expect(
      tables.some(table => table.some(m => m.name === 'backgroundColor')),
    ).toBe(false)
  })

  it('gives the same output every time', () => {
    expect([...generateApiDocs(createProgram(tsConfig), options)]).toEqual([
      ...docs,
    ])
  })

  it('gives the same output in watch mode', () => {
    let program: ts.Program | undefined
    // The first program is created synchronously
    const close = watchProgram(tsConfig, created => (program ??= created))
    close()
    if (!program) throw new Error('The watcher created no program')
    expect([...generateApiDocs(program, options)]).toEqual([...docs])
  })

  it('gives the same output for an incremental program, as after an edit in watch mode', () => {
    const { fileNames, options: compilerOptions } = readTsConfig(tsConfig)
    const host = ts.createCompilerHost(compilerOptions)
    const oldProgram = ts.createProgram(fileNames, compilerOptions, host)
    generateApiDocs(oldProgram, options)

    // An edit that doesn't change any docs
    const edited = join(projectRoot, 'src/button/Button.tsx')
    const getSourceFile = host.getSourceFile
    host.getSourceFile = (fileName, languageVersion, ...rest) => {
      const sourceFile = getSourceFile.call(
        host,
        fileName,
        languageVersion,
        ...rest,
      )
      return fileName === edited && sourceFile
        ? ts.createSourceFile(
            fileName,
            `${sourceFile.text}\n// edit\n`,
            languageVersion,
          )
        : sourceFile
    }

    const incremental = ts.createProgram(
      fileNames,
      compilerOptions,
      host,
      oldProgram,
    )
    expect(incremental.getSourceFile(edited)?.text).toContain('// edit')
    expect([...generateApiDocs(incremental, options)]).toEqual([...docs])
  })
})

describe('given components with the same display name', () => {
  let projectRoot: string

  beforeAll(() => {
    // Inside the workspace, so react's types resolve from its node_modules
    const cacheDir = join(workspaceRoot, 'node_modules/.cache')
    mkdirSync(cacheDir, { recursive: true })
    projectRoot = mkdtempSync(join(cacheDir, 'docgen-'))
    writeFileSync(
      join(projectRoot, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          jsx: 'react-jsx',
          module: 'esnext',
          moduleResolution: 'bundler',
          skipLibCheck: true,
          types: [],
        },
        include: ['*.tsx'],
      }),
    )
  })

  afterAll(() => rmSync(projectRoot, { recursive: true, force: true }))

  const write = (fileName: string, source: string) =>
    writeFileSync(join(projectRoot, fileName), source)

  const generate = () =>
    generateApiDocs(
      createProgram(join(projectRoot, 'tsconfig.json')),
      docgenOptions(projectRoot),
    )

  it('merges identical re-exports', () => {
    write(
      'Thing.tsx',
      'export const Thing = (props: { label: string }) => <b>{props.label}</b>\n',
    )
    write('Other.tsx', "export { Thing } from './Thing'\n")
    expect([...generate().keys()]).toEqual(['Thing'])
  })

  it('fails when they are different components', () => {
    write(
      'Other.tsx',
      'export const Thing = (props: { size: number }) => <i>{props.size}</i>\n',
    )
    expect(generate).toThrow(/Two different components are named Thing/)
  })
})

describe('writeApiDocs', () => {
  const outputPath = mkdtempSync(join(tmpdir(), 'docgen-out-'))
  afterAll(() => rmSync(outputPath, { recursive: true, force: true }))

  const doc = (displayName: string, description = ''): ApiDoc => ({
    schemaVersion: 1,
    package: '@test/package',
    displayName,
    description,
    sourceFile: `src/${displayName}.tsx`,
    props: {},
    types: {},
  })

  it('writes a file per doc and an index', () => {
    const result = writeApiDocs(
      outputPath,
      new Map([
        ['A', doc('A')],
        ['B', doc('B')],
      ]),
    )
    expect(result.written.sort()).toEqual(['A.json', 'B.json', 'index.json'])
    expect(
      JSON.parse(readFileSync(join(outputPath, 'index.json'), 'utf8')),
    ).toEqual([
      { displayName: 'A', sourceFile: 'src/A.tsx' },
      { displayName: 'B', sourceFile: 'src/B.tsx' },
    ])
  })

  it('only rewrites changed files and removes stale ones', () => {
    const result = writeApiDocs(
      outputPath,
      new Map([['A', doc('A', 'changed')]]),
    )
    expect(result).toEqual({
      written: ['A.json', 'index.json'],
      removed: ['B.json'],
    })
    expect(readdirSync(outputPath).sort()).toEqual(['A.json', 'index.json'])
  })

  it('rejects display names that are unsafe as file names', () => {
    expect(() =>
      writeApiDocs(outputPath, new Map([['../x', doc('../x')]])),
    ).toThrow()
  })
})
