import * as React from 'react'
import { Button, Group } from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import styles from '../DatePicker.module.css'

interface DatePickerInputFieldProps {
  isInvalid?: boolean
  isDisabled?: boolean
  children?: React.ReactNode
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  isInvalid,
  isDisabled,
  children,
}) => (
  <Group className={clsx(styles.inputField)}>
    {children}
    <Button
      className={styles.calendarButton}
      data-invalid={isInvalid || undefined}
      isDisabled={isDisabled}
    >
      <CalendarDays
        size={20}
        aria-hidden
      />
    </Button>
  </Group>
)
