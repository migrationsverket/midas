'use client'

import { useRef, type RefObject } from 'react'
import {
  FileTrigger as AriaFileTrigger,
  ButtonContext,
  type FileTriggerProps,
} from 'react-aria-components'
import type { ButtonProps } from '../button'
import { useFilePickerContext } from '../file-picker/FilePickerContext'

export const FileTrigger = ({
  children,
  onSelect,
  acceptedFileTypes,
  allowsMultiple,
  ...props
}: FileTriggerProps) => {
  const filePicker = useFilePickerContext()
  const inputRef = useRef<HTMLInputElement>(null)

  // Scoped to the trigger's own button, so other buttons inside a FilePicker
  // (e.g. FileList's delete buttons) aren't affected. Props set directly on
  // the Button still win.
  const buttonProps: ButtonProps & {
    ref?: RefObject<HTMLButtonElement | null>
  } = {
    variant: 'secondary',
    'aria-describedby': filePicker?.['aria-describedby'],
    isDisabled: filePicker?.isDisabled || undefined,
    ref: filePicker?.triggerRef,
  }

  const handleSelect = (fileList: FileList | null) => {
    if (filePicker && fileList) filePicker.addFiles(Array.from(fileList))
    onSelect?.(fileList)
    // Inside a FilePicker the selection lives in its state. Clear the input,
    // or picking a file that was removed again wouldn't fire a change.
    if (filePicker && inputRef.current) inputRef.current.value = ''
  }

  return (
    <AriaFileTrigger
      {...props}
      ref={inputRef}
      acceptedFileTypes={acceptedFileTypes ?? filePicker?.acceptedFileTypes}
      allowsMultiple={allowsMultiple ?? filePicker?.allowsMultiple}
      onSelect={handleSelect}
    >
      <ButtonContext.Provider value={buttonProps}>
        {children}
      </ButtonContext.Provider>
    </AriaFileTrigger>
  )
}
