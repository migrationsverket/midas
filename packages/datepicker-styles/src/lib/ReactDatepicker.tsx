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
   * Marks the input as invalid via react-datepicker's `ariaInvalid`, which is
   * what react-datepicker.css hooks the invalid style onto.
   */
  isInvalid?: boolean
}

export const BasicDatePicker = ({
  open,
  datePicker: Picker = DatePicker,
  isInvalid,
}: ExampleProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
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
