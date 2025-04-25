import * as React from 'react'
import { CalendarGridProps } from 'react-aria-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../button'
import { Heading } from '../../heading'
import styles from '../Calendar.module.css'

export interface CalendarHeaderProps {
  errorMessage?: string
  weekdayStyle?: CalendarGridProps['weekdayStyle']
}

export const CalendarHeader: React.FC = () => (
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
)
