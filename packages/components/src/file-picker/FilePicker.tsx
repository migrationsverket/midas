'use client'

import {
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useControlledState } from '@react-stately/utils'
import {
  FormContext,
  FormValidationContext,
  useSlottedContext,
  type ValidationResult,
} from 'react-aria-components'
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

type ValidationError = string | string[]

const toErrors = (result: ValidationError | true | null | undefined) =>
  result === true || result == null
    ? []
    : ([] as string[]).concat(result).filter(Boolean)

const validityState = (flags: Partial<ValidityState> = {}): ValidityState => ({
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valueMissing: false,
  ...flags,
  valid: !Object.values(flags).some(Boolean),
})

const VALID: ValidationResult = {
  isInvalid: false,
  validationErrors: [],
  validationDetails: validityState(),
}

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
   * Called with the files the user added, e.g. to start uploading them.
   * Includes files that `acceptedFileTypes` doesn't allow.
   */
  onAdd?: (files: File[]) => void
  /**
   * Called with a file the user removed, or that a new file replaced without
   * `allowsMultiple`, e.g. to abort its upload.
   */
  onRemove?: (file: File) => void
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
  /**
   * The name of the field. The selected files are submitted with the form
   * under it, and server errors from a `Form`'s `validationErrors` are read
   * from it. Leave out when the files are uploaded on their own, so they
   * aren't sent again with the form.
   */
  name?: string
  /**
   * Whether at least one file must be selected before the form can be
   * submitted. Only checked with `validationBehavior='native'`.
   *
   * @default false
   */
  isRequired?: boolean
  /** @default false */
  isDisabled?: boolean
  /**
   * Marks the field as invalid, e.g. after a failed upload, or as valid.
   * Overrides `validate` and the built-in validation. A composed `DropZone`
   * is marked as invalid too.
   */
  isInvalid?: boolean
  /**
   * Returns an error message when the selection is invalid, e.g. too many or
   * too large files, or uploads that haven't finished.
   */
  validate?: (files: File[]) => ValidationError | true | null | undefined
  /**
   * `native` blocks form submission while the field is invalid, and shows
   * errors once the user has changed the selection or tried to submit.
   * `aria` shows errors right away and doesn't block submission. Defaults to
   * the `validationBehavior` of a surrounding `Form`.
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
 * Holds the selected files, validates them and submits them with a form.
 */
