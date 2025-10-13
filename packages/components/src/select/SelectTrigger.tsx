import React from 'react'
import { AriaButtonProps, useButton } from 'react-aria'
import clsx from '../utils/clsx'
import { ChevronDown } from 'lucide-react'
import type { SelectProps, SelectionMode } from './types'
import type { ListBoxOption } from '../list-box'
import styles from './Select.module.css'
import { SelectState } from 'react-stately'

interface SelectTriggerProps<
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
> extends Omit<SelectProps<T, M>, 'children' | 'value'>,
    AriaButtonProps<'button'> {
  state: SelectState<T, M>
  triggerRef: React.MutableRefObject<HTMLButtonElement | null>
  children: React.ReactNode
}

export const SelectTrigger = <
  T extends ListBoxOption,
  M extends SelectionMode = 'single',
>({
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
}: SelectTriggerProps<T, M>) => {
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
        {isMultiSelect && !selectedItems.length ? (
          <span>{placeholder}</span>
        ) : null}

        {!isMultiSelect ? (
          <span>
            {selectedItems.length ? selectedItems[0].textValue : placeholder}
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
