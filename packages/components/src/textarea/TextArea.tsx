'use client'

import * as React from 'react'
import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  useContextProps,
  TextAreaContext,
} from 'react-aria-components'
import clsx from 'clsx'
import styles from './TextArea.module.css'

export interface TextAreaProps extends AriaTextAreaProps {
  /**
   * Whether to show the character counter or not
   * @default
   * false
   */
  showCounter?: boolean
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ showCounter, ...props }, ref) => {
    ;[props, ref] = useContextProps(props, ref, TextAreaContext)

    const [value, setValue] = React.useState(
      props.defaultValue?.toString() ?? props.value?.toString() ?? '',
    )

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value)
      props.onFocus && props.onFocus(event)
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value)
      props.onChange && props.onChange(event)
    }

    // TODO: What do we do with the counter?
    const Count = () => {
      if (props.maxLength !== undefined) {
        return (
          <span
            className={clsx(
              styles.count,
              value.length > props.maxLength && styles.countExceeded,
            )}
          >
            {value.length} / {props.maxLength}
          </span>
        )
      }

      if (showCounter) {
        return <span className={styles.count}>{value.length}</span>
      }

      return null
    }

    return (
      <>
        <Count />
        <AriaTextArea
          {...props}
          value={value}
          ref={ref}
          className={clsx(styles.textArea, props.className)}
          onFocus={handleFocus}
          onChange={handleChange}
        />
      </>
    )
  },
)
