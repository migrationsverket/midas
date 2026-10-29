'use client'

import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useControlledState } from '@react-stately/utils'
import { VisuallyHidden } from 'react-aria'
import { Upload } from 'lucide-react'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import { InfoPopoverProps, Label } from '../label'
import { LabelWrapper } from '../label/LabelWrapper'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Button } from '../button'
import { FileTrigger } from '../file-trigger'
import { FileList } from '../file-list'
import { FilePickerContext } from './FilePickerContext'
import { isFileAccepted, isSameFile } from './utils'
import styles from './FilePicker.module.css'
import messages from './intl/translations.json'

// useLayoutEffect warns during server rendering in React 18
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export interface FilePickerProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'popover' | 'onChange' | 'defaultValue' | 'children'
> {
  /** The label shown above the upload controls */
  label: string
  /** A description shown below the label */
  description?: string
  popover?: InfoPopoverProps
  /**
   * The selected files (controlled). Files are added by a `FileTrigger` or
   * `DropZone` inside the FilePicker, and removed from its `FileList`.
   */
  value?: File[]
  /** The initially selected files (uncontrolled) */
  defaultValue?: File[]
  /** Called with the new selection when files are added or removed */
  onChange?: (files: File[]) => void
  /**
   * File types the user can select, like the native `accept` attribute:
   * extensions (`.pdf`), MIME types (`image/png`) or groups (`image/*`).
   * Limits the file dialog, and files of other types, e.g. dropped ones,
   * make the field invalid.
   */
  acceptedFileTypes?: string[]
  /**
   * Whether more than one file can be selected. Without it, a new file
   * replaces the selected one.
   *
   * @default false
   */
  allowsMultiple?: boolean
  /** The name of the field, used when the files are submitted with a form */
  name?: string
  /** @default false */
  isDisabled?: boolean
  /**
   * Marks the field as invalid and shows `errorMessage`. Overrides the
   * invalid state from `acceptedFileTypes`. A composed `DropZone` is marked
   * as invalid too.
   */
  isInvalid?: boolean
  /**
   * Error message shown when the field is invalid. Defaults to a message
   * naming the files that `acceptedFileTypes` doesn't allow.
   */
  errorMessage?: string
  /** @default 'bottom' */
  errorPosition?: 'top' | 'bottom'
  /**
   * The upload controls. Leave out for a FileTrigger button and a FileList,
   * or compose your own from `FileTrigger`, `DropZone` and `FileList`.
   */
  children?: ReactNode
}

/**
 * Lets the user select files, with a label, description and error message.
 * Holds the selected files and submits them with a form.
 */
export const FilePicker = ({
  label,
  description,
  popover,
  value,
  defaultValue,
  onChange,
  acceptedFileTypes,
  allowsMultiple = false,
  name,
  isDisabled = false,
  isInvalid: isInvalidProp,
  errorMessage,
  errorPosition = 'bottom',
  className,
  children,
  ...rest
}: FilePickerProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const labelId = useId()
  const descriptionId = useId()
  const errorId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [files, setFiles] = useControlledState<File[]>(
    value,
    defaultValue ?? [],
    onChange,
  )
  // Drops resolve asynchronously, so read the latest selection from a ref
  const filesRef = useRef(files)
  useIsomorphicLayoutEffect(() => {
    filesRef.current = files
  })

  // Mirror the selection into the hidden file input, so the files are
  // submitted with the form
  useIsomorphicLayoutEffect(() => {
    const input = inputRef.current
    if (!input || typeof DataTransfer === 'undefined') return

    const dataTransfer = new DataTransfer()
    files.forEach(file => dataTransfer.items.add(file))
    input.files = dataTransfer.files
  }, [files])

  // A form reset empties the hidden input. Go back to the initial selection,
  // like other fields do.
  const [initialFiles] = useState(files)
  useEffect(() => {
    const form = inputRef.current?.form
    if (!form) return

    const onReset = () => setFiles(initialFiles)
    form.addEventListener('reset', onReset)
    return () => form.removeEventListener('reset', onReset)
  }, [name, initialFiles, setFiles])

  const focusField = () => {
    const target =
      triggerRef.current ??
      contentRef.current?.querySelector<HTMLElement>(
        'button:not(:disabled), [tabindex="0"]',
      )
    target?.focus()
  }

  const addFiles = (newFiles: File[]) => {
    if (isDisabled || newFiles.length === 0) return

    if (!allowsMultiple) {
      setFiles([newFiles[0]])
      return
    }

    const next = [...filesRef.current]
    newFiles.forEach(file => {
      if (!next.some(existing => isSameFile(existing, file))) next.push(file)
    })
    setFiles(next)
  }

  const removeFile = (file: File) =>
    setFiles(filesRef.current.filter(existing => existing !== file))

  // When the last file is removed, the FileList unmounts and takes focus
  // with it. Hand it to the trigger instead of dropping it on <body>.
  const fileCount = useRef(files.length)
  useEffect(() => {
    const hadFiles = fileCount.current > 0
    fileCount.current = files.length
    if (
      hadFiles &&
      files.length === 0 &&
      (!document.activeElement || document.activeElement === document.body)
    ) {
      focusField()
    }
  }, [files.length])

  const rejectedFiles = files.filter(
    file => !isFileAccepted(file, acceptedFileTypes),
  )
  const isInvalid = isInvalidProp ?? rejectedFiles.length > 0
  const errorText =
    errorMessage ||
    (rejectedFiles.length > 0
      ? `${strings.format('unsupportedFileType')}: ${rejectedFiles
          .map(file => file.name)
          .join(', ')}`
      : '')
  const showError = isInvalid && !!errorText

  const describedBy = [
    labelId,
    description && descriptionId,
    showError && errorId,
  ]
    .filter(Boolean)
    .join(' ')

  const error = showError && (
    <FieldError
      id={errorId}
      isInvalid
    >
      {errorText}
    </FieldError>
  )

  return (
    <div
      {...rest}
      data-invalid={isInvalid || undefined}
      data-disabled={isDisabled || undefined}
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
      {errorPosition === 'top' && error}
      <FilePickerContext.Provider
        value={{
          'aria-describedby': describedBy,
          isInvalid,
          isDisabled,
          acceptedFileTypes,
          allowsMultiple,
          files,
          addFiles,
          removeFile,
          triggerRef,
        }}
      >
        <div
          ref={contentRef}
          className={styles.content}
        >
          {children ?? (
            <>
              <FileTrigger>
                <Button icon={Upload}>
                  {strings.format(allowsMultiple ? 'chooseFiles' : 'chooseFile')}
                </Button>
              </FileTrigger>
              <FileList />
            </>
          )}
        </div>
      </FilePickerContext.Provider>
      {errorPosition === 'bottom' && error}
      {name && (
        <VisuallyHidden aria-hidden='true'>
          <input
            ref={inputRef}
            type='file'
            tabIndex={-1}
            name={name}
            multiple={allowsMultiple}
            disabled={isDisabled}
          />
        </VisuallyHidden>
      )}
    </div>
  )
}
