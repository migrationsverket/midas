'use client'

import {
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  Input as AriaInput,
  FormContext,
  useSlottedContext,
} from 'react-aria-components'
import { Search, X } from 'lucide-react'
import TextFieldStyles from '../textfield/TextField.module.css'
import { Button } from '../button'
import styles from './SearchField.module.css'
import clsx from '../utils/clsx'
import * as React from 'react'
import type { ValidationError } from '@react-types/shared'
import { Size } from '../common/types'
import { FieldError } from '../field-error'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

export interface SearchFieldProps extends Omit<AriaSearchFieldProps, 'children'> {
  /** Placeholder text */
  placeholder: string
  /**
   * Whether to render a built-in submit button.
   *
   * **Future flag:** pass `showButton={false}` to opt into the v18 default today.
   * In v18 the button will no longer be shown by default — compose your own `Button`
   * outside `SearchField` instead. This prop will be removed in v18.
   *
   * @see https://github.com/migrationsverket/midas/issues/1109
   *
   * @example
   * // Opt into v18 behavior now:
   * <SearchField placeholder="Sök" onSubmit={handleSubmit} />
   * <Button onPress={() => handleSubmit(value)}>Sök</Button>
   *
   * @default true
   */
  showButton?: boolean
  /**
   * Text displayed on the built-in submit button.
   *
   * @deprecated since v17.9.0 — use your own `Button` instead. See `showButton`.
   * @default 'Sök'
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
  showButton,
  className,
  errorMessage,
  placeholder,
  validationBehavior,
  ...props
}) => {
  const strings = useLocalizedStringFormatter(messages)
  const formProps = useSlottedContext(FormContext)
  const resolvedValidationBehavior =
    validationBehavior ?? formProps?.validationBehavior ?? 'aria'
  const shouldShowButton = showButton !== false

  const handleSubmit = (value: string) => {
    if (!value || props.isInvalid) return
    if (props.validate && isValidationError(props.validate(value))) return
    props.onSubmit?.(value)
  }

  return (
    <AriaSearchField
      {...props}
      onSubmit={handleSubmit}
      aria-label={props['aria-label'] ?? placeholder}
      className={clsx(styles.container, className)}
      validationBehavior={resolvedValidationBehavior}
    >
      {({ state }) => (
        <>
          {errorPosition === 'top' && (
            <FieldError>
              {({ validationErrors }) => errorMessage ?? validationErrors.join(' ')}
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
              <AriaInput
                placeholder={placeholder}
                className={clsx(
                  TextFieldStyles.input,
                  styles.input,
                  { [styles.medium]: size === 'medium' },
                )}
              />
              {state.value.length > 0 && (
                <Button
                  variant='icon'
                  size={size}
                  className={clsx(styles.clear, {
                    [styles.medium]: size === 'medium',
                  })}
                >
                  <X
                    size={20}
                    aria-hidden
                  />
                </Button>
              )}
            </div>
            {shouldShowButton && (
              <Button
                slot={null}
                excludeFromTabOrder
                size={size}
                isDisabled={props.isDisabled}
                type='button'
                onPress={() => handleSubmit(state.value)}
              >
                {props.buttonText ?? strings.format('search')}
              </Button>
            )}
          </div>
          {errorPosition === 'bottom' && (
            <FieldError>
              {({ validationErrors }) => errorMessage ?? validationErrors.join(' ')}
            </FieldError>
          )}
        </>
      )}
    </AriaSearchField>
  )
}
