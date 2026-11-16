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
  elementToCode,
  getControl,
  getPlaygroundProps,
  importsToCode,
  type Control,
  type ControlConfig,
} from './playgroundUtils'
import styles from './Playground.module.css'

type Values = Record<string, unknown>

export interface PlaygroundProps {
  /** The component to render */
  component: ElementType
  /** The generated API docs for the component */
  api: ApiDoc
  /** The props to show controls for, in order. `{}` reads the control from the API docs. */
  controls: Record<string, ControlConfig>
  /** Starting values, also for props without a control. Named options are given by name. */
  initialProps?: Values
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
    case 'toggle':
      return (
        <Checkbox
          isSelected={value !== undefined}
          onChange={isSelected =>
            onChange(isSelected ? control.option : undefined)
          }
        >
          {control.name}
        </Checkbox>
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
  controls: config,
  initialProps = {},
  children,
}: PlaygroundProps) => {
  const controls = Object.entries(config)
    .map(([name, controlConfig]) =>
      getControl(name, api.props[name], controlConfig),
    )
    .filter(control => control !== null)

  const defaults = Object.fromEntries(
    controls.map(({ name, defaultValue }) => [name, defaultValue]),
  )
  const [values, setValues] = useState<Values>({ ...defaults, ...initialProps })

  const { props, codeProps, imports, visibleControls } = getPlaygroundProps(
    controls,
    values,
  )
  const content = (values.children as ReactNode) ?? children
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
          {visibleControls.map(control => (
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
