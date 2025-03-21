import { MenuTriggerState, useMenuTriggerState } from '@react-stately/menu'
import { useEffect, useState } from 'react'
import { Key } from 'react-aria'

import {
  MultiSelectListState,
  useMultiSelectListState,
} from './useMultiSelectListState'

import type { OverlayTriggerProps } from '@react-types/overlays'
import type {
  AsyncLoadable,
  CollectionBase,
  FocusableProps,
  InputBase,
  LabelableProps,
  MultipleSelection,
  TextInputBase,
  Validation,
  Selection,
} from '@react-types/shared'

import {
  useFormValidationState,
  type FormValidationState,
} from '@react-stately/form'

/** Added this for a better output, will see how this plays out */
interface ArraySelection extends Omit<MultipleSelection, 'onSelectionChange'> {
  onSelectionChange?: (value: Selection | Key | Key[]) => void
}

export interface MultiSelectProps<T>
  extends CollectionBase<T>,
    AsyncLoadable,
    Omit<InputBase, 'isReadOnly'>,
    Validation,
    LabelableProps,
    TextInputBase,
    ArraySelection,
    // MultipleSelection,
    FocusableProps,
    OverlayTriggerProps {
  /**
   * Whether the menu should automatically flip direction when space is limited.
   * @default true
   */
  shouldFlip?: boolean
}

export interface MultiSelectState<T>
  extends MultiSelectListState<T>,
    MenuTriggerState,
    FormValidationState {
  /** Whether the select is currently focused. */
  isFocused: boolean

  /** Sets whether the select is focused. */
  setFocused(isFocused: boolean): void
}

export function useMultiSelectState<T extends object>(
  props: MultiSelectProps<T>,
): MultiSelectState<T> {
  const { selectionMode } = props
  const [isFocused, setFocused] = useState(false)

  const triggerState = useMenuTriggerState(props)

  const listState = useMultiSelectListState({
    ...props,
    onSelectionChange: keys => {
      const { onSelectionChange } = props

      if (onSelectionChange != null) {
        if (keys === 'all') {
          // This may change back to "all" once we will implement async loading of additional
          // items and differentiation between "select all" vs. "select visible".
          onSelectionChange(Array.from(listState.collection.getKeys()))
        } else {
          selectionMode === 'single'
            ? onSelectionChange(keys.values().next().value as Key)
            : onSelectionChange(Array.from(keys))
        }
      }

      // Multi select stays open after item selection
      if (selectionMode === 'single') {
        triggerState.close()
      }
    },
  })

  const validationState = useFormValidationState({
    ...props,
    validationBehavior: 'native',
    value:
      selectionMode === 'single'
        ? listState.selectedKeys.values().next().value?.toString()
        : listState.selectedKeys,
  })

  // Reset validation for single selects when the selected key changes.
  useEffect(() => {
    if (selectionMode === 'single' && listState.selectedKeys.size) {
      validationState.resetValidation()
      validationState.commitValidation()
    }
  }, [listState.selectedKeys.size, selectionMode, validationState])

  return {
    ...listState,
    ...triggerState,
    close() {
      triggerState.close()
      if (listState.selectedKeys.size) {
        validationState.resetValidation()
        validationState.commitValidation()
      }
    },
    open() {
      // Don't open if the collection is empty.
      if (listState.collection.size !== 0) {
        triggerState.open()
      }
    },
    toggle(focusStrategy) {
      if (listState.collection.size !== 0) {
        triggerState.toggle(focusStrategy)
      }
    },
    isFocused,
    setFocused,
    ...validationState,
  }
}
