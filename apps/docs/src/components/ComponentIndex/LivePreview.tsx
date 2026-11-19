import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import ErrorBoundary from '@docusaurus/ErrorBoundary'
import { I18nProvider, UNSAFE_PortalProvider } from 'react-aria'
import { findStories, pickStory, previewParameters } from './stories'
import { renderStory } from './renderStory'
import styles from './ComponentIndex.module.css'

/** Shrinks its content until it fits the preview box, never enlarges it */
const FitToBox = ({
  children,
  fit = true,
  width,
}: {
  children: ReactNode
  fit?: boolean
  width?: string
}) => {
  const [zoom, setZoom] = useState(1)
  // State, not a ref: overlays read the container while rendering, so the
  // story waits until it's attached
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const box = container?.parentElement
    if (!fit || !container || !box) return

    const resize = () => {
      const style = getComputedStyle(box)
      const width =
        box.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight)
      const height =
        box.clientHeight -
        parseFloat(style.paddingTop) -
        parseFloat(style.paddingBottom)
      setZoom(
        Math.min(
          1,
          width / container.scrollWidth,
          height / container.scrollHeight,
        ),
      )
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    observer.observe(box)
    return () => observer.disconnect()
  }, [fit, container])

  return (
    // inert: the preview is a picture of the component, it must not add tab stops
    <div
      ref={setContainer}
      className={styles.live}
      inert
      style={{ zoom, width, flexShrink: width ? 0 : undefined }}
    >
      {/* Overlays portal into the preview, so they're scaled and inert too */}
      {container && (
        <UNSAFE_PortalProvider getContainer={() => container}>
          {/* The docs are in Swedish, so dates and built-in texts are too,
              whatever the browser's language */}
          <I18nProvider locale='sv-SE'>{children}</I18nProvider>
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
        load()
          .then(stories => {
            const story = pickStory(stories)
            if (cancelled || !story) return
            setPreview(
              <FitToBox {...previewParameters(story)}>
                {renderStory(stories.default, story)}
              </FitToBox>,
            )
          })
          // E.g. a chunk that's gone after a deploy. The card works without
          // its preview, so it's left empty
          .catch((error: unknown) =>
            console.error(`No preview for ${title}`, error),
          )
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
      {/* A story that throws only loses its own preview, not the whole page */}
      <ErrorBoundary fallback={() => null}>{preview}</ErrorBoundary>
    </div>
  )
}
