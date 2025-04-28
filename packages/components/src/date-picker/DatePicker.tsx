'use client'

import * as React from 'react'
import {
  DatePicker as AriaDatePicker,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { DatePickerInputField } from './DatePickerInputField'
import { DatePickerPopover } from './DatePickerPopover'
import { Calendar } from '../calendar'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { Label } from '../label'
import { Text } from '../text'
import styles from './DatePicker.module.css'

interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDatePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <Label>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerInputField {...rest}>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
      </DatePickerInputField>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerPopover ref={ref}>
        <Calendar />
      </DatePickerPopover>
    </AriaDatePicker>
  )
}
