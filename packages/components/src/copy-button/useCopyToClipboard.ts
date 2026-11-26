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
  const latestCopy = useRef(0)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
      clearTimeout(timeout.current)
    }
  }, [])

  const copy = useCallback(
    async (text: string) => {
      const thisCopy = ++latestCopy.current
      let copied = false
      let copyError: unknown
      try {
        if (!navigator.clipboard) throw new Error('Clipboard API unavailable')
        await navigator.clipboard.writeText(text)
        copied = true
      } catch (error) {
        copyError = error
      }

      // Copies can finish out of order, so only the latest one sets the status
      if (thisCopy === latestCopy.current && isMounted.current) {
        clearTimeout(timeout.current)
        setStatus(copied ? 'copied' : 'failed')
        timeout.current = setTimeout(() => setStatus('idle'), resetAfter)
      }

      // Outside the try, so an error thrown by onCopy isn't taken for a
      // failed copy. It's passed on to the caller instead
      if (copied) onCopy?.(text)
      else onCopyError?.(copyError)
    },
    [resetAfter, onCopy, onCopyError],
  )

  return { copy, status }
}
