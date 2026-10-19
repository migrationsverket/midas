'use client'

import {
  FileTrigger as AriaFileTrigger,
  ButtonContext,
  type FileTriggerProps,
} from 'react-aria-components'
import type { ButtonProps } from '../button'
import { useFileFieldContext } from '../file-field/FileFieldContext'

export const FileTrigger = ({ children, ...props }: FileTriggerProps) => {
  const fileField = useFileFieldContext()

  // Scoped to the trigger's own button, so other buttons inside a FileField
  // (e.g. FileList's delete buttons) aren't affected. Props set directly on
  // the Button still win.
  const buttonProps: ButtonProps = {
    variant: 'secondary',
    'aria-describedby': fileField?.['aria-describedby'],
  }

  return (
    <AriaFileTrigger {...props}>
      <ButtonContext.Provider value={buttonProps}>
        {children}
      </ButtonContext.Provider>
    </AriaFileTrigger>
  )
}
