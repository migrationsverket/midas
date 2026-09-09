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

    return (
      <Input
        {...props}
        onKeyDown={handleKeyDown}
        ref={ref}
      />
    )
  },
)

ComboBoxInput.displayName = 'ComboBoxInput'
