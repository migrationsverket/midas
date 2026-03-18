'use client'

import { Trash2 } from 'lucide-react'
import { Button } from '../button'
import { useLocalizedStringFormatter } from '../utils/intl'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'
import messages from './intl/translations.json'

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
  const strings = useLocalizedStringFormatter(messages)

  return (
    <li
      id={id}
      className={clsx(styles.fileListItem, className)}
    >
      <span className={styles.fileInfo}>
        <span className={styles.fileName}>{fileName}</span>
        {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
      </span>
      {onDelete && (
        <Button
          variant='icon'
          onPress={onDelete}
          aria-label={`${strings.format('removeFile')} ${fileName}`}
          className={styles.deleteButton}
        >
          <Trash2
            size={20}
            aria-hidden
          />
        </Button>
      )}
    </li>
  )
}
