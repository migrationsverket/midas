'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './LayoutContent.module.css'
import { usePanels } from '../LayoutContext'
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
  const { panels, setPanels } = usePanels()

  const handleOpenChange = (id: string) => (isOpen: boolean) => {
    if (!isOpen) {
      setPanels(openPanels =>
        openPanels.filter(openPanel => openPanel.id !== id),
      )
    }
  }

  return (
    <div
      className={clsx(className, styles.layoutContent)}
      {...rest}
    >
      {children}
      {panels.length > 0 &&
        panels.map(panel => (
          <Panel
            key={panel.id}
            variant='dismiss'
            data-debug='Panel (dismiss)'
            isOpen
            onOpenChange={handleOpenChange(panel.id)}
            {...panel}
          />
        ))}
    </div>
  )
}
