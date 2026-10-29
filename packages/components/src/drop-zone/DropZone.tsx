'use client'

import { forwardRef } from 'react'
import {
  DropZone as AriaDropZone,
  FieldErrorContext,
  composeRenderProps,
  isFileDropItem,
  type DropZoneProps as AriaDropZoneProps,
} from 'react-aria-components'
import type { ValidationResult } from 'react-aria-components'
import type { DropEvent } from 'react-aria'
import clsx from '../utils/clsx'
import { useFilePickerContext } from '../file-picker/FilePickerContext'
import styles from './DropZone.module.css'

export interface DropZoneProps extends AriaDropZoneProps {
  /**
   * Marks the dropzone as invalid, e.g. after a failed validation. Pair with
   * `FieldError` to render the error message, either inside or below the
   * dropzone depending on where it's composed. Inside a `FilePicker`, it
   * follows the field's validation unless set explicitly.
   *
   * @default false
   */
  isInvalid?: boolean
}

/**
 * A drop zone is an area into which one or multiple objects can be dragged
 * and dropped. Content is fully composable — pair it with `FileTrigger` for
 * file uploads, or use it for any other drag-and-drop interaction. Inside a
 * `FilePicker`, dropped files are added to the picker's selection.
 *
 * @interface DropZoneProps
 *
 * @see {@link https://react-spectrum.adobe.com/react-aria/DropZone.html|React Aria DropZone}
 */
export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  (
    {
      className,
      isInvalid: isInvalidProp,
      isDisabled,
      onDrop,
      children,
      ...rest
    },
    ref,
  ) => {
    const filePicker = useFilePickerContext()
    const isInvalid = isInvalidProp ?? filePicker?.isInvalid ?? false

    const handleDrop = async (e: DropEvent) => {
      onDrop?.(e)
      if (!filePicker) return
      const files = await Promise.all(
        e.items.filter(isFileDropItem).map(item => item.getFile()),
      )
      filePicker.addFiles(files)
    }
    const validation: ValidationResult | null = isInvalid
      ? {
          isInvalid: true,
          validationErrors: [],
          validationDetails: {} as ValidityState,
        }
      : null

    return (
      <AriaDropZone
        {...rest}
        ref={ref}
        isDisabled={isDisabled ?? filePicker?.isDisabled}
        onDrop={filePicker || onDrop ? handleDrop : undefined}
        data-invalid={isInvalid || undefined}
        className={clsx(styles.dropZone, className)}
      >
        {composeRenderProps(children, children => (
          // DropZone has no concept of form validation on its own — provide
          // FieldErrorContext so a composed `FieldError` renders through its
          // context-aware path instead of its plain-`Text` fallback, which
          // would otherwise collide with the `slot="label"` id DropZone
          // assigns to any `Text` child for its accessible name.
          <FieldErrorContext.Provider value={validation}>
            {children}
          </FieldErrorContext.Provider>
        ))}
      </AriaDropZone>
    )
  },
)
DropZone.displayName = 'DropZone'
