'use client'

import { SearchFieldProps as AriaSearchFieldProps } from 'react-aria-components'
import { Search, X } from 'lucide-react'
import TextFieldStyles from '../textfield/TextField.module.css'
import { Button } from '../button'
import styles from './SearchField.module.css'
import clsx from '../utils/clsx'
import * as React from 'react'
import { useSearchFieldState } from 'react-stately'
import { useSearchField } from 'react-aria'
import type { ValidationError } from '@react-types/shared'
import { Size } from '../common/types'
import { FieldError } from '../field-error'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface SearchFieldProps extends AriaSearchFieldProps {
  /** Placeholder text */
  placeholder: string
  /**
   *  Text displayed on the 'search' button
   *  @default
   *  'Sök'
   */
  buttonText?: string
  /**
   * A custom error message if using the isInvalid prop.
   */
  errorMessage?: string
  errorPosition?: 'top' | 'bottom'
  /** Component size (large: height 48px, medium: height 40px)
   *  @default 'large'
   * */
  size?: Size
}

function isValidationError(
  error: ValidationError | true | null | undefined,
): error is ValidationError {
  return !!(error as ValidationError)?.length
}

export const SearchField: React.FC<SearchFieldProps> = ({
  errorPosition = 'top',
  size = 'large',
  ...props
}) => {
  const { value, setValue } = useSearchFieldState(props)
  const strings = useLocalizedStringFormatter(messages)

  const ref = React.useRef<HTMLInputElement>(null)

  const { inputProps, isInvalid, validationErrors, clearButtonProps } =
    useSearchField(
      {
        ...props,
        label: props.placeholder,
        validationBehavior: 'native',
      },
      { value, setValue },
      ref,
    )

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setValue(target.value)

  const handleClear = () => setValue('')

  const handleSubmit = () => {
    const reFocus =
      (props.validate && isValidationError(props.validate(value))) ||
      isInvalid ||
      !value

    if (reFocus) {
      ref.current?.focus()
      return
    }

    if (props.onSubmit) {
      props.onSubmit(value)
    }
  }

  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div
      className={clsx(styles.container, props.className)}
      data-disabled={inputProps.disabled}
    >
      {errorPosition === 'top' && (
        <FieldError isInvalid={isInvalid}>
          {props.errorMessage ?? validationErrors.join(' ')}
        </FieldError>
      )}
      <div className={styles.inner}>
        <div
          className={clsx(styles.inputContainer, {
            [styles.medium]: size === 'medium',
          })}
        >
          <Search
            size={20}
            className={styles.icon}
          />
          <input
            {...inputProps}
            {...(inputProps.disabled && { 'data-disabled': true })}
            className={clsx(
              TextFieldStyles.input,
              styles.input,
              inputProps.className,
              { [styles.medium]: size === 'medium' },
            )}
            ref={ref}
            onChange={handleChange}
            value={value}
            aria-invalid={isInvalid}
            onKeyDown={handleKeyDown}
            aria-label={props.placeholder}
            aria-labelledby=''
          />
          {value.length > 0 && (
            <Button
              variant='icon'
              size={size}
              className={clsx(styles.clear, {
                [styles.medium]: size === 'medium',
              })}
              onPress={handleClear}
              {...clearButtonProps}
            >
              <X
                size={20}
                aria-hidden
              />
            </Button>
          )}
        </div>
        <Button
          size={size}
          isDisabled={props.isDisabled}
          excludeFromTabOrder
          onPress={handleSubmit}
          type='button'
        >
          {props.buttonText ? props.buttonText : strings.format('search')}
        </Button>
      </div>
      {errorPosition === 'bottom' && (
        <FieldError isInvalid={isInvalid}>
          {props.errorMessage ?? validationErrors.join(' ')}
        </FieldError>
      )}
    </div>
  )
}
