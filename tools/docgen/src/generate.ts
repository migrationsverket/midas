import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { glob } from 'glob'
import ts from 'typescript'
import { withCustomConfig } from 'react-docgen-typescript'
// react-docgen-typescript is CommonJS with no runtime bindings for these —
// they're TypeScript-only, so must be type-only imports (Node's type
// stripping erases them entirely rather than trying to resolve them as
// named exports of the CJS module, which fails).
import type {
  ComponentDoc,
  PropItem,
  ParserOptions,
} from 'react-docgen-typescript'

// Ported as-is from apps/docs/docgen-fix-plugin.ts, which this replaces as
// the actual place the (expensive) extraction runs — see that file's git
// history for the reasoning behind each piece. Shared here so
// `nx run docgen:generate` is a single, cacheable Nx target both
// apps/docs and apps/storybook depend on, instead of each app running its
// own copy of this work.

export interface TypeMember {
  name: string
  type: string
  description: string
  required: boolean
  members?: TypeMember[]
}

const SKIP_TYPE_NAMES = new Set([
  'string',
  'number',
  'boolean',
  'undefined',
  'null',
  'void',
  'any',
  'unknown',
  'never',
  'symbol',
  'bigint',
  'true',
  'false',
  'object',
  'ReactNode',
  'ReactElement',
  'CSSProperties',
  'React.ReactNode',
  'React.ReactElement',
  'React.CSSProperties',
  'JSX.Element',
  'Element',
])

function isSingleValueEnum(prop: PropItem): boolean {
  return (
    prop.type.name === 'enum' &&
    Array.isArray(prop.type.value) &&
    prop.type.value.length === 1 &&
    prop.type.value[0].value === prop.type.raw
  )
}

function isComplexType(prop: PropItem): boolean {
  const typeName = prop.type.name
  // Single-value "enums" that are really complex types (e.g. InfoPopoverProps)
  // are still candidates for enrichment
  if (isSingleValueEnum(prop)) return true
  // Multi-value enums/unions already have proper rendering
  if (prop.type.value) return false
  // Known simple types
  if (SKIP_TYPE_NAMES.has(typeName)) return false
  // Function signatures like "(event: PressEvent) => void"
  if (typeName.includes('=>')) return false
  // enum type name (union types already handled by docgen)
  if (typeName === 'enum') return false
  return true
}

function stripUndefined(type: ts.Type): ts.Type {
  if (type.isUnion()) {
    const filtered = type.types.filter(
      t => !(t.flags & ts.TypeFlags.Undefined),
    )
    if (filtered.length === 1) return filtered[0]
  }
  return type
}

const MAX_DEPTH = 2

/** Members from React, DOM, or TS built-ins — filter from display */
function isBuiltInDeclaration(symbol: ts.Symbol): boolean {
  const declarations = symbol.getDeclarations()
  if (!declarations?.length) return false
  const fileName = declarations[0].getSourceFile().fileName
  return (
    fileName.includes('@types/react') ||
    fileName.includes('dom.d.ts') ||
    fileName.includes('/typescript/lib/')
  )
}

/** Check if a type is worth recursing into — strict to avoid blowup */
function shouldRecurse(type: ts.Type, checker: ts.TypeChecker): boolean {
  const resolved = stripUndefined(type)
  // Don't recurse into function/callable types
  if (resolved.getCallSignatures().length > 0) return false
  // Don't recurse into primitive-like types
  const typeStr = checker.typeToString(resolved)
  if (SKIP_TYPE_NAMES.has(typeStr)) return false
  if (typeStr.includes('=>')) return false
  // Don't recurse into array types (string[], T[], readonly X[], etc.)
  if (typeStr.endsWith('[]')) return false
  // Only recurse if the type has a reasonable number of non-builtin members
  const props = resolved.getApparentProperties()
  const nonBuiltIn = props.filter(p => !isBuiltInDeclaration(p))
  if (nonBuiltIn.length === 0 || nonBuiltIn.length > 20) return false
  return true
}

