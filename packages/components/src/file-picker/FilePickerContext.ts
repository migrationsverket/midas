import { createContext, useContext } from 'react'

export interface FilePickerContextValue {
  'aria-describedby': string
  isInvalid: boolean
}

export const FilePickerContext = createContext<FilePickerContextValue | null>(
  null,
)

export const useFilePickerContext = () => useContext(FilePickerContext)
