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
import { SingleSelectListState, useSingleSelectListState } from 'react-stately'

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
    SingleSelectListState<T>,
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

  const multiSelectListState = useMultiSelectListState({
    ...props,
    onSelectionChange: keys => {
      const { onSelectionChange } = props

      if (onSelectionChange != null) {
        if (keys === 'all') {
          // This may change back to "all" once we will implement async loading of additional
          // items and differentiation between "select all" vs. "select visible".
          onSelectionChange(
            Array.from(multiSelectListState.collection.getKeys()),
          )
        } else {
          onSelectionChange(Array.from(keys))
        }
      }

      // Multi select stays open after item selection
      if (selectionMode === 'single') {
        triggerState.close()
      }
    },
  })

  const singleSelectListState = useSingleSelectListState({
    ...props,
    onSelectionChange: key => {
      const { onSelectionChange } = props

      if (onSelectionChange != null) {
        if (key === 'all') {
          // This may change back to "all" once we will implement async loading of additional
          // items and differentiation between "select all" vs. "select visible".
          onSelectionChange(
            Array.from(singleSelectListState.collection.getKeys()),
          )
        } else {
          onSelectionChange(key)
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
        ? multiSelectListState.selectedKeys.values().next().value?.toString()
        : singleSelectListState.selectedKey,
  })

  // Reset validation for single selects when the selected key changes.
  useEffect(() => {
    if (selectionMode === 'single' && singleSelectListState.selectedKey) {
      validationState.resetValidation()
      validationState.commitValidation()
    }
  }, [selectionMode, singleSelectListState.selectedKey, validationState])

  return {
    ...multiSelectListState,
    ...singleSelectListState,
    ...triggerState,
    close() {
      triggerState.close()
      if (multiSelectListState.selectedKeys.size) {
        validationState.resetValidation()
        validationState.commitValidation()
      }
    },
    open() {
      // Don't open if the collection is empty.
      if (multiSelectListState.collection.size !== 0) {
        triggerState.open()
      }
    },
    toggle(focusStrategy) {
      if (multiSelectListState.collection.size !== 0) {
        triggerState.toggle(focusStrategy)
      }
    },
    isFocused,
    setFocused,
    ...validationState,
  }
}
