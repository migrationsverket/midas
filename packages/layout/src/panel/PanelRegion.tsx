'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Panel } from './Panel'
import { usePanels } from './usePanels'

export type PanelRegionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const PanelRegion = ({
  children,
  className,
  ...rest
}: PanelRegionProps) => {
  const { panels, closePanel, removePanel, resetPromoting } = usePanels()

  return (
    <aside
      className={className}
      {...rest}
    >
      {panels.map(({ id, ...panel }, index, { length }) => (
        <Panel
          aria-hidden={index < length - 1 || undefined}
          key={id}
          id={id}
          data-debug='Panel'
          onOpenChange={open => {
            if (!open) closePanel(id)
          }}
          onExited={() => removePanel(id)}
          onPromotionEnd={() => resetPromoting(id)}
          {...panel}
        />
      ))}
      {children}
    </aside>
  )
}
