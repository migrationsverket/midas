'use client'

import {
  FileTrigger as AriaFileTrigger,
  ButtonContext,
  type FileTriggerProps,
} from 'react-aria-components'
import type { ButtonProps } from '../button'

export const FileTrigger = ({ children, ...props }: FileTriggerProps) => {
  // Scoped to the trigger's own button, so other buttons nearby aren't
  // affected. Props set directly on the Button still win.
  const buttonProps: ButtonProps = {
    variant: 'secondary',
  }

  return (
    <AriaFileTrigger {...props}>
      <ButtonContext.Provider value={buttonProps}>
        {children}
      </ButtonContext.Provider>
    </AriaFileTrigger>
  )
}
