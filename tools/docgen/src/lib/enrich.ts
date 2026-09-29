import * as ts from 'typescript'
import type { ComponentDoc, PropItem } from 'react-docgen-typescript'

/**
 * Adds drill-down members to props with complex types, e.g. the fields of an
 * object type or the parameters of a callback. Ported from the docs app's
 * former docgen-fix-plugin.
 */

export interface InlineTypeMember {
  name: string
  type: string
  description: string
  required: boolean
  members?: InlineTypeMember[]
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

const MAX_DEPTH = 2

const LITERAL_FLAGS =
  ts.TypeFlags.StringLiteral |
  ts.TypeFlags.NumberLiteral |
  ts.TypeFlags.BooleanLiteral

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
    const filtered = type.types.filter(t => !(t.flags & ts.TypeFlags.Undefined))
    if (filtered.length === 1) return filtered[0]
  }
  return type
}

/** Members from React, DOM, CSS or TS built-ins aren't worth drilling into */
function isBuiltInDeclaration(symbol: ts.Symbol): boolean {
  const declarations = symbol.getDeclarations()
  if (!declarations?.length) return false
  const fileName = declarations[0].getSourceFile().fileName
  return (
    fileName.includes('@types/react') ||
    fileName.includes('/csstype/') ||
    fileName.includes('dom.d.ts') ||
    fileName.includes('/typescript/lib/')
  )
}

/**
 * Symbol-keyed members (e.g. `[PointerEventsCheck]`, which a test library adds
 * to `Element`) and `#private` fields aren't usable API. TypeScript names
 * symbol keys `__@name@<id>` with an id that changes between runs.
 */
function isInternalMember(symbol: ts.Symbol): boolean {
  const name = symbol.getName()
  return name.startsWith('__@') || name.startsWith('#')
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
  const nonBuiltIn = props.filter(
    p => !isBuiltInDeclaration(p) && !isInternalMember(p),
  )
  if (nonBuiltIn.length === 0 || nonBuiltIn.length > 20) return false
  return true
}

function resolveMembers(
  checker: ts.TypeChecker,
  type: ts.Type,
  location: ts.Node,
  depth = 0,
  visited: Set<ts.Type> = new Set(),
): InlineTypeMember[] {
  const members: InlineTypeMember[] = []
  const resolved = stripUndefined(type)

  // Don't resolve members of function types (would yield bind, call, apply, etc.)
  if (resolved.getCallSignatures().length > 0) return members

  // By identity: different types can print the same, e.g. generic `T`s
  if (visited.has(resolved)) return members
  visited.add(resolved)

  for (const prop of resolved.getApparentProperties()) {
    if (isBuiltInDeclaration(prop) || isInternalMember(prop)) continue

    const propType = checker.getTypeOfSymbolAtLocation(prop, location)
    const typeString = checker.typeToString(propType)
    const description = ts.displayPartsToString(
      prop.getDocumentationComment(checker),
    )
    const required = !(prop.flags & ts.SymbolFlags.Optional)

    // Recursively resolve sub-members only for interesting types
    let subMembers: InlineTypeMember[] | undefined
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
      const paramMembers: InlineTypeMember[] = []
      for (const param of sig.getParameters()) {
        const paramType = checker.getTypeOfSymbolAtLocation(param, location)
        const paramTypeStr = checker.typeToString(paramType)
        const paramDesc = ts.displayPartsToString(
          param.getDocumentationComment(checker),
        )
        const paramRequired = !(param.flags & ts.SymbolFlags.Optional)

        let paramSubMembers: InlineTypeMember[] | undefined
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

/**
 * Members are cached by type identity, not by the printed type: different
 * types can print the same (e.g. each component's generic `T`), and keying by
 * name would give one component another's members, depending on which was
 * processed first. They're also cached per depth, as a table resolved at
 * depth 1 is shallower than one resolved at depth 0.
 */
type MembersCache = Map<number, Map<ts.Type, InlineTypeMember[]>>

function cachedMembers(
  cache: MembersCache,
  checker: ts.TypeChecker,
  type: ts.Type,
  location: ts.Node,
  depth: number,
): InlineTypeMember[] {
  let byType = cache.get(depth)
  if (!byType) cache.set(depth, (byType = new Map()))
  const key = stripUndefined(type)
  let members = byType.get(key)
  if (!members) {
    members = resolveMembers(checker, type, location, depth)
    byType.set(key, members)
  }
  return members
}

/** Resolve members for each non-literal type in a union (for enum value drill-down) */
function resolveUnionValueMembers(
  checker: ts.TypeChecker,
  type: ts.Type,
  location: ts.Node,
  cache: MembersCache,
): Map<string, InlineTypeMember[]> {
  const result = new Map<string, InlineTypeMember[]>()
  const resolved = stripUndefined(type)
  if (!resolved.isUnion()) return result

  for (const unionMember of resolved.types) {
    // Skip undefined and string/number/boolean literals
    if (unionMember.flags & (ts.TypeFlags.Undefined | LITERAL_FLAGS)) continue
    const members = cachedMembers(cache, checker, unionMember, location, 1)
    if (members.length > 0) {
      result.set(checker.typeToString(unionMember), members)
    }
  }

  return result
}

export function enrichComplexTypes(docs: ComponentDoc[], program: ts.Program) {
  const checker = program.getTypeChecker()
  const cache: MembersCache = new Map()

  for (const doc of docs) {
    const sourceFile = program.getSourceFile(doc.filePath)
    if (!sourceFile) continue

    const moduleSymbol = checker.getSymbolAtLocation(sourceFile)
    if (!moduleSymbol) continue

    const componentSymbol = checker
      .getExportsOfModule(moduleSymbol)
      .find(e => e.getName() === doc.displayName)
    if (!componentSymbol) continue

    const componentType = checker.getTypeOfSymbolAtLocation(
      componentSymbol,
      sourceFile,
    )
    const callSignatures = componentType.getCallSignatures()
    if (callSignatures.length === 0) continue

    const propsParam = callSignatures[0].getParameters()[0]
    if (!propsParam) continue

    const propsType = checker.getTypeOfSymbolAtLocation(propsParam, sourceFile)

    for (const [propName, propItem] of Object.entries(doc.props)) {
      const propSymbol = propsType.getProperty(propName)
      if (!propSymbol) continue

      const propType = checker.getTypeOfSymbolAtLocation(propSymbol, sourceFile)
      const type = propItem.type as PropItem['type'] & {
        members?: InlineTypeMember[]
      }

      // Enrich complex types with members
      if (isComplexType(propItem)) {
        const members = cachedMembers(cache, checker, propType, sourceFile, 0)
        if (members.length > 0) {
          type.members = members
          // Fix single-value "enums" that are really complex types:
          // restore the real type name so the UI renders them correctly
          if (isSingleValueEnum(propItem)) {
            type.name = type.raw as string
            delete type.value
          }
        }
      }

      // Enrich enum/union values with drill-down members
      if (
        type.name === 'enum' &&
        Array.isArray(type.value) &&
        type.value.length > 1
      ) {
        const valueMembers = resolveUnionValueMembers(
          checker,
          propType,
          sourceFile,
          cache,
        )
        for (const val of type.value) {
          const members = valueMembers.get(val.value)
          if (members) val.members = members
        }
      }
    }
  }
}
