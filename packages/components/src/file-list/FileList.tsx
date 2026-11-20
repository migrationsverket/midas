'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'
import { FocusScope, useFocusManager } from 'react-aria'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'

export type FileListProps = HTMLAttributes<HTMLUListElement>

/**
 * A list of files the user has picked or uploaded, one `FileListItem` per
 * file. Give it an `aria-label` that says what the files are for.
 */
export const FileList = ({ className, children, ...props }: FileListProps) => {
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <FocusScope>
      <ul
        {...props}
        ref={listRef}
        tabIndex={-1}
        className={clsx(styles.fileList, className)}
      >
        <FocusGuard containerRef={listRef} />
        {children}
      </ul>
    </FocusScope>
  )
}

interface FocusGuardProps {
  containerRef: React.RefObject<HTMLUListElement | null>
}

/**
 * Renderless. Watches the DOM directly (not React's render cycle, which
 * batches unpredictably) for a row disappearing while it held focus, and
 * moves focus to the first button in the row that took its place, or in the
 * row before if it was the last one, instead of letting it fall through to
 * `<body>`. Only once a removal has actually happened, so it never
 * second-guesses focus a consumer already set (e.g. after a delete that
 * failed and left the row in place, focus just stays where it was).
 * Falls back to the list itself if there are no rows left.
 */
const FocusGuard = ({ containerRef }: FocusGuardProps) => {
  const focusManager = useFocusManager()
  const focusManagerRef = useRef(focusManager)

  useEffect(() => {
    focusManagerRef.current = focusManager
  })

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new MutationObserver(mutations => {
      const removal = mutations.find(m => m.removedNodes.length > 0)
      if (!removal) return
      if (document.activeElement !== document.body) return

      // The record knows where the row was: the row after it took its place
      const row = [removal.nextSibling, removal.previousSibling].find(
        (node): node is Element => node instanceof Element && node.isConnected,
      )
      if (
        !row ||
        !focusManagerRef.current?.focusNext({ from: row, tabbable: true })
      ) {
        container.focus()
      }
    })

    observer.observe(container, { childList: true })
    return () => observer.disconnect()
  }, [containerRef])

  return null
}
