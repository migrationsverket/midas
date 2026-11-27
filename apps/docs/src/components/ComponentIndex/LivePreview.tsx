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
  const [layout, setLayout] = useState<{ zoom: number; width?: string }>({
    zoom: 1,
    width,
  })
  // State, not a ref: overlays read the container while rendering, so the
  // story waits until it's attached
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const box = container?.parentElement
    if (!fit || !container || !box) return

    const resize = () => {
      const style = getComputedStyle(box)
      const boxWidth =
        box.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight)
      const boxHeight =
        box.clientHeight -
        parseFloat(style.paddingTop) -
        parseFloat(style.paddingBottom)

      // Zooming out gives the content more room, so text wraps differently
      // and its size changes. Measuring at the current zoom made the zoom
      // chase its own tail at some widths. Instead, measure at zoom 1 with
      // the room a candidate zoom would give, keep the largest zoom that
      // fits, and lock that layout so applying the zoom can't reflow it.
      const fits = (zoom: number) => {
        container.style.width = width ?? ''
        container.style.maxWidth = width ? '' : `${boxWidth / zoom}px`
        return {
          zoom,
          width: width ?? `${container.offsetWidth}px`,
          fits:
            container.scrollWidth * zoom <= boxWidth + 0.5 &&
            container.scrollHeight * zoom <= boxHeight + 0.5,
        }
      }

      // Without zoom the box would squeeze the content to its own width
      container.style.flexShrink = '0'
      container.style.zoom = '1'
      let best = fits(1)
      if (!best.fits) {
        // Fits by definition: the content laid out at full size, scaled down
        container.style.maxWidth = ''
        container.style.width = width ?? ''
        const smallest = Math.min(
          boxWidth / container.scrollWidth,
          boxHeight / container.scrollHeight,
        )
        best = {
          zoom: smallest,
          width: width ?? `${container.offsetWidth}px`,
          fits: true,
        }
        // Wrapping makes this almost but not quite monotonic, which is fine
        // for picking a good zoom, and the result is the same every time
        let [low, high] = [smallest, 1]
        for (let step = 0; step < 7; step++) {
          const candidate = fits((low + high) / 2)
          if (candidate.fits) [best, low] = [candidate, candidate.zoom]
          else high = candidate.zoom
        }
      }

      const next = { zoom: best.zoom, width: best.width }
      container.style.maxWidth = ''
      container.style.zoom = String(next.zoom)
      container.style.width = next.width
      setLayout(next)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    observer.observe(box)
    return () => observer.disconnect()
  }, [fit, container, width])

  return (
    // inert: the preview is a picture of the component, it must not add tab stops
    <div
      ref={setContainer}
      className={styles.live}
      inert
      style={{ ...layout, flexShrink: layout.width ? 0 : undefined }}
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
export const LivePreview = ({ story }: { story: string }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [preview, setPreview] = useState<ReactNode>(null)

  useEffect(() => {
    const load = findStories(story)
    const element = ref.current
    if (!load || !element) return

    let cancelled = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        load()
          .then(stories => {
            const picked = pickStory(stories)
            if (cancelled || !picked) return
            setPreview(
              <FitToBox {...previewParameters(picked)}>
                {renderStory(stories.default, picked)}
              </FitToBox>,
            )
          })
          // E.g. a chunk that's gone after a deploy. The card works without
          // its preview, so it's left empty
          .catch((error: unknown) =>
            console.error(`No preview for ${story}`, error),
          )
      },
      { rootMargin: '200px' },
    )
    observer.observe(element)
    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [story])

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
