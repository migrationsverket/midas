'use client'

import {
  FileTrigger as AriaFileTrigger,
  DropZone as AriaDropZone, DropZoneProps, FileTriggerProps
} from 'react-aria-components'
import * as React from 'react'
import styles from './FileUpload.module.css'
import clsx from 'clsx'

export const DropZone: React.FC<DropZoneProps> = ({ className, ...rest }) => {
  return (
      <AriaDropZone
        {...rest}
        className={clsx(styles.dropzone, className)}
      />
  )
}

export const FileTrigger: React.FC<FileTriggerProps> = (props) => {
  return (
    <AriaFileTrigger {...props}/>
  )
}
