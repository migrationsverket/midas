import { useEffect, useState } from 'react'

export default function useObserveElement(
  element: HTMLElement | null,
  includePadding = false,
) {
  const debounce = (
    callback: ResizeObserverCallback,
    delay: number,
  ): ResizeObserverCallback => {
    let timeout: NodeJS.Timeout

    return (entries, observer) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        callback(entries, observer)
      }, delay)
    }
  }

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!element) return

    const resizeObserver = new ResizeObserver(
      debounce(entries => {
        const { inlineSize, blockSize } = includePadding
          ? entries[0].borderBoxSize[0]
          : entries[0].contentBoxSize[0]

        setWidth(inlineSize)
        setHeight(blockSize)
      }, 500),
    )

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [element, includePadding])

  return { width, height }
}