function resolveMembers(
  checker: ts.TypeChecker,
  type: ts.Type,
  location: ts.Node,
  depth = 0,
  visited: Set<string> = new Set(),
): TypeMember[] {
  const members: TypeMember[] = []
  const resolved = stripUndefined(type)

  // Don't resolve members of function types (would yield bind, call, apply, etc.)
  if (resolved.getCallSignatures().length > 0) return members

  const typeId = checker.typeToString(resolved)
  if (visited.has(typeId)) return members
  visited.add(typeId)

  const props = resolved.getApparentProperties()

  for (const prop of props) {
    if (isBuiltInDeclaration(prop)) continue

    const propType = checker.getTypeOfSymbolAtLocation(prop, location)
    const typeString = checker.typeToString(propType)
    const description = ts.displayPartsToString(
      prop.getDocumentationComment(checker),
    )
    const required = !(prop.flags & ts.SymbolFlags.Optional)

    // Recursively resolve sub-members only for interesting types
    let subMembers: TypeMember[] | undefined
    if (depth < MAX_DEPTH && shouldRecurse(propType, checker)) {
      const sub = resolveMembers(
        checker,
        propType,
        location,
        depth + 1,
        new Set(visited),
      )
      if (sub.length > 0) subMembers = sub
    } else if (depth < MAX_DEPTH && propType.getCallSignatures().length > 0) {
      // For function types, resolve parameter types as sub-members
      const sig = propType.getCallSignatures()[0]
      const paramMembers: TypeMember[] = []
      for (const param of sig.getParameters()) {
        const paramType = checker.getTypeOfSymbolAtLocation(param, location)
        const paramTypeStr = checker.typeToString(paramType)
        const paramDesc = ts.displayPartsToString(
          param.getDocumentationComment(checker),
        )
        const paramRequired = !(param.flags & ts.SymbolFlags.Optional)

        let paramSubMembers: TypeMember[] | undefined
        if (depth + 1 < MAX_DEPTH && shouldRecurse(paramType, checker)) {
          const sub = resolveMembers(
            checker,
            paramType,
            location,
            depth + 2,
            new Set(visited),
          )
          if (sub.length > 0) paramSubMembers = sub
        }

        paramMembers.push({
          name: param.getName(),
          type: paramTypeStr,
          description: paramDesc,
          required: paramRequired,
          ...(paramSubMembers ? { members: paramSubMembers } : {}),
        })
      }
      if (paramMembers.length > 0) subMembers = paramMembers
    }

    members.push({
      name: prop.getName(),
      type: typeString,
      description,
      required,
      ...(subMembers ? { members: subMembers } : {}),
    })
  }

  return members
}

const LITERAL_FLAGS =
  ts.TypeFlags.StringLiteral |
  ts.TypeFlags.NumberLiteral |
  ts.TypeFlags.BooleanLiteral

/** Resolve members for each non-literal type in a union (for enum value drill-down) */
function resolveUnionValueMembers(
  checker: ts.TypeChecker,
  type: ts.Type,
  location: ts.Node,
  cache: Map<string, TypeMember[]>,
): Map<string, TypeMember[]> {
  const result = new Map<string, TypeMember[]>()
  const resolved = stripUndefined(type)
  if (!resolved.isUnion()) return result

  for (const unionMember of resolved.types) {
    // Skip undefined and string/number/boolean literals
    if (unionMember.flags & (ts.TypeFlags.Undefined | LITERAL_FLAGS)) continue
    const name = checker.typeToString(unionMember)
    if (cache.has(name)) {
      const cached = cache.get(name)!
      if (cached.length > 0) result.set(name, cached)
      continue
    }
    const members = resolveMembers(checker, unionMember, location, 1)
    cache.set(name, members)
    if (members.length > 0) {
      result.set(name, members)
    }
  }

  return result
}

