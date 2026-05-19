'use client'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Panel } from './Panel'
import { usePanels } from './usePanels'
import styles from './PanelRegion.module.css'

export type PanelRegionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelRegion = ({
  children,
  className,
  ...rest
}: PanelRegionProps) => {
  const { panels, panelVariant, closePanel, removePanel, resetPromoting } = usePanels()
  const hasOpenPanels = panels.length > 0

  return (
    <div
      className={clsx(className, panelVariant === 'push' && styles.push)}
      data-open={panelVariant === 'push' && hasOpenPanels ? true : undefined}
      {...rest}
    >
      {panels.map(({ id, ...panel }, index, { length }) => (
        <Panel
          aria-hidden={index < length - 1 || undefined}
          key={id}
          id={id}
onOpenChange={open => {
            if (!open) closePanel(id)
          }}
          onExited={() => removePanel(id)}
          onPromotionEnd={() => resetPromoting(id)}
          {...panel}
        />
      ))}
      {children}
    </div>
  )
}
