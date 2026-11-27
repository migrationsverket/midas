import { Children, isValidElement, type ReactNode } from 'react'
import { Icon } from 'lucide-react'
import type { ApiDoc, ApiProp } from '@midas-ds/docgen'

/** The prop names of a component's props, `P` */
export type PropName<P> = Extract<keyof P, string>

/**
 * How the playground shows prop `K` of props `P`. Leave it empty to read
 * everything from the API docs. Without type arguments it accepts any prop.
 */
export interface ControlConfig<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P = Record<string, any>,
  K extends keyof P = keyof P,
> {
  /**
   * Limits a union of strings to these options, or gives named values for a
   * prop that takes anything else, e.g. `{ Plus }` for an icon. The names are
   * printed as is in the code. A single named option is shown as a checkbox.
   */
  options?: Extract<P[K], string>[] | Record<string, P[K]>
  /** The module the named options are imported from, e.g. `lucide-react` */
  import?: string
  /**
   * Enables the control only when another prop is set and not false, or,
   * given as `{ prop: value }`, only when that prop has one of these values
   */
  showWhen?: PropName<P> | ShowWhenValues<P>
}

/** The values of other props a control is enabled for, e.g. `{ status: 'error' }` */
export type ShowWhenValues<P> = {
  [K in PropName<P>]?: P[K] | P[K][]
}

/** One entry per prop to show a control for, in order */
export type ControlsConfig<P> = { [K in PropName<P>]?: ControlConfig<P, K> }

interface BaseControl {
  name: string
  /** Named values, by the name printed in the code */
  named?: Record<string, unknown>
  import?: string
  showWhen?: string | Record<string, unknown>
}

export interface BooleanControl extends BaseControl {
  kind: 'boolean'
  defaultValue: boolean
}

export interface EnumControl extends BaseControl {
  kind: 'enum'
  options: string[]
  defaultValue?: string
  /** A required prop without a default can't be left out */
  required?: boolean
}

export interface TextControl extends BaseControl {
  kind: 'text'
  defaultValue?: string
}

/** A named value that is either set or not */
export interface ToggleControl extends BaseControl {
  kind: 'toggle'
  option: string
  defaultValue?: undefined
}

export type Control = BooleanControl | EnumControl | TextControl | ToggleControl

type Values = Record<string, unknown>

