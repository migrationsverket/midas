import { useEffect, useState } from 'react'

interface Options {
  /**
   * Get the observed elements size with or without padding
   * @default false
   */
  includePadding?: boolean
  /**
   * Time in ms between each size measure
   * @default 500
   */
  delay?: number
}

/**
 * Observe an elements size change on resize
 */
export default function useObserveElement(
  element: HTMLElement | null,
  options: Options = {},
) {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const delay = options.delay === undefined ? 500 : options.delay
  const includePadding = !!options.includePadding

  useEffect(() => {
    if (!element) return

    const resizeObserver = new ResizeObserver(
      debounce(([entry]) => {
        const { inlineSize, blockSize } = includePadding
          ? entry.borderBoxSize[0]
          : entry.contentBoxSize[0]

        setSize({ width: inlineSize, height: blockSize })
      }, delay),
    )

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [delay, element, includePadding])

  return size
}

function debounce(
  callback: ResizeObserverCallback,
  delay: number,
): ResizeObserverCallback {
  let timeout: NodeJS.Timeout

  return (entries, observer) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(entries, observer)
    }, delay)
  }
}
