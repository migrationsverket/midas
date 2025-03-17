import { useRef, ChangeEvent } from 'react'
import { useCalendarState } from '@react-stately/calendar'
import { useCalendar, AriaCalendarProps } from '@react-aria/calendar'
import { useDateFormatter, useLocale } from '@react-aria/i18n'
import { CalendarDate, createCalendar } from '@internationalized/date'
import { KalenderGrid } from './KalenderGrid'
import { Button } from 'react-aria-components'
import styles from './Kalender.module.css'

// Extend CalendarProps to include AriaCalendarProps<DateValue>
interface CalendarProps extends AriaCalendarProps<CalendarDate> {
  locale: string
  // Add any other props your Calendar component might receive
}

export function Kalender(props: CalendarProps): JSX.Element {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef<HTMLDivElement>(null)
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props, // First argument: props
    state, // Second argument: state
  )

  return (
    <div
      {...calendarProps}
      ref={ref}
      className={styles.calendar}
    >
      <div className={styles.header}>
        <Button {...prevButtonProps}>&lsaquo;</Button>
        <div className={styles.dropdowns}>
          <MonthDropdown state={state} />
          <YearDropdown state={state} />
        </div>
        <Button {...nextButtonProps}>&rsaquo;</Button>
      </div>
      <KalenderGrid state={state} />
    </div>
  )
}

interface MonthDropdownProps {
  state: any // Replace 'any' with the correct state type based on your application's state
}

function MonthDropdown({ state }: MonthDropdownProps): JSX.Element {
  const months: string[] = []
  const formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  })

  const numMonths = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate,
  )
  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i })
    months.push(formatter.format(date.toDate(state.timeZone)))
  }

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value)
    const date = state.focusedDate.set({ month: value })
    state.setFocusedDate(date)
  }

  return (
    <select
      aria-label='Month'
      onChange={onChange}
      value={state.focusedDate.month}
      className={styles.select}
    >
      {months.map((month, i) => (
        <option
          key={i}
          value={i + 1}
        >
          {month}
        </option>
      ))}
    </select>
  )
}

interface YearDropdownProps {
  state: any // Replace 'any' with the correct state type based on your application's state
}

function YearDropdown({ state }: YearDropdownProps): JSX.Element {
  const years: { value: any; formatted: string }[] = []
  const formatter = useDateFormatter({
    year: 'numeric',
    timeZone: state.timeZone,
  })

  for (let i = -20; i <= 20; i++) {
    const date = state.focusedDate.add({ years: i })
    years.push({
      value: date,
      formatted: formatter.format(date.toDate(state.timeZone)),
    })
  }

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const date = years[index].value
    state.setFocusedDate(date)
  }

  return (
    <select
      aria-label='Year'
      onChange={onChange}
      value={20}
      className={styles.select}
    >
      {years.map((year, i) => (
        <option
          key={i}
          value={i}
        >
          {year.formatted}
        </option>
      ))}
    </select>
  )
}
