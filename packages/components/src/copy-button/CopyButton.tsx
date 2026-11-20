'use client'

import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'
import { Check, Copy, TriangleAlert } from 'lucide-react'
import { Button, type ButtonProps } from '../button'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import {
  useCopyToClipboard,
  type UseCopyToClipboardOptions,
} from './useCopyToClipboard'
import messages from './intl/translations.json'
import styles from './CopyButton.module.css'

export interface CopyButtonProps
  extends
    Omit<ButtonProps, 'children' | 'onPress' | 'variant' | 'icon'>,
    UseCopyToClipboardOptions {
  /** The text that's copied */
  value: string
  /**
   * `icon` shows only the copy icon, `text` adds the text "Kopiera".
   * An icon button's name is "Kopiera": when there are several on a page,
   * name each with `aria-label`, e.g. "Kopiera ärendenummer"
   *
   * @default 'icon'
   */
  variant?: 'icon' | 'text'
}

/**
 * Copies a value to the clipboard. Place it next to the value it copies.
 * It confirms with a check icon and tells screen readers it's copied.
 */
export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      value,
      variant = 'icon',
      resetAfter,
      onCopy,
      onCopyError,
      className,
      ...rest
    },
    ref,
  ) => {
    const strings = useLocalizedStringFormatter(messages)
    const { copy, status } = useCopyToClipboard({
      resetAfter,
      onCopy,
      onCopyError,
    })
    const Icon = { idle: Copy, copied: Check, failed: TriangleAlert }[status]

    return (
      <>
        <Button
          aria-label={variant === 'icon' ? strings.format('copy') : undefined}
          {...rest}
          ref={ref}
          variant={variant === 'icon' ? 'icon' : 'tertiary'}
          onPress={() => copy(value)}
          data-status={status}
          className={clsx(styles.copyButton, className)}
        >
          <Icon
            aria-hidden
            size={20}
          />
          {variant === 'text' &&
            strings.format(status === 'idle' ? 'copy' : status)}
        </Button>
        {/* Always rendered, a status region only announces changes made
            after it's in the DOM */}
        <VisuallyHidden
          role='status'
          elementType='span'
        >
          {status !== 'idle' && strings.format(status)}
        </VisuallyHidden>
      </>
    )
  },
)
CopyButton.displayName = 'CopyButton'
