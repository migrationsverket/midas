import {
  createElement,
  useState,
  type ElementType,
  type ReactNode,
} from 'react'
import { Checkbox, ListBoxItem, Select, TextField } from '@midas-ds/components'
import type { ApiDoc } from '@midas-ds/docgen'
import CodeBlock from '@theme/CodeBlock'
import {
  codeExpression,
  elementToCode,
  getControl,
  importsToCode,
  type Control,
} from './playgroundUtils'
import styles from './Playground.module.css'

type Values = Record<string, unknown>

export interface PlaygroundProps {
  /** The component to render */
  component: ElementType
  /** The generated API docs for the component */
  api: ApiDoc
  /** The props to show controls for, in order */
  props: string[]
  /** Starting values, also for props without a control */
  initialProps?: Values
  /** Limits the options of an enum prop */
  controlOptions?: Record<string, string[]>
  /** Named options for props that take anything but a string, e.g. an icon */
  valueOptions?: Record<string, Record<string, unknown>>
  /** The module the named options of a prop are imported from, e.g. lucide-react for icons */
  valueImports?: Record<string, string>
  /** Shows a control only when another prop has a value, by prop name */
  dependsOn?: Record<string, string>
  /** Static content, e.g. the items of a ComboBox */
  children?: ReactNode
}

interface ControlRowProps {
  control: Control
  value: unknown
  onChange: (value: unknown) => void
}

const ControlRow = ({ control, value, onChange }: ControlRowProps) => {
  switch (control.kind) {
    case 'boolean':
      return (
        <Checkbox
          isSelected={Boolean(value)}
          onChange={onChange}
        >
          {control.name}
        </Checkbox>
      )
    case 'enum':
      return (
        <Select
          label={control.name}
          size='medium'
          value={(value as string) ?? null}
          onChange={onChange}
        >
          {control.options.map(option => (
            <ListBoxItem
              key={option}
              id={option}
            >
              {option}
            </ListBoxItem>
          ))}
        </Select>
      )
    case 'text':
      return (
        <TextField
          label={control.name}
          size='medium'
          value={(value as string) ?? ''}
          onChange={onChange}
        />
      )
  }
}

/**
 * A live example with controls for a chosen set of props. The controls come
 * from the generated API docs and the code is generated from the current
 * values, so it can't drift from what's rendered.
 */
export const Playground = ({
  component,
  api,
  props: propNames,
  initialProps = {},
  controlOptions = {},
  valueOptions = {},
  valueImports = {},
  dependsOn = {},
  children,
}: PlaygroundProps) => {
  const controls = propNames
    .map(name =>
      getControl(
        name,
        api.props[name],
        controlOptions[name] ??
          (valueOptions[name] && Object.keys(valueOptions[name])),
      ),
    )
    .filter(control => control !== null)

  const defaults = Object.fromEntries(
    controls.map(({ name, defaultValue }) => [name, defaultValue]),
  )
  const [values, setValues] = useState<Values>({ ...defaults, ...initialProps })

  const getValue = (name: string) =>
    valueOptions[name]
      ? valueOptions[name][values[name] as string]
      : values[name]
  const isActive = (name: string) =>
    !dependsOn[name] || getValue(dependsOn[name]) !== undefined

  const { children: textChildren, ...rest } = values
  const names = Object.keys(rest).filter(isActive)
  const props = Object.fromEntries(names.map(name => [name, getValue(name)]))
  const codeProps = Object.fromEntries(
    names.map(name => [
      name,
      valueOptions[name] && getValue(name) !== undefined
        ? codeExpression(values[name] as string)
        : props[name],
    ]),
  )
  const content = (textChildren as ReactNode) ?? children
  const imports: Record<string, string[]> = {}
  for (const name of names) {
    const module = valueImports[name]
    if (module && valueOptions[name] && getValue(name) !== undefined) {
      imports[module] = [...(imports[module] ?? []), values[name] as string]
    }
  }
  const code = [
    importsToCode(imports),
    elementToCode(api.displayName, codeProps, content, defaults),
  ]
    .filter(Boolean)
    .join('\n\n')

  return (
    <div className={styles.container}>
      <div className={styles.playground}>
        <div className={styles.preview}>
          {createElement(component, props, content)}
        </div>
        <div className={styles.controls}>
          {controls
            .filter(({ name }) => isActive(name))
            .map(control => (
              <ControlRow
                key={control.name}
                control={control}
                value={values[control.name]}
                onChange={value =>
                  setValues(current => ({ ...current, [control.name]: value }))
                }
              />
            ))}
        </div>
        <div className={styles.code}>
          <CodeBlock language='tsx'>{code}</CodeBlock>
        </div>
      </div>
    </div>
  )
}
