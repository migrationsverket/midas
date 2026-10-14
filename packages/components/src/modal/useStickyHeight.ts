import { useCallback, useRef } from 'react'

/**
 * Publishes the height of a sticky element as a custom property on the dialog,
 * which uses it as scroll padding so focused content isn't hidden behind it.
 */
export const useStickyHeight = (property: string) => {
  const cleanup = useRef<() => void | undefined>(undefined)

  return useCallback(
    (element: HTMLDivElement | null) => {
      cleanup.current?.()
      cleanup.current = undefined
      const dialog = element?.parentElement
      if (!element || !dialog) return

      const observer = new ResizeObserver(() => {
        dialog.style.setProperty(property, `${element.offsetHeight}px`)
      })
      observer.observe(element)
      cleanup.current = () => {
        observer.disconnect()
        dialog.style.removeProperty(property)
      }
    },
    [property],
  )
}
