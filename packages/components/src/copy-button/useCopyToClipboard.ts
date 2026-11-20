'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export type CopyStatus = 'idle' | 'copied' | 'failed'

export interface UseCopyToClipboardOptions {
  /**
   * How long, in milliseconds, the copied or failed status lasts before it's
   * back to idle
   *
   * @default 2000
   */
  resetAfter?: number
  /** Called with the text once it's on the clipboard */
  onCopy?: (text: string) => void
  /** Called when the browser refuses, e.g. without permission or outside HTTPS */
  onCopyError?: (error: unknown) => void
}

/**
 * Copies text to the clipboard and tracks how it went, for building your own
 * copy control. Use `CopyButton` unless you need a different trigger.
 */
export const useCopyToClipboard = ({
  resetAfter = 2000,
  onCopy,
  onCopyError,
}: UseCopyToClipboardOptions = {}) => {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timeout.current), [])

  const copy = useCallback(
    async (text: string) => {
      clearTimeout(timeout.current)
      try {
        if (!navigator.clipboard) throw new Error('Clipboard API unavailable')
        await navigator.clipboard.writeText(text)
        setStatus('copied')
        onCopy?.(text)
      } catch (error) {
        setStatus('failed')
        onCopyError?.(error)
      }
      timeout.current = setTimeout(() => setStatus('idle'), resetAfter)
    },
    [resetAfter, onCopy, onCopyError],
  )

  return { copy, status }
}
