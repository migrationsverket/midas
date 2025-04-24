import * as React from 'react'
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridProps,
} from 'react-aria-components'
import styles from './Calendar.module.css'
import { Button } from '../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading } from '../heading'
import clsx from 'clsx'
import { getLocalTimeZone, isToday } from '@internationalized/date'
import { Text } from '../text'

export interface CalendarContentProps {
  weekdayStyle?: CalendarGridProps['weekdayStyle']
  errorMessage?: string
}

export const CalendarContent = ({
  weekdayStyle = 'short',
  errorMessage,
}: CalendarContentProps) => (
  <>
    <header className={styles.header}>
      <Button slot='previous'>
        <ChevronLeft />
      </Button>
      <Heading
        level={3}
        elementType='h2'
      />
      <Button slot='next'>
        <ChevronRight />
      </Button>
    </header>
    <CalendarGrid weekdayStyle={weekdayStyle}>
      {date => (
        <CalendarCell
          date={date}
          className={clsx(
            styles.day,
            isToday(date, getLocalTimeZone()) && styles.today,
          )}
        />
      )}
    </CalendarGrid>
    {errorMessage && <Text slot='errorMessage'>{errorMessage}</Text>}
  </>
)
