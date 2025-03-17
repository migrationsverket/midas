import { useCalendarGrid } from '@react-aria/calendar'
import { getWeeksInMonth } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { KalenderCell } from './KalenderCell'
import styles from './Kalender.module.css'
import { CalendarGridProps } from 'react-aria-components'
import { CalendarState } from '@react-stately/calendar'

type Props = CalendarGridProps & {
  state: CalendarState
}

export function KalenderGrid({ state, ...props }: Props) {
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table
      {...gridProps}
      cellPadding='0'
      className={styles.grid}
    >
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date, i) =>
              date ? (
                <KalenderCell
                  key={i}
                  state={state}
                  date={date}
                />
              ) : (
                <td key={i} />
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