export const FilePicker = ({
  label,
  description,
  popover,
  value,
  defaultValue,
  onChange,
  onAdd,
  onRemove,
  acceptedFileTypes,
  allowsMultiple = false,
  name,
  isRequired = false,
  isDisabled = false,
  isInvalid: isInvalidProp,
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

  // With `native`, errors stay hidden until the user changes the selection
  // or tries to submit the form, like in React Aria's fields
  const [isValidationCommitted, setValidationCommitted] = useState(false)

  // Server errors from a Form's `validationErrors` show until the user
  // changes the selection
  const serverErrors = useContext(FormValidationContext)
  const [dismissedServerErrors, setDismissedServerErrors] = useState<
    typeof serverErrors | null
  >(null)
  const serverError =
    name && dismissedServerErrors !== serverErrors
      ? toErrors(serverErrors[name])
      : []

  const rejectedFiles = files.filter(
    file => !isFileAccepted(file, acceptedFileTypes),
  )
  const isMissing =
    isRequired && validationBehavior === 'native' && files.length === 0
  const customErrors = toErrors(validate?.(files))

  const validation: ValidationResult =
    serverError.length > 0
      ? {
          isInvalid: true,
          validationErrors: serverError,
          validationDetails: validityState({ customError: true }),
        }
      : {
          isInvalid:
            isMissing || rejectedFiles.length > 0 || !!customErrors.length,
          validationErrors: [
            ...(isMissing ? [strings.format('valueMissing')] : []),
            ...(rejectedFiles.length > 0
              ? [
                  `${strings.format('unsupportedFileType')}: ${rejectedFiles
                    .map(file => file.name)
                    .join(', ')}`,
                ]
              : []),
            ...customErrors,
          ],
          validationDetails: validityState({
            valueMissing: isMissing,
            typeMismatch: rejectedFiles.length > 0,
            customError: customErrors.length > 0,
          }),
        }

  const displayValidation: ValidationResult =
    isInvalidProp !== undefined
      ? {
          isInvalid: isInvalidProp,
          validationErrors: [],
          validationDetails: validityState({ customError: isInvalidProp }),
        }
      : validationBehavior === 'aria' ||
          isValidationCommitted ||
          serverError.length > 0
        ? validation
        : VALID

  const isInvalid = displayValidation.isInvalid
  const errorText =
    typeof errorMessage === 'function'
      ? errorMessage(displayValidation)
      : errorMessage || displayValidation.validationErrors.join(' ')
  const showError = isInvalid && !!errorText

  // Mirror the selection into the hidden file input, so the files are
  // submitted with the form
  useIsomorphicLayoutEffect(() => {
    const input = inputRef.current
    if (!input || typeof DataTransfer === 'undefined') return

    const dataTransfer = new DataTransfer()
    files.forEach(file => dataTransfer.items.add(file))
    input.files = dataTransfer.files
  }, [files])

  // The hidden input carries the field's validity, so the form blocks
  // submission while it's invalid, whether it's posted or sent with fetch
  const isBlocking =
    validationBehavior === 'native' && (isInvalidProp ?? validation.isInvalid)
  const nativeMessage = isBlocking
    ? errorText || validation.validationErrors.join(' ') || label
    : ''
  useIsomorphicLayoutEffect(() => {
    inputRef.current?.setCustomValidity(nativeMessage)
  }, [nativeMessage])

  const focusField = () => {
    const target =
      triggerRef.current ??
      contentRef.current?.querySelector<HTMLElement>(
        'button:not(:disabled), [tabindex="0"]',
      )
    target?.focus()
  }

  // On submit, show the errors instead of the browser's bubble, which would
  // point at the hidden input, and focus the field if it's the first
  // invalid one in the form
  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    const onInvalid = (e: Event) => {
      e.preventDefault()
      setValidationCommitted(true)
      const firstInvalid = input.form
        ? Array.from(input.form.elements).find(
            element =>
              'validity' in element &&
              !(element as HTMLInputElement).validity.valid,
          )
        : input
      if (firstInvalid === input) focusField()
    }
    input.addEventListener('invalid', onInvalid)
    return () => input.removeEventListener('invalid', onInvalid)
  }, [])

  // A form reset empties the hidden input. Go back to the initial selection
  // and hide the errors, like other fields do.
  const [initialFiles] = useState(files)
  useEffect(() => {
    const form = inputRef.current?.form
    if (!form) return

    const onReset = () => {
      setFiles(initialFiles)
      setValidationCommitted(false)
    }
    form.addEventListener('reset', onReset)
    return () => form.removeEventListener('reset', onReset)
  }, [initialFiles, setFiles])

  const commitChange = (next: File[]) => {
    setFiles(next)
    setValidationCommitted(true)
    setDismissedServerErrors(serverErrors)
  }

  const addFiles = (newFiles: File[]) => {
    if (isDisabled || newFiles.length === 0) return

    if (!allowsMultiple) {
      const [file] = newFiles
      filesRef.current.forEach(existing => onRemove?.(existing))
      commitChange([file])
      onAdd?.([file])
      return
    }

    const next = [...filesRef.current]
    const added: File[] = []
    newFiles.forEach(file => {
      if (next.some(existing => isSameFile(existing, file))) return
      next.push(file)
      added.push(file)
    })
    if (added.length === 0) return
    commitChange(next)
    onAdd?.(added)
  }

  const removeFile = (file: File) => {
    commitChange(filesRef.current.filter(existing => existing !== file))
    onRemove?.(file)
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
      {/* Always rendered: it carries the field's validity even without a
          name, when the files aren't submitted with the form */}
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
    </div>
  )
}
