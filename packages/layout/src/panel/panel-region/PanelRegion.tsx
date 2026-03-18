'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { usePanels } from '../../layout'
import { DismissPanel } from '../dismiss-panel'

export type PanelRegionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelRegion = ({
  children,
  className,
  ...rest
}: PanelRegionProps) => {
  const { panels, closePanel, removePanel, resetPromoting } = usePanels()

  return (
    <div
      className={className}
      {...rest}
    >
      {panels.map(
        ({ id, isOpen, skipEnterAnimation, promoting, ...panel }, index, { length }) => (
          <DismissPanel
            aria-hidden={index < length - 1 || undefined}
            key={id}
            id={id}
            data-debug='Panel (dismiss)'
            isOpen={isOpen}
            skipEnterAnimation={skipEnterAnimation}
            promoting={promoting}
            onOpenChange={open => {
              if (!open) closePanel(id)
            }}
            onExited={() => removePanel(id)}
            onPromotionEnd={() => resetPromoting(id)}
            {...panel}
          />
        ),
      )}
      {children}
    </div>
  )
}
