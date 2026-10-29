'use client'

import { useId, type HTMLAttributes } from 'react'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { FilePickerContext } from './FilePickerContext'
import styles from './FilePicker.module.css'

export interface FilePickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'popover'
> {
  /** The label shown above the upload controls */
  label: string
  /** A description shown below the label */
  description?: string
  /** Error message shown when `isInvalid` is true */
  errorMessage?: string
  /**
   * Marks the field as invalid and shows `errorMessage` below the controls.
   * A composed `DropZone` is marked as invalid too.
   *
   * @default false
   */
  isInvalid?: boolean
  popover?: InfoPopoverProps
}

/**
 * Wraps a file upload pattern — `FileTrigger`, `DropZone` and `FileList` —
 * with a label, description and error message.
 */
export const FilePicker = ({
  label,
  description,
  errorMessage,
  isInvalid = false,
  popover,
  className,
  children,
  ...rest
}: FilePickerProps) => {
  const labelId = useId()
  const descriptionId = useId()
  const errorId = useId()
  const showError = isInvalid && !!errorMessage

  const describedBy = [
    labelId,
    description && descriptionId,
    showError && errorId,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...rest}
      data-invalid={isInvalid || undefined}
      className={clsx(styles.filePicker, className)}
    >
      <LabelWrapper popover={popover}>
        <Label id={labelId}>{label}</Label>
      </LabelWrapper>
      {description && (
        <Text
          slot='description'
          id={descriptionId}
        >
          {description}
        </Text>
      )}
      <FilePickerContext.Provider
        value={{ 'aria-describedby': describedBy, isInvalid }}
      >
        <div className={styles.content}>{children}</div>
      </FilePickerContext.Provider>
      {showError && (
        <FieldError
          id={errorId}
          isInvalid
        >
          {errorMessage}
        </FieldError>
      )}
    </div>
  )
}
