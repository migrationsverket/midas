'use client'

import { GridList, GridListProps } from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'

export type FileListProps<T extends object> = GridListProps<T>

export const FileList = <T extends object>({
  className,
  selectionMode = 'none',
  ...props
}: FileListProps<T>) => {
  return (
    <GridList
      {...props}
      selectionMode={selectionMode}
      className={clsx(styles.fileList, className)}
    />
  )
}
