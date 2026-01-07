'use client'

import * as React from 'react'
import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  type ValidationResult,
  DatePickerStateContext,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { DatePickerInputField } from './DatePickerInputField'
import { DatePickerPopover } from './DatePickerPopover'
import { Calendar } from '../calendar'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import styles from './DatePicker.module.css'
import { Size } from '../common/types'
import { LabelWrapper } from '../label/LabelWrapper'

export interface DatePickerProps extends AriaDatePickerProps<DateValue> {
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
  /** Show a clear button to remove the selected date
   * @default false
   */
  showClearButton?: boolean
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
  popover,
  showClearButton = false,
  isReadOnly,
  isDisabled,
  size,
  ...rest
}) => {
  return (
    <AriaDatePicker
      className={clsx(styles.datePicker, className)}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      {...rest}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerInputField
        showClearButton={showClearButton}
        isReadOnly={isReadOnly}
        isDisabled={isDisabled}
        size={size}
        {...rest}
      >
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </DatePickerInputField>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerPopover>
        <Calendar />
      </DatePickerPopover>
    </AriaDatePicker>
  )
}
