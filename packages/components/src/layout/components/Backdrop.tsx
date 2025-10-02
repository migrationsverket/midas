import * as React from 'react'
import clsx from '../../utils/clsx'
import { useLayoutContext } from '../context/LayoutContext'
import styles from '../Layout.module.css'

export const Backdrop: React.FC = () => {
  const { isOpened, setIsOpened } = useLayoutContext()

  if (!isOpened) return null

  return (
    <div
      className={clsx(styles.backdrop, styles.backdropOpened)}
      onClick={() => {
        setIsOpened?.(false)
      }}
      aria-hidden
    />
  )
}
