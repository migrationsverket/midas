import * as React from 'react'
import {
  TextFieldContext,
  useContextProps,
  TextField as AriaTextField,
  TextFieldProps,
  ValidationResult,
} from 'react-aria-components'
import styles from './TextField.module.css'
import { Text } from '../text/Text'
import { FieldError } from '../field-error'
import { CharacterCounter } from '../character-counter'
import { clsx } from 'clsx'
import { Size } from '../common/types'
import { InfoPopoverProps, Label, LabelWrapper } from '../label'

export interface TextFieldBaseProps extends Omit<TextFieldProps, 'className'> {
  children?: React.ReactNode
  /** Specify label displayed above the TextField*/
  label?: string
  /** Specify description displayed below the label */
  description?: string
  /** Custom error messages */
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  /**
   * Whether to show the character counter or not
   * @default
   * false
   */
  showCounter?: boolean
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
  popover?: InfoPopoverProps
}

export const TextFieldBase = React.forwardRef<
  HTMLDivElement,
  TextFieldBaseProps
>((props, ref) => {
  ;[props] = useContextProps(props, ref, TextFieldContext)

  const {
    label,
    description,
    errorMessage,
    showCounter,
    errorPosition = 'top',
    size = 'large',
    popover,
    children,
  } = props

  return (
    <AriaTextField
      {...props}
      className={clsx(styles.textField, {
        [styles.medium]: size === 'medium',
      })}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {showCounter && <CharacterCounter isLonely={!description} />}
      {errorPosition === 'top' && (
        <FieldError data-testid='fieldError'>{errorMessage}</FieldError>
      )}
      <div className={styles.wrap}>{children}</div>
      {errorPosition === 'bottom' && (
        <FieldError
          data-testid='fieldError'
          className={styles.bottomError}
        >
          {errorMessage}
        </FieldError>
      )}
    </AriaTextField>
  )
})
