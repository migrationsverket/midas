import React from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import type { SelectProps, MultiSelectState } from './types'
import type { ListBoxOption } from '../list-box'
import styles from './Select.module.css'

interface SelectTriggerProps
  extends Omit<SelectProps, 'children'>,
    AriaButtonProps<'button'> {
  state: MultiSelectState<ListBoxOption>
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  autoFocus,
  excludeFromTabOrder,
  isDisabled,
  size = 'large',
  isOpen,
  isInvalid,
  selectionMode,
  state: { selectedItems },
  placeholder,
  children,
  triggerRef,
  ...rest
}) => {
  const { buttonProps } = useButton(
    { autoFocus, excludeFromTabOrder, isDisabled, ...rest },
    triggerRef,
  )

  const isMultiSelect = selectionMode === 'multiple'

  return (
    <div
      className={styles.triggerContainer}
      data-disabled={isDisabled || undefined}
    >
      <button
        {...buttonProps}
        autoFocus={autoFocus}
        className={clsx(styles.trigger, {
          [styles.medium]: size === 'medium',
        })}
        data-disabled={isDisabled || undefined}
        data-invalid={isInvalid || undefined}
        data-open={isOpen || undefined}
        ref={triggerRef}
        type='button'
      >
        {isMultiSelect && !selectedItems ? <span>{placeholder}</span> : null}

        {!isMultiSelect ? (
          <span>
            {selectedItems ? selectedItems[0].textValue : placeholder}
          </span>
        ) : null}

        <div
          className={styles.icon}
          aria-hidden='true'
        >
          <ChevronDown size={20} />
        </div>
      </button>
      {children}
    </div>
  )
}
