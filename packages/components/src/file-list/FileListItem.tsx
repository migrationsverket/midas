'use client'

import { Trash2, X } from 'lucide-react'
import { VisuallyHidden } from 'react-aria'
import { Button } from '../button'
import { ProgressBar } from '../progress-bar'
import { FeedbackStatusIcon } from '../common/FeedbackStatusIcon'
import { FieldError } from '../field-error'
import { useLocalizedStringFormatter } from '../utils/intl'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'
import messages from './intl/translations.json'

export interface FileListItemProps {
  fileName: string
  fileSize?: string
  /** @default 'idle' */
  status?: 'idle' | 'uploading' | 'success' | 'error'
  /** 0-100. Only meaningful when `status='uploading'`; omit for indeterminate. */
  progress?: number
  /** Shown below the row when `status='error'`. */
  errorMessage?: string
  onDelete?: () => void
  className?: string
}

export const FileListItem = ({
  fileName,
  fileSize,
  status = 'idle',
  progress,
  errorMessage,
  onDelete,
  className,
}: FileListItemProps) => {
  const strings = useLocalizedStringFormatter(messages)

  return (
    <li className={clsx(styles.fileListItem, className)}>
      <div className={clsx(styles.row, status === 'error' && styles.error)}>
        {status === 'uploading' && (
          <ProgressBar
            shape='circular'
            small
            value={progress}
            isIndeterminate={progress === undefined}
            aria-label={strings.format('uploading')}
            className={styles.statusIcon}
          />
        )}
        {status === 'success' && (
          <FeedbackStatusIcon
            status='success'
            aria-hidden
            className={styles.statusIcon}
          />
        )}
        <span className={styles.fileInfo}>
          <span className={styles.fileName}>{fileName}</span>
          {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
        </span>
        {onDelete && (
          <Button
            variant='icon'
            onPress={onDelete}
            aria-label={`${strings.format(
              status === 'uploading' ? 'cancelUpload' : 'removeFile',
            )} ${fileName}`}
            className={styles.deleteButton}
          >
            {status === 'uploading' ? (
              <X size={20} aria-hidden />
            ) : (
              <Trash2 size={20} aria-hidden />
            )}
          </Button>
        )}
      </div>
      {status === 'error' && errorMessage && (
        <FieldError isInvalid className={styles.error}>
          {errorMessage}
        </FieldError>
      )}
      {status === 'success' && (
        <VisuallyHidden role='status'>
          {strings.format('uploadComplete')}
        </VisuallyHidden>
      )}
    </li>
  )
}
