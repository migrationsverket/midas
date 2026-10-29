'use client'

import {
  FileTrigger as AriaFileTrigger,
  ButtonContext,
  type FileTriggerProps,
} from 'react-aria-components'
import type { ButtonProps } from '../button'
import { useFilePickerContext } from '../file-picker/FilePickerContext'

export const FileTrigger = ({ children, ...props }: FileTriggerProps) => {
  const filePicker = useFilePickerContext()

  // Scoped to the trigger's own button, so other buttons inside a FilePicker
  // (e.g. FileList's delete buttons) aren't affected. Props set directly on
  // the Button still win.
  const buttonProps: ButtonProps = {
    variant: 'secondary',
    'aria-describedby': filePicker?.['aria-describedby'],
    isDisabled: filePicker?.isDisabled || undefined,
  }

  return (
    <AriaFileTrigger {...props}>
      <ButtonContext.Provider value={buttonProps}>
        {children}
      </ButtonContext.Provider>
    </AriaFileTrigger>
  )
}
