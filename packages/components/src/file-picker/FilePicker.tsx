'use client'

import { useId, type HTMLAttributes } from 'react'
import { Group } from 'react-aria-components'
import clsx from '../utils/clsx'
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { FilePickerContext } from './FilePickerContext'
import styles from './FilePicker.module.css'

export interface FilePickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'popover' | 'role'
> {
  /** The label shown above the upload controls, also the group's name */
  label: string
  /** A description shown below the label */
  description?: string
  /** Error message shown when `isInvalid` is true */
  errorMessage?: string
  /**
   * Marks the field as invalid and shows `errorMessage`. A composed
   * `DropZone` is marked as invalid too.
   *
   * @default false
   */
  isInvalid?: boolean
  /**
   * Marks the field as required. Only presentational: checking that the
   * files are there, and uploaded, is up to you.
   *
   * @default false
   */
  isRequired?: boolean
  /**
   * Disables the composed `FileTrigger`, `DropZone` and the buttons in
   * `FileListItem`.
   *
   * @default false
   */
  isDisabled?: boolean
  /** @default 'bottom' */
  errorPosition?: 'top' | 'bottom'
  popover?: InfoPopoverProps
}

/**
 * Groups a file upload pattern, `FileTrigger`, `DropZone` and `FileList`,
 * under a label, description and error message. It doesn't hold the files:
 * keep them, and their upload status, in your own state.
 */
export const FilePicker = ({
  label,
  description,
  errorMessage,
  isInvalid = false,
  isRequired = false,
  isDisabled = false,
  errorPosition = 'bottom',
  popover,
  className,
  children,
  ...rest
}: FilePickerProps) => {
  const labelId = useId()
  const descriptionId = useId()
  const errorId = useId()
  const showError = isInvalid && !!errorMessage

  const describedBy = [description && descriptionId, showError && errorId]
    .filter(Boolean)
    .join(' ')

  const error = showError && (
    <FieldError
      id={errorId}
      isInvalid
    >
      {errorMessage}
    </FieldError>
  )

  return (
    <Group
      {...rest}
      aria-labelledby={labelId}
      aria-describedby={describedBy || undefined}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      data-required={isRequired || undefined}
      className={clsx(styles.filePicker, className)}
    >
      <LabelWrapper popover={popover}>
        <Label
          id={labelId}
          elementType='span'
        >
          {label}
        </Label>
      </LabelWrapper>
      {description && (
        <Text
          slot='description'
          id={descriptionId}
        >
          {description}
        </Text>
      )}
      {errorPosition === 'top' && error}
      <FilePickerContext.Provider
        value={{
          'aria-describedby': [labelId, describedBy].filter(Boolean).join(' '),
          isInvalid,
          isDisabled,
        }}
      >
        <div className={styles.content}>{children}</div>
      </FilePickerContext.Provider>
      {errorPosition === 'bottom' && error}
    </Group>
  )
}
