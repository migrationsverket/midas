import * as React from 'react'
import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import clsx from 'clsx'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { Label } from '../label'
import { Text } from '../text'
import styles from './DateField.module.css'

export type Size = 'medium' | 'large'

export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
}

export const DateField: React.FC<DateFieldProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  isDisabled,
  label,
  size = 'large',
  ...rest
}) => (
  <AriaDateField
    {...rest}
    className={clsx(styles.dateField, className)}
  >
    <Label>{label}</Label>
    {description && <Text slot='description'>{description}</Text>}
    {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
    <div
      className={clsx(styles.inputField, {
        [styles.medium]: size === 'medium',
      })}
      data-disabled={isDisabled || undefined}
    >
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
    </div>
    {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
  </AriaDateField>
)
