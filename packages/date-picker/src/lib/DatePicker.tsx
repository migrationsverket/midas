'use client'

import type {
  DateRangePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
  RangeCalendar,
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

export const DatePicker = <T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: MidasDateRangePickerProps<T>) => {
  return (
    <DateRangePicker
      className={clsx(
        TextFieldStyles.inputField,
        styles.datePicker,
        props.className
      )}
      {...props}
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
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
          <span aria-hidden="true">–</span>
          <DateInput
            slot="end"
            className={styles.date}
          >
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>

          <Button>
            <CalendarDays size={22} />
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
    </DateRangePicker>
  )
}
