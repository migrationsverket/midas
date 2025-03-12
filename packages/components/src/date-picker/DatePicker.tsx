'use client'

import type {
  DatePickerProps,
  DateRangePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import {
  Button,
  DateInput,
  DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Popover,
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import { InputWrapper } from '../textfield'
import TextFieldStyles from '../textfield/TextField.module.css'
import styles from './DatePicker.module.css'
import React from 'react'
import { Calendar, RangeCalendar } from '../calendar'

interface MidasDateRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const DateRangePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: MidasDateRangePickerProps<T>) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDateRangePicker
      {...props}
      className={clsx(
        TextFieldStyles.inputField,
        styles.datePicker,
        props.className,
      )}
      ref={ref}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Group
          className={clsx(TextFieldStyles.input, styles.datePickerTextfield)}
        >
          <DateInput
            slot='start'
            className={styles.date}
          >
            {segment => (
              <DateSegment
                className={styles.dateSegment}
                segment={segment}
              />
            )}
          </DateInput>
          <span aria-hidden='true'>-</span>
          <DateInput
            slot='end'
            className={styles.date}
          >
            {segment => (
              <DateSegment
                segment={segment}
                className={styles.dateSegment}
              />
            )}
          </DateInput>

          <Button>
            <CalendarDays
              size={20}
              aria-hidden
            />
          </Button>
        </Group>

        <Popover UNSTABLE_portalContainer={ref.current || undefined}>
          <Dialog className={styles.dialog}>
            <RangeCalendar />
          </Dialog>
        </Popover>
      </InputWrapper>
    </AriaDateRangePicker>
  )
}

interface MidasDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export const DatePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: MidasDatePickerProps<T>) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDatePicker
      {...props}
      className={clsx(
        TextFieldStyles.inputField,
        styles.datePicker,
        props.className,
      )}
      ref={ref}
    >
      <InputWrapper
        label={label}
        description={description}
        errorMessage={errorMessage}
      >
        <Group
          className={clsx(TextFieldStyles.input, styles.datePickerTextfield)}
        >
          <DateInput className={styles.date}>
            {segment => (
              <DateSegment
                segment={segment}
                className={styles.dateSegment}
              />
            )}
          </DateInput>
          <Button className={clsx(props.isInvalid && styles.buttonInvalid)}>
            <CalendarDays
              size={20}
              aria-hidden
            />
          </Button>
        </Group>

        <Popover UNSTABLE_portalContainer={ref.current || undefined}>
          <Dialog className={styles.dialog}>
            <Calendar />
          </Dialog>
        </Popover>
      </InputWrapper>
    </AriaDatePicker>
  )
}
