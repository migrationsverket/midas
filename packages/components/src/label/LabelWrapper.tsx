import React from 'react'
import styles from './LabelWrapper.module.css'
import { InfoPopover, InfoPopoverProps } from './InfoPopover'

export const LabelWrapper: React.FC<{
  children: React.ReactNode
  popover?: InfoPopoverProps
}> = ({ children, popover }) => {
  if (popover)
    return (
      <div className={styles.labelPopover}>
        {children}
        <InfoPopover {...popover} />
      </div>
    )
  return children
}
