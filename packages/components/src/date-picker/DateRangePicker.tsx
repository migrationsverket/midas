'use client'

import * as React from 'react'
import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { DatePickerInputField } from './components/DatePickerInputField'
import { DatePickerPopover } from './components/DatePickerPopover'
import { DateInput } from '../date-input'
import { DateInputDivider } from '../date-input/DateInputDivider'
import { DateSegment } from '../date-segment'
import { FieldError } from '../field-error'
import { Label } from '../label'
import { RangeCalendar } from '../calendar'
import { Text } from '../text'
import styles from './DatePicker.module.css'

export interface DateRangePickerProps
  extends AriaDateRangePickerProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
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
