'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'
import { FocusScope, useFocusManager } from 'react-aria'
import clsx from '../utils/clsx'
import styles from './FileList.module.css'

export type FileListProps = HTMLAttributes<HTMLUListElement>

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
 * batches unpredictably) for the focused element disappearing, either with
 * its whole row or on its own, e.g. the preview button when an upload
 * restarts. Focus then moves to the next button in the same row, or to the
 * first button in the list if the row is gone, instead of falling through to
 * `<body>`. It only acts when the element that had focus is actually gone, so
 * it never second-guesses focus a consumer already set, e.g. after a delete
 * that failed and left the row in place, and never pulls focus back from
 * elsewhere. Falls back to the list itself if the last row was removed.
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

    let lastFocused: Element | null = null
    let lastRow: Element | null = null
    const onFocusIn = (event: FocusEvent) => {
      lastFocused = event.target as Element
      lastRow = lastFocused.closest('li')
    }

    // Focus leaving for real, rather than with its element: the element is
    // still there afterwards, so stop guarding it
    const onFocusOut = (event: FocusEvent) => {
      const target = event.target as Element
      queueMicrotask(() => {
        if (target === lastFocused && target.isConnected) lastFocused = null
      })
    }

    const observer = new MutationObserver(() => {
      if (!lastFocused || lastFocused.isConnected) return
      if (document.activeElement !== document.body) return

      const sibling =
        lastRow?.isConnected &&
        lastRow.querySelector<HTMLElement>(TABBABLE_IN_ROW)
      lastFocused = null

      if (sibling) {
        sibling.focus()
      } else if (!focusManagerRef.current?.focusFirst({ tabbable: true })) {
        container.focus()
      }
    })

    container.addEventListener('focusin', onFocusIn)
    container.addEventListener('focusout', onFocusOut)
    observer.observe(container, { childList: true, subtree: true })
    return () => {
      container.removeEventListener('focusin', onFocusIn)
      container.removeEventListener('focusout', onFocusOut)
      observer.disconnect()
    }
  }, [containerRef])

  return null
}

const TABBABLE_IN_ROW =
  'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
