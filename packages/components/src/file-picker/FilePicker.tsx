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

interface FilePickerBaseProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'popover' | 'role' | 'aria-label' | 'aria-labelledby'
> {
  /** A description shown below the label */
  description?: string
  /** Error message shown when `isInvalid` is true */
  errorMessage?: string
  /**
   * Shows the error message between the description and the upload
   * controls, or below the controls.
   *
   * @default 'top'
   */
  errorPosition?: 'top' | 'bottom'
  /**
   * Marks the field as invalid and shows `errorMessage`.
   * A composed `DropZone` is marked as invalid too.
   *
   * @default false
   */
  isInvalid?: boolean
}

/** The group needs a name: a visible label, or one for screen readers only */
type FilePickerName =
  | {
      /** The label shown above the upload controls, also the group's name */
      label: string
      /** An info button next to the label */
      popover?: InfoPopoverProps
      'aria-label'?: never
      'aria-labelledby'?: never
    }
  | {
      label?: never
      popover?: never
      /** Names the group when there's no visible `label` */
      'aria-label': string
      'aria-labelledby'?: never
    }
  | {
      label?: never
      popover?: never
      'aria-label'?: never
      /**
       * Names the group with another element, e.g. a heading, when there's
       * no visible `label`. It also describes the upload controls.
       */
      'aria-labelledby': string
    }

export type FilePickerProps = FilePickerBaseProps & FilePickerName

/**
 * Groups a file upload pattern, `FileTrigger`, `DropZone` and `FileList`,
 * under a label, description and error message. It doesn't hold the files:
 * keep them, and their upload status, in your own state.
 */
export const FilePicker = ({
  label,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  description,
  errorMessage,
  errorPosition = 'top',
  isInvalid = false,
  popover,
  className,
  children,
  ...rest
}: FilePickerProps) => {
  const generatedLabelId = useId()
  const labelId = label ? generatedLabelId : ariaLabelledBy
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
      aria-label={ariaLabel}
      aria-labelledby={labelId}
      aria-describedby={describedBy || undefined}
      isInvalid={isInvalid}
      className={clsx(styles.filePicker, className)}
    >
      {label && (
        <LabelWrapper popover={popover}>
          <Label
            id={labelId}
            elementType='span'
          >
            {label}
          </Label>
        </LabelWrapper>
      )}
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
        }}
      >
        <div className={styles.content}>{children}</div>
      </FilePickerContext.Provider>
      {errorPosition === 'bottom' && error}
    </Group>
  )
}
