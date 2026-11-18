import { forwardRef, useContext, type KeyboardEventHandler } from 'react'
import {
  Input,
  type InputProps,
  ComboBoxStateContext,
} from 'react-aria-components'

export const ComboBoxInput = forwardRef<HTMLInputElement, InputProps>(
  ({ onKeyDown, ...props }, ref) => {
    const state = useContext(ComboBoxStateContext)

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
      if (
        event.key === 'Backspace' &&
        event.currentTarget.value === '' &&
        event.currentTarget.selectionStart === 0
      ) {
        const selectedItems = state?.selectedItems ?? []
        const lastSelectedItem = selectedItems[selectedItems.length - 1]

        if (lastSelectedItem) {
          state?.selectionManager.toggleSelection(lastSelectedItem.key)
        }
      }

      onKeyDown?.(event)
    }

    // The tags show what's selected, and the placeholder would be cut off
    // next to them. An empty string, since undefined wouldn't override the
    // placeholder React Aria passes through context
    const hasTags =
      state?.selectionManager.selectionMode === 'multiple' &&
      state.selectedItems.length > 0

    return (
      <Input
        {...props}
        {...(hasTags && { placeholder: '' })}
        onKeyDown={handleKeyDown}
        ref={ref}
      />
    )
  },
)

ComboBoxInput.displayName = 'ComboBoxInput'