function enrichComplexTypes(
  allComponentDocs: ComponentDoc[],
  tsconfigPath: string,
) {
  const filePaths = [...new Set(allComponentDocs.map(doc => doc.filePath))]

  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile)
  const parsedConfig = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(tsconfigPath),
  )

  const program = ts.createProgram(filePaths, parsedConfig.options)
  const checker = program.getTypeChecker()
  const cache = new Map<string, TypeMember[]>()

  for (const doc of allComponentDocs) {
    const sourceFile = program.getSourceFile(doc.filePath)
    if (!sourceFile) continue

    const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
    if (!moduleSymbol) continue

    const exports = checker.getExportsOfModule(moduleSymbol)
    const componentSymbol = exports.find(e => e.getName() === doc.displayName)
    if (!componentSymbol) continue

    const componentType = checker.getTypeOfSymbolAtLocation(
      componentSymbol,
      sourceFile,
    )
    const callSignatures = componentType.getCallSignatures()
    if (callSignatures.length === 0) continue

    const propsParam = callSignatures[0].getParameters()[0]
    if (!propsParam) continue

    const propsType = checker.getTypeOfSymbolAtLocation(
      propsParam,
      sourceFile,
    )

    for (const [propName, propItem] of Object.entries(doc.props)) {
      const propSymbol = propsType.getProperty(propName)
      if (!propSymbol) continue

      const propType = checker.getTypeOfSymbolAtLocation(
        propSymbol,
        sourceFile,
      )

      // Enrich complex types with members
      if (isComplexType(propItem)) {
        const typeId = checker.typeToString(stripUndefined(propType))
        let members: TypeMember[]
        if (cache.has(typeId)) {
          members = cache.get(typeId)!
        } else {
          members = resolveMembers(checker, propType, sourceFile)
          cache.set(typeId, members)
        }

        if (members.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ;(propItem.type as any).members = members
          // Fix single-value "enums" that are really complex types:
          // restore the real type name so the UI renders them correctly
          if (isSingleValueEnum(propItem)) {
            propItem.type.name = propItem.type.raw as string
            delete propItem.type.value
          }
        }
      }

      // Enrich enum/union values with drill-down members
      if (
        propItem.type.name === 'enum' &&
        Array.isArray(propItem.type.value) &&
        propItem.type.value.length > 1
      ) {
        const valueMembers = resolveUnionValueMembers(
          checker,
          propType,
          sourceFile,
          cache,
        )
        for (const val of propItem.type.value) {
          const members = valueMembers.get(val.value)
          if (members) {
            val.members = members
          }
        }
      }
    }
  }
}

const workspaceRoot = path.resolve(import.meta.dirname, '../../..')
const packagesDir = path.join(workspaceRoot, 'packages')

// Same three package globs, and the same *effective* parserOptions,
// apps/docs/docgen-fix-plugin.ts used — shouldExtractLiteralValuesFromEnum
// was true by default there but always overridden to false by the caller
// in docusaurus.config.ts, so false is what's actually been in effect.
const SRC_GLOBS = [
  `${packagesDir}/components/src/**/[A-Z]*.tsx`,
  `${packagesDir}/table-styles/src/**/[A-Z]*.tsx`,
  `${packagesDir}/layout/src/**/[A-Z]*.tsx`,
]

const PARSER_OPTIONS: ParserOptions = {
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
  shouldExtractLiteralValuesFromEnum: false,
  shouldRemoveUndefinedFromOptional: true,
  shouldExtractValuesFromUnion: true,
}

async function main() {
  const tsconfigPath = path.join(
    packagesDir,
    'components/tsconfig.lib.json',
  )

  const parser = withCustomConfig(tsconfigPath, PARSER_OPTIONS)

  const files = await glob(SRC_GLOBS, { absolute: true })

  // Parse each file individually to maintain proper type isolation (see
  // module doc comment — prevents generic type resolution conflicts).
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

  try {
    enrichComplexTypes(allComponentDocs, tsconfigPath)
  } catch (error) {
    console.warn(
      'Failed to enrich complex types:',
      error instanceof Error ? error.message : String(error),
    )
  }

  const outDir = path.join(workspaceRoot, 'dist/tools/docgen')
  await mkdir(outDir, { recursive: true })
  const outFile = path.join(outDir, 'component-docs.json')
  await writeFile(outFile, JSON.stringify(allComponentDocs), 'utf-8')

  console.log(
    `docgen: wrote ${allComponentDocs.length} component docs to ${outFile}`,
  )
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
