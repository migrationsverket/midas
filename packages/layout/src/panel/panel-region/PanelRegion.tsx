'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { usePanels } from '../../layout'
import { Panel } from '../Panel'

export type PanelRegionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelRegion = ({
  children,
  className,
  ...rest
}: PanelRegionProps) => {
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
      className={className}
      {...rest}
    >
      {panels.map((panel, index, { length }) => (
        <Panel
          aria-hidden={length > 1 && index === 0}
          key={panel.id}
          variant='dismiss'
          data-debug='Panel (dismiss)'
          isOpen
          onOpenChange={handleOpenChange(panel.id)}
          {...panel}
        />
      ))}
      {children}
    </div>
  )
}
