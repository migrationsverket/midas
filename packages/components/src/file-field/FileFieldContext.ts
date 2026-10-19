import { createContext, useContext } from 'react'

export interface FileFieldContextValue {
  'aria-describedby': string
  isInvalid: boolean
}

export const FileFieldContext = createContext<FileFieldContextValue | null>(
  null,
)

export const useFileFieldContext = () => useContext(FileFieldContext)
