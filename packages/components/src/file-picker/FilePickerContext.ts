import { createContext, useContext, type RefObject } from 'react'

export interface FilePickerContextValue {
  'aria-describedby': string
  isInvalid: boolean
  isDisabled: boolean
  acceptedFileTypes?: string[]
  allowsMultiple: boolean
  /** The selected files */
  files: File[]
  /** Adds files to the selection, or replaces it unless `allowsMultiple` */
  addFiles: (files: File[]) => void
  removeFile: (file: File) => void
  /** Attached to the FileTrigger's button, focused when the field is invalid on submit */
  triggerRef: RefObject<HTMLButtonElement | null>
}

export const FilePickerContext = createContext<FilePickerContextValue | null>(
  null,
)

export const useFilePickerContext = () => useContext(FilePickerContext)
