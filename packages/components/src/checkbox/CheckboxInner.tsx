import { forwardRef } from 'react'
import { mergeProps, VisuallyHidden } from 'react-aria'
import { FieldErrorContext } from 'react-aria-components'
import { clsx } from 'clsx'
import { Minus, Check } from 'lucide-react'
import { CheckboxInnerProps } from './types'
import { FieldError } from '../field-error'
import { Text } from '../text'
import styles from './Checkbox.module.css'
import { variables } from '@midas-ds/theme'

export const CheckboxInner = forwardRef<HTMLLabelElement, CheckboxInnerProps>(
  (
    {
      hoverResult,
      pressResult,
      focusRingAria,
      labelProps,
      slot,
      className,
      isSelected,
      isIndeterminate,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      inputProps,
      inputRef,
      children,
      description,
      errorMessage,
      errorPosition = 'top',
      descriptionProps,
      errorMessageProps,
      validationErrors,
      validationDetails,
    },
    ref,
  ) => {
    const { hoverProps, isHovered } = hoverResult
    const { pressProps, isPressed } = pressResult
    const { isFocused, isFocusVisible, focusProps } = focusRingAria

    const checkboxRow = (
      <label
        ref={ref}
        {...mergeProps(hoverProps, pressProps, labelProps)}
        slot={description || errorMessage ? undefined : slot || undefined}
        className={clsx(styles.checkbox, className)}
        data-hovered={isHovered || undefined}
        data-selected={isSelected || undefined}
        data-indeterminate={isIndeterminate || undefined}
        data-pressed={isPressed || undefined}
        data-disabled={isDisabled || undefined}
        data-readonly={isReadOnly || undefined}
        data-invalid={isInvalid || undefined}
        data-focused={isFocused || undefined}
        data-focus-visible={isFocusVisible || undefined}
        data-required={isRequired || undefined}
      >
        <div className={clsx(styles.checkboxInner)}>
          {isIndeterminate ? (
            <Minus
              size={14}
              color={variables.iconOnColor}
            />
          ) : (
            <Check
              size={14}
              color={variables.iconOnColor}
            />
          )}
        </div>
        <VisuallyHidden>
          <input
            {...mergeProps(inputProps, focusProps)}
            ref={inputRef}
          />
        </VisuallyHidden>
        {children}
      </label>
    )

    if (!description && !errorMessage) {
      return checkboxRow
    }

    const errorElement = errorMessage && (
      <FieldErrorContext.Provider
        value={{ isInvalid: !!isInvalid, validationErrors, validationDetails }}
      >
        <FieldError {...errorMessageProps}>{errorMessage}</FieldError>
      </FieldErrorContext.Provider>
    )

    return (
      <div
        className={styles.checkboxWrapper}
        slot={slot || undefined}
      >
        {description && (
          <Text
            slot='description'
            {...descriptionProps}
          >
            {description}
          </Text>
        )}
        {errorPosition === 'top' && errorElement}
        {checkboxRow}
        {errorPosition === 'bottom' && errorElement}
      </div>
    )
  },
)
CheckboxInner.displayName = 'CheckboxInner'
