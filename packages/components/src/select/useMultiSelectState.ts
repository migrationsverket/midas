import { MenuTriggerState, useMenuTriggerState } from '@react-stately/menu'
import { useEffect, useState } from 'react'
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
} from '@react-types/shared'
import {
  useFormValidationState,
  type FormValidationState,
} from '@react-stately/form'

export interface MultiSelectProps<T>
  extends CollectionBase<T>,
    AsyncLoadable,
    Omit<InputBase, 'isReadOnly'>,
    Validation,
    LabelableProps,
    TextInputBase,
    MultipleSelection,
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
  const [isFocused, setFocused] = useState(false)

  const triggerState = useMenuTriggerState(props)

  const isSingleSelect = props.selectionMode === 'single'

  const multiSelectListState = useMultiSelectListState({
    ...props,
    onSelectionChange: keys => {
      props.onSelectionChange && props.onSelectionChange(keys)

      if (isSingleSelect) {
        triggerState.close()
      }
    },
  })

  const validationState = useFormValidationState({
    ...props,
    validationBehavior: 'native',
    value: multiSelectListState.selectedKeys,
  })

  const isCollectionEmpty = multiSelectListState.collection.size === 0
  const isAnyKeySelected = !!multiSelectListState.selectedKeys.size

  // Reset validation for single selects when the selected key changes.
  useEffect(() => {
    if (isSingleSelect && isAnyKeySelected) {
      validationState.resetValidation()
      validationState.commitValidation()
    }
  }, [isAnyKeySelected, isSingleSelect, validationState])

  return {
    ...multiSelectListState,
    ...triggerState,
    close() {
      triggerState.close()
      if (isAnyKeySelected) {
        validationState.resetValidation()
        validationState.commitValidation()
      }
    },
    open() {
      // Don't open if the collection is empty.
      if (!isCollectionEmpty) {
        triggerState.open()
      }
    },
    toggle(focusStrategy) {
      if (!isCollectionEmpty) {
        triggerState.toggle(focusStrategy)
      }
    },
    isFocused,
    setFocused,
    ...validationState,
  }
}
