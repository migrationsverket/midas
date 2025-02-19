import * as React from 'react'
import clsx from 'clsx'
import { useLayoutContext } from '../context/LayoutContext'
import styles from '../Layout.module.css'

export const Backdrop: React.FC = () => {
  const { isOpened, setIsOpened } = useLayoutContext()
  return (
    <div
      className={clsx(styles.backdrop, isOpened && styles.backdropOpened)}
      onClick={() => setIsOpened(false)}
      aria-hidden
    />
  )
}
