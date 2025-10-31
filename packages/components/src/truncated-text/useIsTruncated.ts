import { useEffect, useRef, useState } from 'react'

export const useIsTruncated = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [isTruncated, setIsTruncated] = useState(false)

  const [rerenderSignal, setRerenderSignal] = useState({})

  function debounce(cb: (...args: unknown[]) => void, wait: number) {
    let timer: number
    return (...args: unknown[]) => {
      clearTimeout(timer)
      timer = window.setTimeout(() => cb(...args), wait)
    }
  }

  const handleResize = debounce(() => setRerenderSignal({}), 300)

  useEffect(() => {
    const element = ref.current
    window.addEventListener('resize', handleResize)

    setIsTruncated(
      element
        ? element.offsetWidth < element.scrollWidth ||
            element.offsetHeight < element.scrollHeight
        : false,
    )

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [rerenderSignal, handleResize])

  return {
    ref,
    isTruncated,
  }
}
