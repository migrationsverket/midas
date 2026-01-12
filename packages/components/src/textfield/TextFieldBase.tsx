import type { ReactNode } from 'react'
import {
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
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'

export interface TextFieldBaseProps extends Omit<TextFieldProps, 'className'> {
  children?: ReactNode
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

export const TextFieldBase = (props: TextFieldBaseProps) => {
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
      {children}
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
}
