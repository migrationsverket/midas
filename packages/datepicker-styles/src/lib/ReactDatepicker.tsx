import { CalendarDays } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { sv } from 'date-fns/locale/sv'
import { useState } from 'react'
import './react-datepicker.css'

interface ExampleProps {
  /**
   * Forces the calendar open. react-datepicker renders its popper in place
   * (no portal), so an open calendar lands inside the story's container and
   * ends up in its screenshot.
   */
  open?: boolean
  /**
   * The react-datepicker major to render with. Defaults to the version
   * installed at the workspace root (v9); the v8 compat fixtures pass in the
   * `react-datepicker-v8` alias instead.
   */
  datePicker?: typeof DatePicker
  /**
   * Passes react-datepicker's `ariaInvalid`, which renders `aria-invalid` on
   * the input. That attribute is what react-datepicker.css styles.
   */
  isInvalid?: boolean
  /** Passes react-datepicker's `readOnly`, rendered as `readonly` on the input */
  isReadOnly?: boolean
  /** Passes react-datepicker's `disabled` */
  isDisabled?: boolean
  /** Date to start with, so read-only and disabled have a value to show */
  defaultDate?: Date
}

export const BasicDatePicker = ({
  open,
  datePicker: Picker = DatePicker,
  isInvalid,
  isReadOnly,
  isDisabled,
  defaultDate,
}: ExampleProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    defaultDate ?? null,
  )
  return (
    <Picker
      showIcon
      open={open}
      locale={sv}
      selected={selectedDate}
      onChange={(date: Date | null) => setSelectedDate(date)}
      formatWeekDay={date => date[0].toUpperCase()}
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      showPopperArrow={false}
      dateFormat='dd-MM-yyyy'
      placeholderText='Select a date'
      ariaInvalid={isInvalid ? 'true' : undefined}
      readOnly={isReadOnly}
      disabled={isDisabled}
    />
  )
}

/**
 * Mirrors MonthSelectExample in apps/docs (see BasicDatePicker for the
 * locale difference).
 */
export const MonthPicker = ({
  open,
  datePicker: Picker = DatePicker,
}: ExampleProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return (
    <Picker
      showPopperArrow={false}
      open={open}
      locale={sv}
      selected={selectedDate}
      showIcon
      toggleCalendarOnIconClick
      icon={<CalendarDays height={20} />}
      showMonthYearPicker
      onChange={(date: Date | null) => setSelectedDate(date)}
      dateFormat='MM-yyyy'
      placeholderText='Select a date'
    />
  )
}
