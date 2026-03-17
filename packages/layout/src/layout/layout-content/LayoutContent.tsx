'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './LayoutContent.module.css'
import { usePanel } from '../LayoutContext'
import { Panel } from '../../panel'
import { clsx } from '@midas-ds/components'

export type LayoutContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const LayoutContent = ({
  className,
  children,
  ...rest
}: LayoutContentProps) => {
  const { panel, setPanel } = usePanel()

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setPanel(null)
    }
  }

  return (
    <div
      className={clsx(className, styles.layoutContent)}
      {...rest}
    >
      {children}
      <Panel
        variant='dismiss'
        data-debug='Panel (dismiss)'
        isOpen={!!panel}
        onOpenChange={handleOpenChange}
        {...panel}
      />
    </div>
  )
}
