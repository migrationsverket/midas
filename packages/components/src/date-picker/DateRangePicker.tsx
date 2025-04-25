'use client'

import {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  DateRangePicker as AriaDateRangePicker,
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
import { RangeCalendar } from '../calendar'
import { DateInput } from '../date-input'
import { DateSegment } from '../date-segment'
import { DateInputDivider } from '../date-input/DateInputDivider'

export interface DateRangePickerProps
  extends AriaDateRangePickerProps<DateValue> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDateRangePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <Label variant='label-02'>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerInputField {...rest}>
        <DateInput slot='start'>
          {segment => <DateSegment segment={segment} />}
        </DateInput>
        <DateInputDivider />
        <DateInput slot='end'>
          {segment => <DateSegment segment={segment} />}
        </DateInput>
      </DatePickerInputField>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <DatePickerPopover ref={ref}>
        <RangeCalendar />
      </DatePickerPopover>
    </AriaDateRangePicker>
  )
}
