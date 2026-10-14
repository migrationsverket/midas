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
  const isError = status === 'error'
  const hasError = isError && !!errorMessage
  const errorId = useId()
  const stateId = useId()
  // Read first in the row, before the file name and the button, the same
  // place the progress bar has while uploading
  const stateText = isSuccess
    ? strings.format('uploadComplete')
    : isError
      ? strings.format('uploadFailed')
      : undefined
  const buttonDescription =
    [stateText && stateId, hasError && errorId].filter(Boolean).join(' ') ||
    undefined
  const onPress = isUploading ? (onCancel ?? onDelete) : onDelete

  return (
    <li
      className={clsx(styles.fileListItem, className)}
      data-status={status}
    >
      <div className={styles.row}>
        <span className={styles.iconSlot}>
          {/* The progress bar and checkmark are only rendered in their own
              state, not kept in the DOM and hidden: NVDA's browse mode can
              keep a node that only toggles aria-hidden, and read "Laddar upp"
              after the upload has already ended */}
          {isUploading && (
            <ProgressBar
              shape='circular'
              small
              value={progress}
              isIndeterminate={progress === undefined}
              aria-label={`${strings.format('uploading')} ${fileName}`}
              className={styles.progressIcon}
            />
          )}
          <span
            className={styles.ring}
            aria-hidden
          />
          {isSuccess && (
            <FeedbackStatusIcon
              status='success'
              aria-hidden
              size={16}
              className={clsx(styles.checkmark, styles.successIcon)}
            />
          )}
        </span>
        {/* Text rather than an image role on the checkmark, which NVDA read
            as "grafik Uppladdning klar" */}
        {stateText && <VisuallyHidden id={stateId}>{stateText}</VisuallyHidden>}
        <span className={styles.fileInfo}>
          <span className={styles.fileName}>{fileName}</span>
          {fileSize && (
            <>
              {/* Gives screen readers a pause, they otherwise read the two
                  spans as one word, "resume.pdf1.2 MB" */}
              <VisuallyHidden>, </VisuallyHidden>
              <span className={styles.fileSize}>{fileSize}</span>
            </>
          )}
        </span>
        {onPress && (
          <Button
            variant='icon'
            onPress={onPress}
            aria-label={`${strings.format(
              isUploading ? 'cancelUpload' : 'removeFile',
            )} ${fileName}`}
            aria-describedby={buttonDescription}
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
