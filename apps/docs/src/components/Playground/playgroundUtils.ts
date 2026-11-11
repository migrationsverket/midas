import { Children, isValidElement, type ReactNode } from 'react'
import type { ApiProp } from '@midas-ds/docgen'

interface BaseControl {
  name: string
}

export interface BooleanControl extends BaseControl {
  kind: 'boolean'
  defaultValue: boolean
}

export interface EnumControl extends BaseControl {
  kind: 'enum'
  options: string[]
  defaultValue?: string
}

export interface TextControl extends BaseControl {
  kind: 'text'
  defaultValue?: string
}

export type Control = BooleanControl | EnumControl | TextControl

type Values = Record<string, unknown>

const unquote = (value: string) => value.trim().replace(/^['"]|['"]$/g, '')

const isStringLiteral = (value: string) => /^['"].*['"]$/.test(value.trim())

/** The control for a prop, or `null` if its type can't be edited in a control */
export const getControl = (
  name: string,
  prop: ApiProp,
  options?: string[],
): Control | null => {
  const base = { name }
  const defaultValue: string | undefined = prop.defaultValue?.value

  if (name === 'children' || prop.type.name === 'string') {
    return { ...base, kind: 'text', defaultValue }
  }

  // react-docgen-typescript expands boolean to an enum of false and true
  if (prop.type.raw === 'boolean' || prop.type.name === 'boolean') {
    return { ...base, kind: 'boolean', defaultValue: defaultValue === 'true' }
  }

  const values = prop.type.value?.map(({ value }) => value)
  const isLiteralEnum =
    prop.type.name === 'enum' && values?.every(isStringLiteral)
  if (options || isLiteralEnum) {
    return {
      ...base,
      kind: 'enum',
      options: options ?? (values ?? []).map(unquote),
      defaultValue:
        defaultValue === undefined ? undefined : unquote(defaultValue),
    }
  }

  return null
}

class CodeExpression {
  constructor(readonly code: string) {}
}

/** A prop value printed as is, e.g. the icon in `icon={Plus}` */
export const codeExpression = (code: string) => new CodeExpression(code)

const propToCode = (name: string, value: unknown, defaultValue: unknown) => {
  if (value === defaultValue || value === undefined || value === '') return null
  if (value instanceof CodeExpression) return `${name}={${value.code}}`

  switch (typeof value) {
    case 'boolean':
      return value ? name : `${name}={false}`
    case 'number':
      return `${name}={${value}}`
    case 'string':
      return value.includes("'")
        ? `${name}={${JSON.stringify(value)}}`
        : `${name}='${value}'`
    default:
      return null
  }
}

const isVisibleChild = (child: ReactNode) =>
  typeof child !== 'string' || child.trim() !== ''

const childToCode = (child: ReactNode, indent: string) => {
  if (!isValidElement<Values>(child)) return `${indent}${String(child)}`

  const { type, props } = child
  const name =
    typeof type === 'string'
      ? type
      : (type as { displayName?: string }).displayName || type.name
  const { children, ...rest } = props

  return elementToCode(name, rest, children as ReactNode, {}, indent)
}

/** Prints JSX the way our Prettier config formats it */
export const elementToCode = (
  name: string,
  props: Values,
  children?: ReactNode,
  defaults: Values = {},
  indent = '',
): string => {
  const inner = `${indent}  `
  const attributes = Object.entries(props)
    .map(([key, value]) => propToCode(key, value, defaults[key]))
    .filter(attribute => attribute !== null)
  const childNodes = Children.toArray(children).filter(isVisibleChild)
  const isTextOnly = childNodes.length === 1 && !isValidElement(childNodes[0])

  const isOneLine = attributes.length <= 1
  const open = isOneLine
    ? `${indent}<${[name, ...attributes].join(' ')}`
    : [`${indent}<${name}`, ...attributes.map(a => `${inner}${a}`)].join('\n')

  if (childNodes.length === 0) {
    return `${open}${isOneLine ? ' />' : `\n${indent}/>`}`
  }

  if (isOneLine && isTextOnly) {
    return `${open}>${String(childNodes[0])}</${name}>`
  }

  const body = childNodes.map(child => childToCode(child, inner)).join('\n')

  return `${open}${isOneLine ? '>' : `\n${indent}>`}\n${body}\n${indent}</${name}>`
}

/** Import lines for the generated code, one per module, in a stable order */
export const importsToCode = (imports: Record<string, string[]>) =>
  Object.entries(imports)
    .filter(([, names]) => names.length > 0)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([module, names]) =>
        `import { ${[...new Set(names)].sort().join(', ')} } from '${module}'`,
    )
    .join('\n')
