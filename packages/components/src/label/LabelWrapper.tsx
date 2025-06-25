import React from 'react'
import styles from './LabelWrapper.module.css'
import { InfoPopover, InfoPopoverProps } from './InfoPopover'

export interface LabelWrapperContextValue {
  popoverId?: string
}
export const LabelWrapperContext = React.createContext<
  LabelWrapperContextValue | undefined
>(undefined)

export const useLabelWrapperContext = () =>
  React.useContext(LabelWrapperContext)

export const LabelWrapper: React.FC<{
  children: React.ReactNode
  popover?: InfoPopoverProps
}> = ({ children, popover }) => {
  const popoverId = React.useId()

  if (popover)
    return (
      <LabelWrapperContext.Provider value={{ popoverId }}>
        <div className={styles.labelPopover}>
          {children}
          <InfoPopover {...popover} />
        </div>
      </LabelWrapperContext.Provider>
    )

  return children
}
