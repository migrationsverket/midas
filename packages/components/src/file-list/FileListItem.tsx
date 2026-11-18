'use client'

import { useId, useLayoutEffect, useRef, type RefObject } from 'react'
import { Eye, Trash2, X } from 'lucide-react'
import { VisuallyHidden } from 'react-aria'
import { Button, type ButtonProps } from '../button'
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
  /**
   * Shows a preview button next to the delete button. Hidden while
   * `uploading`, when cancelling is the main action in the row. Shown when
   * an upload failed, since the file is still on the user's device and they
   * can check what they picked. Opening the preview, e.g. in a `Modal` or a
   * new tab, is up to you.
   */
  onPreview?: () => void
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
  onPreview,
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
  const showPreview = !!onPreview && !isUploading
  const deleteButtonRef = useRef<HTMLButtonElement>(null)
  const previewHadFocus = useRef(false)

  // The preview button disappears when an upload starts. If it had focus,
  // hand it to the row's other button instead of letting it fall to <body>
  useLayoutEffect(() => {
    if (!previewHadFocus.current) return
    previewHadFocus.current = false
    deleteButtonRef.current?.focus()
  }, [showPreview])

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
        {showPreview && (
          <PreviewButton
            hadFocusRef={previewHadFocus}
            variant='icon'
            onPress={onPreview}
            aria-label={`${strings.format('previewFile')} ${fileName}`}
            aria-describedby={buttonDescription}
            className={styles.previewButton}
          >
            <Eye
              size={20}
              aria-hidden
            />
          </PreviewButton>
        )}
        {onPress && (
          <Button
            ref={deleteButtonRef}
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

interface PreviewButtonProps extends ButtonProps {
  hadFocusRef: RefObject<boolean>
}

/**
 * Notes in `hadFocusRef` whether it had focus when it unmounts. React runs a
 * removed component's layout effect cleanup before it removes the DOM node,
 * so focus can still be read here, and the row's own layout effect, which
 * runs after, can move it on.
 */
const PreviewButton = ({ hadFocusRef, ...props }: PreviewButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const button = ref.current
    return () => {
      if (button && document.activeElement === button) {
        hadFocusRef.current = true
      }
    }
  }, [hadFocusRef])

  return (
    <Button
      {...props}
      ref={ref}
    />
  )
}
