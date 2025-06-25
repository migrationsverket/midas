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
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import styles from './DateField.module.css'
import { Size } from '../common/types'
import { LabelWrapper } from '../label/LabelWrapper'

export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
}

export const DateField: React.FC<DateFieldProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  isDisabled,
  label,
  size = 'large',
  popover,
  ...rest
}) => (
  <AriaDateField
    {...rest}
    className={clsx(styles.dateField, className)}
  >
    <LabelWrapper popover={popover}>
      {label && <Label>{label}</Label>}
    </LabelWrapper>
    {description && <Text slot='description'>{description}</Text>}
    {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
    <div
      className={clsx(styles.inputField, {
        [styles.medium]: size === 'medium',
      })}
      data-disabled={isDisabled || undefined}
      data-testid='date-field_input-field'
    >
      <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
    </div>
    {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
  </AriaDateField>
)
