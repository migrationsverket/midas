import { FocusRing } from '@react-aria/focus'
import React from 'react'
import { SelectProps } from '../types'
import { AriaButtonProps, useButton, useObjectRef } from 'react-aria'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import type { DOMAttributes } from '@react-types/shared'
import styles from '../Select.module.css'

interface SelectButtonProps
  extends Pick<
    SelectProps,
    'autoFocus' | 'excludeFromTabOrder' | 'isDisabled'
  > {
  triggerProps: AriaButtonProps<'button'>
  valueProps: DOMAttributes
  isOpen?: boolean
  isActive?: boolean
  placeholder?: string
  children?: React.ReactNode
}

export const SelectButton = React.forwardRef<
  HTMLButtonElement,
  SelectButtonProps
>(
  (
    {
      autoFocus,
      triggerProps,
      excludeFromTabOrder,
      isDisabled,
      isActive,
      isOpen,
      placeholder,
      children,
      valueProps,
    },
    forwardedRef,
  ) => {
    const ref = useObjectRef(forwardedRef)
    const { buttonProps } = useButton(
      { ...triggerProps, autoFocus, excludeFromTabOrder, isDisabled },
      ref,
    )

    return (
      <FocusRing
        focusRingClass={styles.buttonFocused}
        autoFocus={autoFocus}
      >
        <div className={styles.selectContainer}>
          <button
            {...buttonProps}
            className={clsx(styles.button, {
              [styles.buttonOpen]: isOpen,
              [styles.buttonActive]: isActive,
              [styles.buttonDisabled]: isDisabled,
            })}
            type='button'
            ref={ref}
          >
            {placeholder && <span {...valueProps}>{placeholder}</span>}
            <div
              className={styles.icon}
              aria-hidden='true'
            >
              <ChevronDown size={20} />
            </div>
          </button>
          {children}
        </div>
      </FocusRing>
    )
  },
)
