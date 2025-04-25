import * as React from 'react'
import { CalendarGridProps } from 'react-aria-components'
import styles from '../Calendar.module.css'
import { Button } from '../../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading } from '../../heading'

export interface CalendarHeaderProps {
  weekdayStyle?: CalendarGridProps['weekdayStyle']
  errorMessage?: string
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
