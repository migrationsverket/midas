import { MenuTriggerState, useMenuTriggerState } from '@react-stately/menu'
import { useState } from 'react'
import {Key} from 'react-aria'

import {
  MultiSelectListState,
  useMultiSelectListState
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
  Validation
} from '@react-types/shared'

/** Added this for a better output, will see how this plays out */
interface ArraySelection extends Omit<MultipleSelection, 'onSelectionChange'>{
  onSelectionChange: (value: Selection | Key[]) => void
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
    MenuTriggerState {
  /** Whether the select is currently focused. */
  isFocused: boolean

  /** Sets whether the select is focused. */
  setFocused(isFocused: boolean): void
}

export function useMultiSelectState<T extends object>(
  props: MultiSelectProps<T>
): MultiSelectState<T> {
  const [isFocused, setFocused] = useState(false)

  const triggerState = useMenuTriggerState(props)
  const listState = useMultiSelectListState({
    ...props,
    onSelectionChange: keys => {
      if (props.onSelectionChange != null) {
        if (keys === 'all') {
          // This may change back to "all" once we will implement async loading of additional
          // items and differentiation between "select all" vs. "select visible".
          props.onSelectionChange(Array.from(listState.collection.getKeys()))
        } else {
          props.onSelectionChange(Array.from(keys))
        }
      }

      // Multi select stays open after item selection
      if (props.selectionMode === 'single') {
        triggerState.close()
      }
    }
  })

  return {
    ...listState,
    ...triggerState,
    close() {
      triggerState.close()
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
    setFocused
  }
}
