'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { DismissPanel, useDismissPanels } from '.'

export type PanelRegionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const DismissPanelOutlet = ({
  children,
  className,
  ...rest
}: PanelRegionProps) => {
  const { panels, closePanel, removePanel, resetPromoting } = useDismissPanels()

  return (
    <aside
      className={className}
      {...rest}
    >
      {panels.map(({ id, ...panel }, index, { length }) => (
        <DismissPanel
          aria-hidden={index < length - 1 || undefined}
          key={id}
          id={id}
          data-debug='Panel (dismiss)'
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
