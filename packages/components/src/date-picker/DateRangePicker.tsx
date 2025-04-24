'use client'

import {
  DateRangePickerProps,
  DateValue,
  DateRangePicker as AriaDateRangePicker,
} from 'react-aria-components'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import React from 'react'
import { DatePickerContent, DatePickerContentProps } from './DatePickerContent'

export const DateRangePicker: React.FC<
  DateRangePickerProps<DateValue> & DatePickerContentProps
> = ({ className, ...rest }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDateRangePicker
      className={clsx(styles.datePicker, className)}
      ref={ref}
      {...rest}
    >
      <DatePickerContent
        ref={ref}
        isRange
        {...rest}
      />
    </AriaDateRangePicker>
  )
}
