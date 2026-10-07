'use client'

import { useId } from 'react'
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
  /**
   * Called when the cancel button is pressed while `status='uploading'` —
   * this is where you'd abort the in-flight request (e.g.
   * `XMLHttpRequest.abort()` or `AbortController.abort()`). Falls back to
   * `onDelete` if omitted, so an in-progress upload isn't silently left
   * running in the background with no way to stop it.
   */
  onCancel?: () => void
  /**
   * Called when the delete button is pressed for any status other than
   * `uploading` (use `onCancel` for that). `FileList` has no concept of
   * "uploaded" vs "local only" — if the file is already persisted
   * server-side by the time this fires, deleting it there too is your call.
   */
  onDelete?: () => void
  className?: string
}

export const FileListItem = ({
  fileName,
  fileSize,
  status = 'idle',
  progress,
  errorMessage,
  onCancel,
  onDelete,
  className,
}: FileListItemProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const isUploading = status === 'uploading'
  const isSuccess = status === 'success'
  const hasError = status === 'error' && !!errorMessage
  const errorId = useId()
  const onPress = isUploading ? (onCancel ?? onDelete) : onDelete

  return (
    <li
      className={clsx(styles.fileListItem, className)}
      data-status={status}
    >
      <div className={styles.row}>
        <span className={styles.iconSlot}>
          <ProgressBar
            shape='circular'
            small
            value={progress}
            isIndeterminate={progress === undefined}
            aria-label={`${strings.format('uploading')} ${fileName}`}
            aria-hidden={isUploading ? undefined : true}
            className={styles.progressIcon}
          />
          <span
            className={styles.ring}
            aria-hidden
          />
          {/* Exposed only while it's shown, so assistive tech gets the same
              lasting success state as sighted users, not just the one-off
              announcement below */}
          <FeedbackStatusIcon
            status='success'
            role={isSuccess ? 'img' : undefined}
            aria-label={strings.format('uploadComplete')}
            aria-hidden={isSuccess ? undefined : true}
            size={16}
            className={clsx(styles.checkmark, styles.successIcon)}
          />
        </span>
        <span className={styles.fileInfo}>
          <span className={styles.fileName}>{fileName}</span>
          {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
        </span>
        {onPress && (
          <Button
            variant='icon'
            onPress={onPress}
            aria-label={`${strings.format(
              isUploading ? 'cancelUpload' : 'removeFile',
            )} ${fileName}`}
            aria-describedby={hasError ? errorId : undefined}
            className={styles.deleteButton}
          >
            {isUploading ? (
              <X size={20} aria-hidden />
            ) : (
              <Trash2 size={20} aria-hidden />
            )}
          </Button>
        )}
      </div>
      <div
        id={errorId}
        className={styles.errorReveal}
      >
        {errorMessage && <FieldError isInvalid>{errorMessage}</FieldError>}
      </div>
      {/* Always rendered, so screen readers pick up the text when it changes.
          Names the file, so several uploads finishing at once stay apart */}
      <VisuallyHidden role='status'>
        {isSuccess && `${strings.format('uploadComplete')}: ${fileName}`}
        {hasError && `${fileName}: ${errorMessage}`}
      </VisuallyHidden>
    </li>
  )
}
