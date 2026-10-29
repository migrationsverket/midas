import { createContext, useContext } from 'react'

export interface FilePickerContextValue {
  'aria-describedby': string
  isInvalid: boolean
  isDisabled: boolean
}

export const FilePickerContext = createContext<FilePickerContextValue | null>(
  null,
)

export const useFilePickerContext = () => useContext(FilePickerContext)
