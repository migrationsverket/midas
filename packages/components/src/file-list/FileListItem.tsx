'use client'

import { GridListItem } from 'react-aria-components'
import { Trash2 } from 'lucide-react'
import { Button } from '../button'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'

export interface FileListItemProps {
  id: string
  fileName: string
  fileSize?: string
  onDelete?: () => void
  className?: string
}

export const FileListItem = ({
  id,
  fileName,
  fileSize,
  onDelete,
  className,
}: FileListItemProps) => {
  return (
    <GridListItem
      id={id}
      textValue={fileName}
      className={clsx(styles.fileListItem, className)}
    >
      <span className={styles.fileInfo}>
        <span className={styles.fileName}>{fileName}</span>
        {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
      </span>
      {onDelete && (
        <Button
          variant='icon'
          slot={null}
          onPress={onDelete}
          aria-label={`Remove ${fileName}`}
          className={styles.deleteButton}
        >
          <Trash2
            size={20}
            aria-hidden
          />
        </Button>
      )}
    </GridListItem>
  )
}
