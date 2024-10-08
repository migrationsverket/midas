'use client'

import type {
  DatePickerProps,
  DateRangePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
  RangeCalendar,
  Calendar,
} from 'react-aria-components'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { InputWrapper, TextFieldStyles } from '@midas-ds/textfield'
import styles from './DatePicker.module.css'

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
  return (
    <AriaDateRangePicker
      {...props}
      className={clsx(
        TextFieldStyles.inputField,
        styles.datePicker,
        props.className
      )}
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
            slot="start"
            className={styles.date}
          >
            {(segment) => (
              <DateSegment
                className={styles.dateSegment}
                segment={segment}
              />
            )}
          </DateInput>
          <span aria-hidden="true">-</span>
          <DateInput
            slot="end"
            className={styles.date}
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className={styles.dateSegment}
              />
            )}
          </DateInput>

          <Button>
            <CalendarDays size={16} />
          </Button>
        </Group>

        <Popover>
          <Dialog className={styles.dialog}>
            <RangeCalendar>
              <header className={styles.dialogHeader}>
                <Button slot="previous">
                  <ChevronLeft />
                </Button>
                <Heading className={styles.dialogHeading} />
                <Button slot="next">
                  <ChevronRight />
                </Button>
              </header>
              <CalendarGrid className={styles.calendar}>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={styles.day}
                  />
                )}
              </CalendarGrid>
            </RangeCalendar>
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
  return (
    <AriaDatePicker
      {...props}
      className={clsx(
        TextFieldStyles.inputField,
        styles.datePicker,
        props.className
      )}
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
            {(segment) => (
              <DateSegment
                segment={segment}
                className={styles.dateSegment}
              />
            )}
          </DateInput>
          <Button>
            <CalendarDays size={16} />
          </Button>
        </Group>

        <Popover>
          <Dialog className={styles.dialog}>
            <Calendar>
              <header className={styles.dialogHeader}>
                <Button slot="previous">
                  <ChevronLeft />
                </Button>
                <Heading className={styles.dialogHeading} />
                <Button slot="next">
                  <ChevronRight />
                </Button>
              </header>
              <CalendarGrid className={styles.calendar}>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className={styles.day}
                  />
                )}
              </CalendarGrid>
            </Calendar>
          </Dialog>
        </Popover>
      </InputWrapper>
    </AriaDatePicker>
  )
}
