'use client'

import {
  Label,
  SearchFieldProps as AriaSearchFieldProps,
} from 'react-aria-components'
import { Search, X } from 'lucide-react'
import TextFieldStyles from '../textfield/TextField.module.css'
import { Button } from '../button'
import styles from './SearchField.module.css'
import clsx from 'clsx'
import * as React from 'react'

import { useSearchFieldState } from 'react-stately'
import { useSearchField } from 'react-aria'

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
   * A function that returns an error message if a given value is invalid.
   * Validation errors are displayed to the user when the form is submitted if validationBehavior="native".
   * For realtime validation, use the isInvalid prop instead.
   *
   * To override the behavior of the isRequired prop you can instead use this property to return a custom error message.
   */
  validate?: AriaSearchFieldProps['validate']
  /**
   * Whether user input is required on the input before form submission.
   * Currently have troubles displaying an error message, please use the validate property if it's needed.
   */
  isRequired?: AriaSearchFieldProps['isRequired']
  /**
   * A custom error message if using the isInvalid prop.
   */
  errorMessage?: string
}

export const SearchField: React.FC<SearchFieldProps> = props => {
  const { value, setValue } = useSearchFieldState(props)

  const ref = React.useRef<HTMLInputElement>(null)

  const {
    labelProps,
    inputProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    clearButtonProps,
  } = useSearchField(
    {
      ...props,
      label: props.placeholder,
      validationBehavior: 'native',
    },
    { value, setValue },
    ref,
  )

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setValue(value)

  const handleClear = () => setValue('')

  const handleSubmit = () => {
    if (props.validate && props.validate(value) !== true) {
      ref.current?.focus()
      return
    }

    if (isInvalid || (!value && props.isRequired)) {
      ref.current?.focus()
      return
    }

    if (props.onSubmit) {
      props.onSubmit(value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div>
      {isInvalid && (
        <div
          {...errorMessageProps}
          className={styles.fieldError}
        >
          {props.errorMessage ?? validationErrors.join(' ')}
        </div>
      )}
      <div className={styles.container}>
        <Label
          {...labelProps}
          hidden
        >
          {props.placeholder}
        </Label>
        <div className={styles.inputContainer}>
          <Search
            size={20}
            className={styles.icon}
          />
          <input
            {...inputProps}
            className={clsx(
              TextFieldStyles.input,
              styles.input,
              inputProps.className,
            )}
            ref={ref}
            onChange={handleChange}
            value={value}
            aria-invalid={isInvalid}
            onKeyDown={handleKeyDown}
          />
          {value.length > 0 && (
            <Button
              variant='icon'
              size='small'
              className={styles.clear}
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
          excludeFromTabOrder
          onPress={handleSubmit}
          type='button'
        >
          {props.buttonText ? props.buttonText : 'Sök'}
        </Button>
      </div>
    </div>
  )
}
