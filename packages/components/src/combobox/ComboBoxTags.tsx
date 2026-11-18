import {
  type HTMLAttributes,
  type RefObject,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'
import { type Key, ComboBoxStateContext } from 'react-aria-components'
import { VisuallyHidden } from 'react-aria'
import { Tag, TagGroup, TagList } from '../tag'
import { useLocalizedStringFormatter } from '../utils/intl'
import type { SelectionMode } from '../common/types'
import clsx from '../utils/clsx'
import messages from './intl/translations.json'
import { ComboBoxScrollCount } from './ComboBoxScrollCount'
import styles from './ComboBox.module.css'
import tagStyles from '../tag/Tag.module.css'

export type TagOverflow = 'wrap' | 'scroll' | 'scroll-count' | 'collapse'

interface ComboBoxTagsProps {
  selectionMode?: SelectionMode
  isDisabled?: boolean
  isReadOnly?: boolean
  /** Gets focus when the last tag is removed */
  inputRef: RefObject<HTMLInputElement | null>
  tagOverflow?: TagOverflow
  /** The row the tags and the input share */
  container: HTMLDivElement | null
}

export const ComboBoxTags = ({
  selectionMode,
  isDisabled,
  isReadOnly,
  inputRef,
  tagOverflow = 'wrap',
  container,
}: ComboBoxTagsProps) => {
  const strings = useLocalizedStringFormatter(messages)
  const state = useContext(ComboBoxStateContext)
  const selectedItems = state?.selectedItems ?? []

  const isCollapsing = tagOverflow === 'collapse'
  const visibleCount = useVisibleTagCount(
    isCollapsing,
    selectedItems.map(({ key }) => key),
    container,
  )
  const hiddenCount = selectedItems.length - visibleCount

  // With 'scroll-count' the tags scroll in a strip of their own, and the
  // input stays in view next to it
  const isCountingScroll = tagOverflow === 'scroll-count'
  const [tagScroller, setTagScroller] = useState<HTMLDivElement | null>(null)
  const scroller = isCountingScroll ? tagScroller : container

  // After a pick, scroll to the end: to the input in a 'scroll' row, and to
  // the new tag in a 'scroll-count' strip. React Aria renders the new tag in
  // a later pass, so this waits for it
  useLayoutEffect(() => {
    if (!isScrollingRow(tagOverflow) || !container || !scroller) return

    const observer = new MutationObserver(() => {
      if (container.querySelector('input') === document.activeElement) {
        scroller.scrollLeft = scroller.scrollWidth
      }
    })
    observer.observe(scroller, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [tagOverflow, container, scroller])

  const handleRemove = (keys: Set<Key>) => {
    const isLastTag = state?.selectedItems.length === 1

    state?.selectionManager.toggleSelection(Array.from(keys)[0])

    // React Aria moves focus to the next tag, but the tag list goes away with
    // the last one, and focus would be left on the page. The input is where
    // the user carries on
    if (isLastTag) inputRef.current?.focus()
  }

  if (selectionMode !== 'multiple' || !selectedItems.length) {
    return null
  }

  return (
    <>
      <TagGroup
        aria-label={strings.format('selectedItems')}
        onRemove={handleRemove}
        selectionBehavior='toggle'
        className={clsx(styles.tags, isCountingScroll && styles.tagScroller)}
        ref={isCountingScroll ? setTagScroller : undefined}
        data-tag-scroller={isCountingScroll || undefined}
      >
        <TagList
          items={selectedItems.slice(0, visibleCount)}
          className={styles.tags}
        >
          {item => (
            <Tag
              isDismissable={!isDisabled && !isReadOnly}
              id={item.key}
              isDisabled={isDisabled}
              key={item.key}
              textValue={item.textValue}
            >
              {item.textValue}
            </Tag>
          )}
        </TagList>
        {isCountingScroll && <ComboBoxScrollCount container={tagScroller} />}
      </TagGroup>
      {isCollapsing && (
        <>
          {/* Measures the widest "+n" can get, so there's room kept for it */}
          <MoreTags
            count={selectedItems.length}
            className={styles.measure}
            data-measure-more
            aria-hidden
          />
          {hiddenCount > 0 && (
            <MoreTags count={hiddenCount}>
              <VisuallyHidden>
                {`${hiddenCount} ${strings.format('moreSelected')}`}
              </VisuallyHidden>
            </MoreTags>
          )}
        </>
      )}
    </>
  )
}

interface MoreTagsProps extends HTMLAttributes<HTMLSpanElement> {
  count: number
  'data-measure-more'?: boolean
}

const MoreTags = ({ count, className, children, ...rest }: MoreTagsProps) => (
  <span
    className={clsx(tagStyles.tag, styles.moreTags, className)}
    {...rest}
  >
    <span
      className={tagStyles.tagText}
      aria-hidden={children ? true : undefined}
    >
      +{count}
    </span>
    {children}
  </span>
)

/**
 * How many tags fit on one row, with room kept for the "+n" chip and the
 * input's min-width. Renders every tag first to measure them, then only
 * the ones that fit, both before the browser paints.
 */
const useVisibleTagCount = (
  isEnabled: boolean,
  keys: Key[],
  container: HTMLDivElement | null,
) => {
  const [width, setWidth] = useState(0)
  const [fit, setFit] = useState<{ signature: string; count: number }>()
  // Bumped when the DOM in the row changes, since React Aria renders the
  // tags in a later pass than this component
  const [domVersion, setDomVersion] = useState(0)
  const signature = `${keys.join('\u0000')}|${width}`

  useLayoutEffect(() => {
    if (!isEnabled || !container) return

    const resizeObserver = new ResizeObserver(([entry]) =>
      setWidth(Math.round(entry.contentRect.width)),
    )
    const mutationObserver = new MutationObserver(() =>
      setDomVersion(version => version + 1),
    )
    resizeObserver.observe(container)
    mutationObserver.observe(container, { childList: true, subtree: true })
    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [isEnabled, container])

  const isMeasured = fit?.signature === signature

  useLayoutEffect(() => {
    if (!isEnabled || isMeasured || !container) return

    const tags = [...container.querySelectorAll('[role="row"]')]
    // Wait until every tag is rendered, to measure them all
    if (tags.length !== keys.length) return
    const input = container.querySelector('input')
    const more = container.querySelector('[data-measure-more]')
    const style = getComputedStyle(container)
    const gap = parseFloat(style.columnGap) || 0
    const right =
      container.getBoundingClientRect().right - parseFloat(style.paddingRight)
    const inputWidth = input ? parseFloat(getComputedStyle(input).minWidth) : 0
    const moreWidth = more?.getBoundingClientRect().width ?? 0

    const fits = (count: number, reserved: number) =>
      count === 0 ||
      tags[count - 1].getBoundingClientRect().right + gap + reserved <= right

    let count = tags.length
    if (!fits(count, inputWidth)) {
      count = tags.length - 1
      while (count > 0 && !fits(count, moreWidth + gap + inputWidth)) count--
    }

    // Measuring the DOM and then rendering again before paint is what layout
    // effects are for. The signature check above stops it after one pass
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFit({ signature, count })
  }, [container, isEnabled, isMeasured, signature, keys.length, domVersion])

  return isEnabled && isMeasured ? fit.count : keys.length
}

/** The versions where the tags and the input share one row that scrolls */
export const isScrollingRow = (tagOverflow: TagOverflow) =>
  tagOverflow === 'scroll' || tagOverflow === 'scroll-count'
