import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../button'
import { Heading } from '../heading'
import styles from './Calendar.module.css'
import { CalendarDate } from '@internationalized/date'

const years = Array.from({ length: 200 }, (_, i) => 1900 + i)
const months = [
  { name: 'januari', value: 1 },
  { name: 'februar', value: 2 },
  { name: 'mars', value: 3 },
  { name: 'april', value: 4 },
  { name: 'maj', value: 5 },
  { name: 'juni', value: 6 },
  { name: 'juli', value: 7 },
  { name: 'august', value: 8 },
  { name: 'september', value: 9 },
  { name: 'oktober', value: 10 },
  { name: 'november', value: 11 },
  { name: 'desember', value: 12 },
]
export const CalendarHeader: React.FC = () => (
  <header className={styles.header}>
    <Button
      slot='previous'
      size='medium'
    >
      <ChevronLeft />
    </Button>
    <Heading
      level={3}
      elementType='h2'
    />
    <Button
      slot='next'
      size='medium'
    >
      <ChevronRight />
    </Button>
  </header>
)

type CalendarHeaderProps = {
  setFocusedDate?: (date: CalendarDate) => void
}

export const CalendarHeader2: React.FC<CalendarHeaderProps> = ({
  setFocusedDate,
}) => {
  const today = new Date()
  const [selectedYear, setSelectedYear] = React.useState(today.getFullYear())
  const [selectedMonth, setSelectedMonth] = React.useState(today.getMonth() + 1) // JS months are 0-based, +1 for 1-based

  React.useEffect(() => {
    const newDate = new CalendarDate(selectedYear, selectedMonth, 1)
    console.log('Updated focusedDate:', selectedMonth)
    setFocusedDate?.(newDate)
  }, [selectedYear, selectedMonth, setFocusedDate])

  return (
    <header className={styles.header}>
      <Button
        slot='previous'
        size='medium'
      >
        <ChevronLeft />
      </Button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <select
          aria-label='Select month'
          value={selectedMonth}
          onChange={e => setSelectedMonth(Number(e.target.value))}
        >
          {months.map(({ name, value }) => (
            <option
              key={value}
              value={value}
            >
              {name}
            </option>
          ))}
        </select>

        <select
          aria-label='Select year'
          value={selectedYear}
          onChange={e => setSelectedYear(Number(e.target.value))}
        >
          {years.map(year => (
            <option
              key={year}
              value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>

      <Heading
        level={3}
        elementType='h2'
      />

      <Button
        slot='next'
        size='medium'
      >
        <ChevronRight />
      </Button>
    </header>
  )
}
