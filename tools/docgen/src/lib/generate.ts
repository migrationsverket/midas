import { createHash } from 'node:crypto'
import { relative, resolve } from 'node:path'
import { globSync } from 'glob'
import * as ts from 'typescript'
import {
  type ComponentDoc,
  type ParserOptions,
  type PropItem,
  withCompilerOptions,
} from 'react-docgen-typescript'
import { enrichComplexTypes, type InlineTypeMember } from './enrich.js'
import { compareStrings, normalizeUnion } from './normalize.js'
import {
  type ApiDoc,
  type ApiProp,
  type EnumValue,
  SCHEMA_VERSION,
  type TypeMember,
} from './types.js'

export interface DocgenOptions {
  /** Absolute path of the workspace root, used to make paths relative */
  workspaceRoot: string
  /** Absolute path of the project root */
  projectRoot: string
  /** npm package name written to each doc */
  packageName: string
  /** Globs relative to projectRoot */
  include: string[]
  /** Globs relative to projectRoot */
  exclude: string[]
}

const parserOptions: ParserOptions = {
  propFilter: prop =>
    prop.parent
      ? !(
          prop.parent.fileName.includes('@types/react') ||
          prop.parent.fileName.includes('dom.d.ts')
        )
      : true,
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: false,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: true,
  shouldSortUnions: true,
}

export function readTsConfig(tsConfigPath: string): ts.ParsedCommandLine {
  const { config, error } = ts.readConfigFile(tsConfigPath, ts.sys.readFile)
  if (error) {
    throw new Error(ts.flattenDiagnosticMessageText(error.messageText, '\n'))
  }
  return ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    resolve(tsConfigPath, '..'),
    undefined,
    tsConfigPath,
  )
}

/** Component source files to document, sorted for stable output */
export function findComponentFiles({
  projectRoot,
  include,
  exclude,
}: Pick<DocgenOptions, 'projectRoot' | 'include' | 'exclude'>): string[] {
  return globSync(include, {
    cwd: projectRoot,
    absolute: true,
    ignore: exclude,
    posix: true,
  }).sort(compareStrings)
}

/**
 * Generates the API docs for all component files, using one shared program.
 * Returns docs keyed by display name, in display name order.
 */
export function generateApiDocs(
  program: ts.Program,
  options: DocgenOptions,
  files = findComponentFiles(options),
): Map<string, ApiDoc> {
  const parser = withCompilerOptions(
    program.getCompilerOptions(),
    parserOptions,
  )

  // Parse file by file: react-docgen-typescript resolves generics
  // (e.g. ValueBase<T>) incorrectly when given barrel files. Reusing the
  // program keeps that isolation without re-creating it for each file.
  const componentDocs: ComponentDoc[] = []
  for (const file of files) {
    if (!program.getSourceFile(file)) {
      throw new Error(
        `${relative(options.workspaceRoot, file)} isn't part of the TypeScript program. Is it included in the tsconfig?`,
      )
    }
    componentDocs.push(
      ...parser.parseWithProgramProvider([file], () => program),
    )
  }

  enrichComplexTypes(componentDocs, program)

  const docs = new Map<string, ApiDoc>()
  for (const componentDoc of componentDocs) {
    const doc = toApiDoc(componentDoc, options)
    const existing = docs.get(doc.displayName)

    if (existing) {
      // The same component re-exported from several files is fine
      if (sameDoc(existing, doc)) continue
      throw new Error(
        `Two different components are named ${doc.displayName}: ${existing.sourceFile} and ${doc.sourceFile}. ` +
          'Display names must be unique within a package.',
      )
    }
    docs.set(doc.displayName, doc)
  }

  return new Map([...docs].sort(([a], [b]) => compareStrings(a, b)))
}

function sameDoc(a: ApiDoc, b: ApiDoc) {
  return (
    JSON.stringify({ ...a, sourceFile: '' }) ===
    JSON.stringify({ ...b, sourceFile: '' })
  )
}

function toApiDoc(doc: ComponentDoc, options: DocgenOptions): ApiDoc {
  const types: Record<string, TypeMember[]> = {}
  const toPath = (fileName: string) =>
    relative(options.workspaceRoot, fileName).replace(/\\/g, '/')

  // Replaces inline member arrays with references into `types`, bottom-up, so
  // identical tables (and tables nested in them) are stored once.
  const addTable = (members: InlineTypeMember[]): string => {
    const table: TypeMember[] = members.map(member => {
      const { members: nested, ...rest } = member
      return {
        ...rest,
        type: normalizeUnion(member.type),
        ...(nested ? { membersRef: addTable(nested) } : {}),
      }
    })
    const json = JSON.stringify(table)
    const ref = createHash('sha1').update(json).digest('hex').slice(0, 12)
    types[ref] = table
    return ref
  }

  const props: Record<string, ApiProp> = {}
  for (const [name, prop] of Object.entries(doc.props)) {
    const { type, parent, declarations, ...rest } = prop as PropItem & {
      type: PropItem['type'] & { members?: InlineTypeMember[] }
    }
    const optional = !prop.required

    // A single-value "enum" (e.g. `Element`) is really a plain type. Complex
    // ones are already converted while adding their members.
    if (
      type.name === 'enum' &&
      Array.isArray(type.value) &&
      type.value.length === 1 &&
      type.value[0].value === type.raw
    ) {
      type.name = type.raw
      delete type.value
    }

    const value: EnumValue[] | undefined = Array.isArray(type.value)
      ? type.value
          .map(
            ({
              members,
              ...entry
            }: EnumValue & { members?: InlineTypeMember[] }) => ({
              ...entry,
              ...(members ? { membersRef: addTable(members) } : {}),
            }),
          )
          .sort((a: EnumValue, b: EnumValue) =>
            compareStrings(a.value, b.value),
          )
      : undefined

    props[name] = {
      ...rest,
      ...(parent
        ? { parent: { ...parent, fileName: toPath(parent.fileName) } }
        : {}),
      ...(declarations
        ? {
            declarations: declarations.map(declaration => ({
              ...declaration,
              fileName: toPath(declaration.fileName),
            })),
          }
        : {}),
      type: {
        name: normalizeUnion(type.name, optional),
        ...(type.raw !== undefined
          ? { raw: normalizeUnion(type.raw, optional) }
          : {}),
        ...(value ? { value } : {}),
        ...(type.members ? { membersRef: addTable(type.members) } : {}),
      },
    }
  }

  return {
    schemaVersion: SCHEMA_VERSION,
    package: options.packageName,
    displayName: doc.displayName,
    description: doc.description,
    sourceFile: toPath(doc.filePath),
    props,
    types: Object.fromEntries(
      Object.entries(types).sort(([a], [b]) => compareStrings(a, b)),
    ),
  }
}
