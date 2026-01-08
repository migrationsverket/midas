import * as React from 'react'
import {
  Button,
  Group,
  DatePickerStateContext,
  DateRangePickerStateContext,
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
import { clsx } from 'clsx'
import { ClearButton } from '../clear-button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './DatePicker.module.css'
import { DatePickerProps } from './DatePicker'
import { FocusScope, useFocusManager } from '@react-aria/focus'
import { isRangePickerState } from './utils'

interface DatePickerInputFieldProps
  extends Pick<
    DatePickerProps,
    'isDisabled' | 'isInvalid' | 'isReadOnly' | 'size' | 'isClearable'
  > {
  children?: React.ReactNode
}

const DatePickerClearButton = ({
  isClearable,
  isDisabled,
  isReadOnly,
  size,
}: DatePickerInputFieldProps) => {
  const datePickerState = React.useContext(DatePickerStateContext)
  const dateRangePickerState = React.useContext(DateRangePickerStateContext)
  const strings = useLocalizedStringFormatter(messages)
  const focusManager = useFocusManager()

  const state = dateRangePickerState ?? datePickerState
  const isValueSet = isRangePickerState(state)
    ? !!state.value.start && state.value.end
    : !!state?.value
  const isVisible = isClearable && isValueSet && !isReadOnly

  const handlePress = () => {
    state?.setValue(null)
    focusManager?.focusFirst()
  }

  return isVisible ? (
    <ClearButton
      onPress={handlePress}
      size={size}
      isDisabled={isDisabled}
      aria-label={strings.format('clear')}
      className={clsx(styles.clearButton, {
        [styles.medium]: size === 'medium',
      })}
    />
  ) : null
}

export const DatePickerInputField: React.FC<DatePickerInputFieldProps> = ({
  children,
  isDisabled,
  isInvalid,
  isReadOnly,
  size = 'large',
  isClearable = false,
}) => {
  return (
    <Group
      className={clsx(styles.inputField, {
        [styles.medium]: size === 'medium',
        [styles.readOnly]: isReadOnly,
      })}
    >
      <FocusScope>
        {children}
        <div className={styles.buttonGroup}>
          <DatePickerClearButton
            isClearable={isClearable}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
          />
          <Button
            className={clsx(styles.calendarButton, {
              [styles.medium]: size === 'medium',
              [styles.readOnly]: isReadOnly,
            })}
            data-invalid={isInvalid || undefined}
            isDisabled={isDisabled}
          >
            <CalendarDays
              aria-hidden
              size={20}
            />
          </Button>
        </div>
      </FocusScope>
    </Group>
  )
}
