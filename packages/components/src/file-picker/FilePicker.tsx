'use client'

import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useControlledState } from '@react-stately/utils'
import {
  FormContext,
  useSlottedContext,
  type ValidationResult,
} from 'react-aria-components'
import { VisuallyHidden } from 'react-aria'
import { useFormReset } from '@react-aria/utils'
import { useFormValidation } from '@react-aria/form'
import {
  useFormValidationState,
  VALID_VALIDITY_STATE,
} from '@react-stately/form'
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
  /**
   * Whether at least one file must be selected before the form can be
   * submitted.
   *
   * @default false
   */
  isRequired?: boolean
  /** @default false */
  isDisabled?: boolean
  /**
   * Marks the field as invalid, e.g. after a failed upload. Overrides
   * `validate` and the built-in validation. A composed `DropZone` is marked
   * as invalid too.
   */
  isInvalid?: boolean
  /**
   * Returns an error message when the selection is invalid, e.g. too many or
   * too large files. Shown on submit, or right away with
   * `validationBehavior='aria'`.
   */
  validate?: (files: File[]) => string | string[] | true | null | undefined
  /**
   * `native` blocks form submission while the field is invalid and shows
   * errors on submit. `aria` shows errors right away and doesn't block
   * submission.
   *
   * @default 'native'
   */
  validationBehavior?: 'native' | 'aria'
  /**
   * Error message shown when the field is invalid. Defaults to the messages
   * from `validate` and the built-in validation.
   */
  errorMessage?: string | ((validation: ValidationResult) => string)
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
 * Holds the selected files and validates them like any other form field.
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
  isRequired = false,
  isDisabled = false,
  isInvalid,
  validate,
  validationBehavior: validationBehaviorProp,
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

  const formValidationBehavior =
    useSlottedContext(FormContext)?.validationBehavior
  const validationBehavior =
    validationBehaviorProp ?? formValidationBehavior ?? 'native'

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

  const builtinValidation = useMemo<ValidationResult | undefined>(() => {
    const rejected = files.filter(
      file => !isFileAccepted(file, acceptedFileTypes),
    )
    if (rejected.length === 0) return undefined

    return {
      isInvalid: true,
      validationErrors: [
        `${strings.format('unsupportedFileType')}: ${rejected
          .map(file => file.name)
          .join(', ')}`,
      ],
      validationDetails: {
        ...VALID_VALIDITY_STATE,
        typeMismatch: true,
        valid: false,
      },
    }
  }, [files, acceptedFileTypes, strings])

  const validationState = useFormValidationState<File[]>({
    value: files,
    name,
    isRequired,
    isInvalid,
    validate,
    validationBehavior,
    builtinValidation,
  })

  // Mirror the selection into the hidden file input, so the files are
  // submitted with the form and the browser checks `required`. Runs before
  // useFormValidation reads the input's validity.
  useIsomorphicLayoutEffect(() => {
    const input = inputRef.current
    if (!input || typeof DataTransfer === 'undefined') return

    const dataTransfer = new DataTransfer()
    files.forEach(file => dataTransfer.items.add(file))
    input.files = dataTransfer.files
  }, [files])

  const focusField = () => {
    const target =
      triggerRef.current ??
      contentRef.current?.querySelector<HTMLElement>(
        'button:not(:disabled), [tabindex="0"]',
      )
    target?.focus()
  }

  useFormValidation(
    { validationBehavior, focus: focusField },
    validationState,
    inputRef,
  )
  const [initialFiles] = useState(files)
  useFormReset(inputRef, initialFiles, setFiles)

  const addFiles = (newFiles: File[]) => {
    if (isDisabled || newFiles.length === 0) return

    if (!allowsMultiple) {
      setFiles([newFiles[0]])
    } else {
      const next = [...filesRef.current]
      newFiles.forEach(file => {
        if (!next.some(existing => isSameFile(existing, file))) next.push(file)
      })
      setFiles(next)
    }
    validationState.commitValidation()
  }

  const removeFile = (file: File) => {
    setFiles(filesRef.current.filter(existing => existing !== file))
    validationState.commitValidation()
  }

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

  const { displayValidation } = validationState
  const isInvalidShown = displayValidation.isInvalid
  const errorText =
    typeof errorMessage === 'function'
      ? errorMessage(displayValidation)
      : errorMessage || displayValidation.validationErrors.join(' ')
  const showError = isInvalidShown && !!errorText

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
      data-invalid={isInvalidShown || undefined}
      data-disabled={isDisabled || undefined}
      data-required={isRequired || undefined}
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
          isInvalid: isInvalidShown,
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
                  {strings.format(
                    allowsMultiple ? 'chooseFiles' : 'chooseFile',
                  )}
                </Button>
              </FileTrigger>
              <FileList />
            </>
          )}
        </div>
      </FilePickerContext.Provider>
      {errorPosition === 'bottom' && error}
      <VisuallyHidden aria-hidden='true'>
        <input
          ref={inputRef}
          type='file'
          tabIndex={-1}
          name={name}
          multiple={allowsMultiple}
          accept={acceptedFileTypes?.join(',')}
          required={isRequired && validationBehavior === 'native'}
          disabled={isDisabled}
        />
      </VisuallyHidden>
    </div>
  )
}
