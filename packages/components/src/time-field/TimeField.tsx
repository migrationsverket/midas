import * as React from 'react'
import {
  TimeField as AriaTimeField,
  type TimeFieldProps as AriaTimeFieldProps,
  type TimeValue,
  type ValidationResult,
  TimeFieldStateContext,
} from 'react-aria-components'
import { FocusScope, useFocusManager } from '@react-aria/focus'
import clsx from '../utils/clsx'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { type InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { ClearButton } from '../clear-button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './TimeField.module.css'
import { type Size } from '../common/types'
import { LabelWrapper } from '../label/LabelWrapper'

export interface TimeFieldProps extends AriaTimeFieldProps<TimeValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   */
  size?: Size
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  /** Show a clear button to remove the selected time
   * @default false
   */
  isClearable?: boolean
}

const TimeFieldClearButton: React.FC<
  Pick<TimeFieldProps, 'isClearable' | 'size' | 'isDisabled' | 'isReadOnly'>
> = ({ isClearable, size, isDisabled, isReadOnly }) => {
  const strings = useLocalizedStringFormatter(messages)
  const state = React.useContext(TimeFieldStateContext)
  const focusManager = useFocusManager()

  const handlePress = () => {
    state?.setValue(null)
    focusManager?.focusFirst()
  }

  const isVisible = isClearable && state?.value != null && !isReadOnly

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

export const TimeField: React.FC<TimeFieldProps> = ({
  className,
  description,
  errorMessage,
  errorPosition = 'top',
  label,
  size = 'large',
  popover,
  isClearable = false,
  isReadOnly,
  isDisabled,
  ...rest
}) => {
  return (
    <AriaTimeField
      {...rest}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      className={clsx(styles.timeField, className)}
    >
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      {errorPosition === 'top' && <FieldError>{errorMessage}</FieldError>}
      <div
        className={clsx(styles.inputField, {
          [styles.medium]: size === 'medium',
        })}
        data-testid='time-field_input-field'
      >
        <FocusScope>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <TimeFieldClearButton
            isClearable={isClearable}
            size={size}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
          />
        </FocusScope>
      </div>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
    </AriaTimeField>
  )
}
