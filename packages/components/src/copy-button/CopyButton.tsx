'use client'

import { forwardRef } from 'react'
import { VisuallyHidden } from 'react-aria'
import { Check, Copy, TriangleAlert } from 'lucide-react'
import { Button, type ButtonProps } from '../button'
import { Tooltip, TooltipTrigger } from '../tooltip'
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
   * `icon` shows only the copy icon, with its name in a tooltip, `text` adds
   * the text "Kopiera". An icon button's name is "Kopiera": when there are
   * several on a page, name each with `aria-label`, e.g. "Kopiera ärendenummer"
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
    const name = rest['aria-label'] ?? strings.format('copy')
    const isIcon = variant === 'icon'

    const button = (
      <Button
        {...rest}
        aria-label={isIcon ? name : rest['aria-label']}
        ref={ref}
        variant={isIcon ? 'icon' : 'tertiary'}
        onPress={() => copy(value)}
        data-status={status}
        className={clsx(styles.copyButton, className)}
      >
        <Icon
          aria-hidden
          size={20}
        />
        {!isIcon && strings.format(status === 'idle' ? 'copy' : status)}
      </Button>
    )

    return (
      <>
        {isIcon ? (
          // Stays open on press, so it can say "Kopierat"
          <TooltipTrigger shouldCloseOnPress={false}>
            {button}
            <Tooltip>
              {status === 'idle' ? name : strings.format(status)}
            </Tooltip>
          </TooltipTrigger>
        ) : (
          button
        )}
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
