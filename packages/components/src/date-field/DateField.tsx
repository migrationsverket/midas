import * as React from 'react'
import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  type DateValue,
  type ValidationResult,
  DateFieldStateContext,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { DateInput, DateSegment } from '../date-field'
import { FieldError } from '../field-error'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { ClearButton } from '../clear-button'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './DateField.module.css'
import { Size } from '../common/types'
import { LabelWrapper } from '../label/LabelWrapper'
import { FocusScope } from '@react-aria/focus'
import { useFocusManager } from '@react-aria/focus'

export interface DateFieldProps extends AriaDateFieldProps<DateValue> {
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  errorPosition?: 'top' | 'bottom'
  label?: string
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  /** Show a clear button to remove the selected date
   * @default false
   */
  isClearable?: boolean
}

const DateFieldClearButton: React.FC<DateFieldProps> = ({
  isClearable,
  size,
  isDisabled,
  isReadOnly,
}) => {
  const strings = useLocalizedStringFormatter(messages)
  const state = React.useContext(DateFieldStateContext)
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

export const DateField: React.FC<DateFieldProps> = ({
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
    <AriaDateField
      {...rest}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      className={clsx(styles.dateField, className)}
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
        data-testid='date-field_input-field'
      >
        <FocusScope>
          <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
          <DateFieldClearButton
            isClearable={isClearable}
            size={size}
            isDisabled={isDisabled}
            isReadOnly={isReadOnly}
          />
        </FocusScope>
      </div>
      {errorPosition === 'bottom' && <FieldError>{errorMessage}</FieldError>}
    </AriaDateField>
  )
}
