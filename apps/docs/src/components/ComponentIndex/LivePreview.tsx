import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { UNSAFE_PortalProvider } from 'react-aria'
import { findStories, pickStory, shouldFit } from './stories'
import { renderStory } from './renderStory'
import styles from './ComponentIndex.module.css'

/** Shrinks its content until it fits the preview box, never enlarges it */
const FitToBox = ({ children, fit }: { children: ReactNode; fit: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [zoom, setZoom] = useState(1)
  // The story waits for the container: overlays read it while rendering, and a
  // ref is only attached after the first render
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const element = ref.current
    const box = element?.parentElement
    if (!fit || !element || !box) return

    const resize = () => {
      const { width, height } = box.getBoundingClientRect()
      const padding = 16
      setZoom(
        Math.min(
          1,
          (width - padding) / element.scrollWidth,
          (height - padding) / element.scrollHeight,
        ),
      )
    }
    const observer = new ResizeObserver(resize)
    observer.observe(element)
    observer.observe(box)
    return () => observer.disconnect()
  }, [fit])

  return (
    // inert: the preview is a picture of the component, it must not add tab stops
    <div
      ref={element => {
        ref.current = element
        setContainer(element)
      }}
      className={styles.live}
      inert
      style={{ zoom }}
    >
      {/* Overlays portal into the preview, so they're scaled and inert too */}
      {container && (
        <UNSAFE_PortalProvider getContainer={() => container}>
          {children}
        </UNSAFE_PortalProvider>
      )}
    </div>
  )
}

/** The component's story, loaded once the card scrolls into view */
export const LivePreview = ({ title }: { title: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [preview, setPreview] = useState<ReactNode>(null)

  useEffect(() => {
    const load = findStories(title)
    const element = ref.current
    if (!load || !element) return

    let cancelled = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        load().then(stories => {
          const story = pickStory(title, stories)
          if (!cancelled && story) {
            setPreview(renderStory(stories.default, story))
          }
        })
      },
      { rootMargin: '200px' },
    )
    observer.observe(element)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [title])

  return (
    <div
      ref={ref}
      className={styles.preview}
    >
      {preview && <FitToBox fit={shouldFit(title)}>{preview}</FitToBox>}
    </div>
  )
}
