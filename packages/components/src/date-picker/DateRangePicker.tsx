'use client'

import * as React from 'react'
import {
  DateRangePicker as AriaDateRangePicker,
  type DateRangePickerProps as AriaDateRangePickerProps,
  type DateValue,
  type ValidationResult,
} from 'react-aria-components'
import { clsx } from 'clsx'
import { DatePickerInputField } from './DatePickerInputField'
import { DatePickerPopover } from './DatePickerPopover'
import { DateInput, DateInputDivider, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { InfoPopoverProps, Label, LabelWrapper } from '../label'
import { RangeCalendar } from '../calendar'
import { Text } from '../text'
import styles from './DatePicker.module.css'
import { Size } from '../common/types'

export interface DateRangePickerProps
  extends AriaDateRangePickerProps<DateValue> {
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

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
  popover,
  ...rest
}) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDateRangePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
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
