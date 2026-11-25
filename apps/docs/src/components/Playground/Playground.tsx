import {
  createElement,
  useState,
  type ComponentProps,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from 'react'
import * as components from '@midas-ds/components'
import { Checkbox, ListBoxItem, Select, TextField } from '@midas-ds/components'
import * as layout from '@midas-ds/layout'
import type { ApiDoc } from '@midas-ds/docgen'
import CodeBlock from '@theme/CodeBlock'
import {
  childToCode,
  CodeSlot,
  elementToCode,
  getControls,
  getPlaygroundProps,
  importsToCode,
  registerComponentNames,
  type Control,
  type ControlConfig,
  type ControlsConfig,
  type PropName,
} from './playgroundUtils'
import styles from './Playground.module.css'

registerComponentNames(components, layout)

type Values = Record<string, unknown>

export interface PlaygroundProps<C extends ElementType> {
  /** The component to render */
  component: C
  /** The generated API docs for the component */
  api: ApiDoc
  /**
   * The props to show controls for, in order. `{}` reads the control from the
   * API docs. A name that isn't a prop throws, which fails the docs build.
   */
  controls: ControlsConfig<ComponentProps<C>>
  /** Starting values, also for props without a control. Named options are given by name. */
  initialProps?: { [K in PropName<ComponentProps<C>>]?: unknown }
  /** Static content, e.g. the items of a ComboBox */
  children?: ReactNode
  /**
   * Puts the component in context, e.g. a Tooltip in its TooltipTrigger. The
   * wrapper is part of the generated code too.
   */
  wrap?: (element: ReactElement) => ReactElement
  /** Lets the component take the full width, instead of centering it */
  fill?: boolean
  /**
   * A class for the preview only, e.g. to make the items of a layout
   * component visible. It isn't part of the generated code.
   */
  previewClassName?: string
}

const UNSET = '__unset__'

interface ControlRowProps {
  control: Control
  value: unknown
  onChange: (value: unknown) => void
  isDisabled: boolean
}

const ControlRow = ({
  control,
  value,
  onChange,
  isDisabled,
}: ControlRowProps) => {
  switch (control.kind) {
    case 'boolean':
      return (
        <Checkbox
          isDisabled={isDisabled}
          isSelected={Boolean(value)}
          onChange={onChange}
        >
          {control.name}
        </Checkbox>
      )
    case 'enum': {
      // Without a default, leaving the prop out is a choice of its own
      const canUnset = control.defaultValue === undefined
      return (
        <Select
          isDisabled={isDisabled}
          label={control.name}
          size='medium'
          value={(value as string) ?? (canUnset ? UNSET : null)}
          onChange={key => onChange(key === UNSET ? undefined : key)}
        >
          {[...(canUnset ? [UNSET] : []), ...control.options].map(option => (
            <ListBoxItem
              key={option}
              id={option}
            >
              {option === UNSET ? 'Standard' : option}
            </ListBoxItem>
          ))}
        </Select>
      )
    }
    case 'toggle':
      return (
        <Checkbox
          isDisabled={isDisabled}
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
          isDisabled={isDisabled}
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
export const Playground = <C extends ElementType>({
  component,
  api,
  controls: config,
  initialProps = {},
  children,
  wrap,
  fill = false,
  previewClassName,
}: PlaygroundProps<C>) => {
  // The types only check the call site, getControls checks the names at runtime
  const controls = getControls(
    api,
    config as Partial<Record<string, ControlConfig>>,
    initialProps,
  )

  const defaults = Object.fromEntries(
    controls.map(({ name, defaultValue }) => [name, defaultValue]),
  )
  const [values, setValues] = useState<Values>({ ...defaults, ...initialProps })

  const { props, codeProps, imports, disabledControls } = getPlaygroundProps(
    controls,
    values,
  )
  const content = (values.children as ReactNode) ?? children
  const element = createElement(component, props, content)
  const elementCode = elementToCode(
    api.displayName,
    codeProps,
    content,
    defaults,
  )
  const code = [
    importsToCode(imports),
    wrap
      ? childToCode(wrap(createElement(CodeSlot, { code: elementCode })))
      : elementCode,
  ]
    .filter(Boolean)
    .join('\n\n')

  return (
    <div className={styles.container}>
      <div className={styles.playground}>
        <div
          className={[
            fill ? styles.previewFill : styles.preview,
            previewClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {wrap ? wrap(element) : element}
        </div>
        <div className={styles.controls}>
          {controls.map(control => (
            <ControlRow
              key={control.name}
              control={control}
              isDisabled={disabledControls.includes(control.name)}
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
