'use client'

import {
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  DatePicker as AriaDatePicker,
  ValidationResult,
} from 'react-aria-components'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import React from 'react'
import { DatePickerInputField } from './components/DatePickerInputField'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { DatePickerPopover } from './components/DatePickerPopover'
import { Calendar } from '../calendar'
import { DateInput } from '../date-input'
import { DateSegment } from '../date-segment'

interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDatePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <Label variant='label-02'>{label}</Label>
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
