'use client'

import type { HTMLAttributes } from 'react'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'

export type FileListProps = HTMLAttributes<HTMLUListElement>

export const FileList = ({ className, children, ...props }: FileListProps) => {
  return (
    <ul
      {...props}
      className={clsx(styles.fileList, className)}
    >
      {children}
    </ul>
  )
}
