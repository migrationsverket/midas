import { useCallback, useRef } from 'react'

/**
 * Scrolls a focused element out from under the dialog's sticky header and
 * footer. The dialog's `scroll-padding` does this in Chromium, but WebKit
 * ignores it when focus scrolls an element into view, and Firefox can end up
 * a pixel short.
 */
export const useKeepFocusClear = () => {
  const cleanup = useRef<() => void | undefined>(undefined)

  return useCallback((dialog: HTMLElement | null) => {
    cleanup.current?.()
    cleanup.current = undefined
    if (!dialog) return

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target
      if (!(target instanceof Element) || target === dialog) return

      const style = getComputedStyle(dialog)
      const view = dialog.getBoundingClientRect()
      const clearTop = view.top + (parseFloat(style.scrollPaddingTop) || 0)
      const clearBottom =
        view.bottom - (parseFloat(style.scrollPaddingBottom) || 0)
      const { top, bottom } = target.getBoundingClientRect()

      // Line up the top when the element is taller than the clear area
      if (top < clearTop) dialog.scrollTop -= clearTop - top
      else if (bottom > clearBottom)
        dialog.scrollTop += Math.min(bottom - clearBottom, top - clearTop)
    }

    dialog.addEventListener('focusin', onFocusIn)
    cleanup.current = () => dialog.removeEventListener('focusin', onFocusIn)
  }, [])
}