const unquote = (value: string) => value.trim().replace(/^['"]|['"]$/g, '')

const isStringLiteral = (value: string) => /^['"].*['"]$/.test(value.trim())

/** The control for a prop, or `null` if its type can't be edited in a control */
export const getControl = (
  name: string,
  prop: ApiProp | undefined,
  { options, import: importFrom, showWhen }: ControlConfig = {},
): Control | null => {
  const base = { name, import: importFrom, showWhen }
  const defaultValue: string | undefined = prop?.defaultValue?.value

  if (options && !Array.isArray(options)) {
    const names = Object.keys(options)
    return names.length === 1
      ? { ...base, kind: 'toggle', option: names[0], named: options }
      : { ...base, kind: 'enum', options: names, named: options }
  }

  const values = prop?.type.value?.map(({ value }) => value)
  const isLiteralEnum =
    prop?.type.name === 'enum' &&
    !!values?.length &&
    values.every(isStringLiteral)
  if (options || (isLiteralEnum && name !== 'children')) {
    return {
      ...base,
      kind: 'enum',
      options: options ?? (values ?? []).map(unquote),
      defaultValue:
        defaultValue === undefined ? undefined : unquote(defaultValue),
      required: prop?.required,
    }
  }

  // A ReactNode or a union with string, e.g. errorMessage, can take text too
  const acceptsText =
    prop?.type.name === 'string' ||
    prop?.type.raw === 'ReactNode' ||
    prop?.type.value?.some(({ value }) => value === 'string')
  if (name === 'children' || acceptsText) {
    return { ...base, kind: 'text', defaultValue }
  }

  // react-docgen-typescript expands boolean to an enum of false and true
  if (prop?.type.raw === 'boolean' || prop?.type.name === 'boolean') {
    return { ...base, kind: 'boolean', defaultValue: defaultValue === 'true' }
  }

  return null
}

/**
 * The controls for a playground, in the order they are configured. Throws for
 * a name that isn't a prop of the component, so a typo fails the docs build
 * instead of silently leaving a control out.
 */
export const getControls = (
  api: ApiDoc,
  config: Partial<Record<string, ControlConfig>>,
  initialProps: Values = {},
): Control[] => {
  const assertProp = (name: string) => {
    if (name !== 'children' && !(name in api.props)) {
      throw new Error(`Playground: ${api.displayName} has no prop "${name}"`)
    }
  }
  // The API docs leave out the aria-* props, which every component takes, and
  // the link props that a component with `as` passes on to the element
  const hasLinkProps = 'as' in api.props
  for (const name of Object.keys(initialProps)) {
    if (name.startsWith('aria-')) continue
    if (hasLinkProps && LINK_PROPS.includes(name)) continue
    assertProp(name)
  }

  return Object.entries(config).map(([name, controlConfig = {}]) => {
    assertProp(name)
    const { showWhen } = controlConfig
    if (typeof showWhen === 'string') assertProp(showWhen)
    else if (showWhen) Object.keys(showWhen).forEach(assertProp)

    const control = getControl(name, api.props[name], controlConfig)
    if (!control) {
      throw new Error(
        `Playground: ${api.displayName}'s prop "${name}" can't be a control, give it options`,
      )
    }
    return control
  })
}

const LINK_PROPS = [
  'href',
  'target',
  'rel',
  'download',
  'hrefLang',
  'ping',
  'referrerPolicy',
]

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
    // The code shows that a handler is needed, not what it does
    case 'function':
      return `${name}={() => {}}`
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

/**
 * Stands in for the playground's component in the code of a wrapper, and
 * prints the code it is given
 */
export const CodeSlot = (_props: { code: string }) => null

const indentCode = (code: string, indent: string) =>
  code
    .split('\n')
    .map(line => `${indent}${line}`)
    .join('\n')

/**
 * Components from other libraries than midas and lucide, by module, e.g.
 * `{ 'react-aria-components': { Form } }`
 */
export type ImportsConfig = Record<string, Record<string, unknown>>

type Entry = [module: string, name: string]

const registry = new Map<unknown, Entry>()

/**
 * Names the exports of a module, since a production build minifies function
 * names and most components have no displayName
 */
export const registerModule = (
  module: string,
  exports: Record<string, unknown>,
) => {
  for (const [name, value] of Object.entries(exports)) {
    if (/^[A-Z]/.test(name) && !registry.has(value)) {
      registry.set(value, [module, name])
    }
  }
}

/**
 * A lucide icon renders lucide's Icon and keeps its displayName when
 * minified, so the icons need no registry, which would load all of them
 */
const lucideIcon = (type: unknown): Entry | undefined => {
  const { render, displayName } = type as {
    render?: (props: object, ref: null) => unknown
    displayName?: string
  }
  if (typeof render !== 'function' || !displayName) return undefined
  try {
    const element = render({}, null)
    return isValidElement(element) && element.type === Icon
      ? ['lucide-react', displayName]
      : undefined
  } catch {
    // Another component's render, which may use hooks outside of React
    return undefined
  }
}

/**
 * Names the components in the code and collects their imports: midas
 * components by their registered export, lucide icons by their name and
 * anything else from the config
 */
export class CodeScope {
  private readonly names = new Map<unknown, Entry>()
  readonly imports: Record<string, string[]> = {}

  constructor(config: ImportsConfig = {}) {
    for (const [module, components] of Object.entries(config)) {
      for (const [name, component] of Object.entries(components)) {
        this.names.set(component, [module, name])
      }
    }
  }

  /** The name of a component, which the code then imports */
  use(type: unknown): string {
    if (typeof type === 'string') return type
    const entry = this.names.get(type) ?? registry.get(type) ?? lucideIcon(type)
    if (!entry) {
      const name =
        (type as { displayName?: string }).displayName ||
        (type as { name?: string }).name
      throw new Error(
        `Playground: ${name || 'a component'} isn't from @midas-ds/components or lucide-react, add it to imports`,
      )
    }
    const [module, name] = entry
    this.addImport(module, name)
    return name
  }

  addImport(module: string, name: string) {
    this.imports[module] = [...(this.imports[module] ?? []), name]
  }
}

const nameOf = (type: unknown, scope?: CodeScope) =>
  scope
    ? scope.use(type)
    : typeof type === 'string'
      ? type
      : (type as { displayName?: string }).displayName ||
        (type as { name?: string }).name ||
        'Unknown'

/** Prints any element and its children, with props as they are */
export const childToCode = (
  child: ReactNode,
  indent = '',
  scope?: CodeScope,
): string => {
  if (!isValidElement<Values>(child)) return `${indent}${String(child)}`
  if (child.type === CodeSlot) {
    return indentCode((child.props as { code: string }).code, indent)
  }

  const { children, ...rest } = child.props

  return elementToCode(
    nameOf(child.type, scope),
    rest,
    children as ReactNode,
    {},
    indent,
    scope,
  )
}

/**
 * The props to render and to print for the current values. Named options are
 * resolved to their values, and printed by name with an import. Props whose
 * `showWhen` prop has no value are left out, and their controls are disabled.
 */
export const getPlaygroundProps = (controls: Control[], values: Values) => {
  const byName = new Map(controls.map(control => [control.name, control]))
  const valueOf = (name: string) => {
    const named = byName.get(name)?.named
    return named ? named[values[name] as string] : values[name]
  }
  const isVisible = (name: string) => {
    const showWhen = byName.get(name)?.showWhen
    if (!showWhen) return true
    if (typeof showWhen === 'string') {
      const value = valueOf(showWhen)
      return value !== undefined && value !== false
    }
    return Object.entries(showWhen).every(([other, wanted]) =>
      (Array.isArray(wanted) ? wanted : [wanted]).includes(values[other]),
    )
  }

  const names = Object.keys(values).filter(
    name => name !== 'children' && isVisible(name),
  )
  const props: Values = {}
  const codeProps: Values = {}
  const imports: Record<string, string[]> = {}

  for (const name of names) {
    const control = byName.get(name)
    const value = valueOf(name)
    props[name] = value
    codeProps[name] = value

    if (control?.named && value !== undefined) {
      const option = values[name] as string
      codeProps[name] = codeExpression(option)
      if (control.import) {
        imports[control.import] = [...(imports[control.import] ?? []), option]
      }
    }
  }

  return {
    props,
    codeProps,
    imports,
    // Disabled rather than hidden, so the playground doesn't change size
    disabledControls: controls
      .filter(({ name }) => !isVisible(name))
      .map(({ name }) => name),
  }
}

/** Prints JSX the way our Prettier config formats it */
export const elementToCode = (
  name: string,
  props: Values,
  children?: ReactNode,
  defaults: Values = {},
  indent = '',
  scope?: CodeScope,
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

  const body = childNodes
    .map(child => childToCode(child, inner, scope))
    .join('\n')

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
