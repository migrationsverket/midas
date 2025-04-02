import * as React from 'react'
import {
  TextFieldContext,
  useContextProps,
  TextField as AriaTextField,
  TextFieldProps,
  ValidationResult,
} from 'react-aria-components'
import styles from './TextField.module.css'
import { Label } from '../label'
import { Text } from '../text/Text'
import { FieldError } from '../field-error'
import { CharacterCounter } from '../character-counter'

export interface TextFieldBaseProps extends Omit<TextFieldProps, 'className'> {
  children?: React.ReactNode
  /** Specify label displayed above the TextField*/
  label?: string
  /** Specify description displayed below the label */
  description?: string
  /** Custom error messages */
  errorMessage?: string | ((validation: ValidationResult) => string) | undefined
  /**
   * Whether to show the character counter or not
   * @default
   * false
   */
  showCounter?: boolean
}

export const TextFieldBase = React.forwardRef<
  HTMLDivElement,
  TextFieldBaseProps
>((props, ref) => {
  ;[props] = useContextProps(props, ref, TextFieldContext)

  const { label, description, errorMessage, showCounter } = props

  return (
    <AriaTextField
      {...props}
      className={styles.textField}
    >
      {label && <Label variant='label-02'>{label}</Label>}
      {description && <Text slot='description'>{description}</Text>}
      {showCounter && <CharacterCounter />}
      <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      {props.children}
    </AriaTextField>
  )
})
