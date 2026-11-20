import { useLayoutEffect, useRef, useState } from 'react'
import clsx from '../utils/clsx'
import styles from './ComboBox.module.css'
import tagStyles from '../tag/Tag.module.css'

interface ComboBoxScrollCountProps {
  /** The strip the tags scroll in */
  container: HTMLDivElement | null
}

/**
 * Spike: "+n" pinned to the right edge of the scrolling tags, counting the
 * tags that are out of view to the right. Every tag is still in the tag
 * list, so screen readers and the arrow keys reach them all, and this is
 * only a visual hint. Clicking it is like clicking the field: the input gets
 * focus.
 */
export const ComboBoxScrollCount = ({
  container,
}: ComboBoxScrollCountProps) => {
  const [count, setCount] = useState(0)
  const chipRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (!container) return

    const update = () =>
      setCount(countTagsAfterView(container, chipRef.current))

    update()
    // Scrolling, resizing and tags coming and going all change the count
    container.addEventListener('scroll', update, { passive: true })
    const resizeObserver = new ResizeObserver(update)
    const mutationObserver = new MutationObserver(update)
    resizeObserver.observe(container)
    mutationObserver.observe(container, { childList: true, subtree: true })
    return () => {
      container.removeEventListener('scroll', update)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [container])

  return (
    <span
      className={styles.scrollCountAnchor}
      aria-hidden
    >
      <span
        ref={chipRef}
        className={clsx(tagStyles.tag, styles.scrollCount)}
        data-scroll-count={count}
      >
        <span className={tagStyles.tagText}>+{count}</span>
      </span>
    </span>
  )
}

/**
 * How many tags end to the right of what's in view, counting the ones
 * the chip covers once there are any
 */
export const countTagsAfterView = (
  container: HTMLElement,
  chip: HTMLElement | null,
) => {
  const { paddingRight } = getComputedStyle(container)
  const right =
    container.getBoundingClientRect().right - parseFloat(paddingRight)
  const tags = [...container.querySelectorAll('[role="row"]')]
  const countAfter = (edge: number) =>
    tags.filter(tag => tag.getBoundingClientRect().right > edge + 0.5).length

  if (countAfter(right) === 0) return 0
  // The chip stays laid out while it's invisible, so its width is there
  // to read before it shows
  return countAfter(right - (chip?.getBoundingClientRect().width ?? 0))
}
