'use client'

import { forwardRef } from 'react'
import {
  DropZone as AriaDropZone,
  FieldErrorContext,
  composeRenderProps,
  type DropZoneProps as AriaDropZoneProps,
} from 'react-aria-components'
import type { ValidationResult } from '@react-types/shared'
import clsx from '../utils/clsx'
import styles from './DropZone.module.css'

export interface DropZoneProps extends AriaDropZoneProps {
  /**
   * Marks the dropzone as invalid, e.g. after a failed validation. Pair with
   * `FieldError` to render the error message, either inside or below the
   * dropzone depending on where it's composed.
   *
   * @default false
   */
  isInvalid?: boolean
}

/**
 * A drop zone is an area into which one or multiple objects can be dragged
 * and dropped. Content is fully composable — pair it with `FileTrigger` for
 * file uploads, or use it for any other drag-and-drop interaction.
 *
 * @interface DropZoneProps
 *
 * @see {@link https://react-spectrum.adobe.com/react-aria/DropZone.html|React Aria DropZone}
 */
export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(
  ({ className, isInvalid, children, ...rest }, ref) => {
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
        data-invalid={isInvalid || undefined}
        className={clsx(styles.dropzone, className)}
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
