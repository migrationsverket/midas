'use client'

import {
  DatePickerProps,
  DateRangePickerProps,
  DateValue,
  Button,
  DateInput,
  DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Popover,
  ValidationResult,
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from './DatePicker.module.css'
import React from 'react'
import { Calendar, RangeCalendar } from '../calendar'
import { FieldError } from '../field-error'
import { Text } from '../text'
import { Label } from '../label'

interface MidasDateRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const DateRangePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  ...props
}: MidasDateRangePickerProps<T>) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDateRangePicker
      {...props}
      className={clsx(styles.datePicker, props.className)}
      ref={ref}
    >
      <Label variant='label-02'>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <Group className={clsx(styles.inputField)}>
        <DateInput
          slot='start'
          className={styles.date}
        >
          {segment => (
            <DateSegment
              className={styles.segment}
              segment={segment}
            />
          )}
        </DateInput>
        <span
          aria-hidden='true'
          className={styles.divider}
        >
          -
        </span>
        <DateInput
          slot='end'
          className={styles.date}
        >
          {segment => (
            <DateSegment
              segment={segment}
              className={styles.segment}
            />
          )}
        </DateInput>

        <Button
          className={clsx(props.isInvalid && styles.buttonInvalid)}
          isDisabled={props.isDisabled}
        >
          <CalendarDays
            size={20}
            aria-hidden
          />
        </Button>
      </Group>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <Popover UNSTABLE_portalContainer={ref.current || undefined}>
        <Dialog className={styles.dialog}>
          <RangeCalendar />
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  )
}

interface MidasDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
}

export const DatePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  errorPosition = 'top',
  ...props
}: MidasDatePickerProps<T>) => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <AriaDatePicker
      {...props}
      className={clsx(styles.datePicker, props.className)}
      ref={ref}
    >
      <Label variant='label-02'>{label}</Label>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <Group className={clsx(styles.inputField)}>
        <DateInput className={styles.date}>
          {segment => (
            <DateSegment
              segment={segment}
              className={styles.segment}
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
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
      <Popover UNSTABLE_portalContainer={ref.current || undefined}>
        <Dialog className={styles.dialog}>
          <Calendar />
        </Dialog>
      </Popover>
    </AriaDatePicker>
  )
}
