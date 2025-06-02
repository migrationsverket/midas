import { useCallback, useEffect, useState } from 'react'
import { useMenuTriggerState } from '@react-stately/menu'
import { useFormValidationState } from '@react-stately/form'
import { useMultiSelectListState } from './useMultiSelectListState'
import type { MultiSelectState, MultiSelectStateProps } from './types'
import { ListBoxOption } from '../list-box'

export function useMultiSelectState<T extends ListBoxOption>(
  props: MultiSelectStateProps<T>,
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

  const resetValidation = useCallback(() => {
    validationState.resetValidation()
    validationState.commitValidation()
  }, [validationState])

  useEffect(() => {
    if (isSingleSelect && isAnyKeySelected) {
      resetValidation()
    }
  }, [isAnyKeySelected, isSingleSelect, resetValidation])

  return {
    ...multiSelectListState,
    ...triggerState,
    close() {
      triggerState.close()
      if (isAnyKeySelected) {
        resetValidation()
      }
    },
    open() {
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
