'use client'

import {
  Fragment,
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { FocusScope, useFocusManager } from 'react-aria'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import { useFilePickerContext } from '../file-picker/FilePickerContext'
import { FileListItem } from './FileListItem'
import styles from './FileList.module.css'
import messages from './intl/translations.json'

export interface FileListProps extends Omit<
  HTMLAttributes<HTMLUListElement>,
  'children'
> {
  /**
   * The rows. Inside a `FilePicker`, pass a function to render a row for
   * each selected file, e.g. with its upload status:
   * `{file => <FileListItem file={file} status={...} />}`. Leave out to list
   * the files with a delete button each.
   */
  children?: ReactNode | ((file: File) => ReactNode)
}

const defaultRow = (file: File) => <FileListItem file={file} />

export const FileList = ({ className, children, ...props }: FileListProps) => {
  const listRef = useRef<HTMLUListElement>(null)
  const filePicker = useFilePickerContext()
  const strings = useLocalizedStringFormatter(messages)
  const renderRow =
    typeof children === 'function'
      ? children
      : filePicker && children === undefined
        ? defaultRow
        : undefined

  const pickerFiles = filePicker?.files ?? []

  if (renderRow && pickerFiles.length === 0) return null

  return (
    <FocusScope>
      <ul
        aria-label={renderRow ? strings.format('selectedFiles') : undefined}
        {...props}
        ref={listRef}
        tabIndex={-1}
        className={clsx(styles.fileList, className)}
      >
        <FocusGuard containerRef={listRef} />
        {renderRow
          ? pickerFiles.map(file => (
              <Fragment key={`${file.name}-${file.size}-${file.lastModified}`}>
                {renderRow(file)}
              </Fragment>
            ))
          : (children as ReactNode)}
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
 * moves focus to a sibling's action button instead of letting it fall
 * through to `<body>` — only once a removal has actually happened, so it
 * never second-guesses focus a consumer already set (e.g. after a delete
 * that failed and left the row in place, focus just stays where it was).
 * Falls back to the list itself if the removed row was the last one.
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
      const hadRemoval = mutations.some(m => m.removedNodes.length > 0)
      if (!hadRemoval) return
      if (document.activeElement !== document.body) return

      if (!focusManagerRef.current?.focusFirst({ tabbable: true })) {
        container.focus()
      }
    })

    observer.observe(container, { childList: true })
    return () => observer.disconnect()
  }, [containerRef])

  return null
}
