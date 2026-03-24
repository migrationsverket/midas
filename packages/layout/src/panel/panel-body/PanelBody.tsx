import { forwardRef, HTMLAttributes } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './PanelBody.module.css'

export type PanelBodyProps = HTMLAttributes<HTMLDivElement>

export const PanelBody = forwardRef<HTMLDivElement, PanelBodyProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx(className, styles.panelBody)}
      {...rest}
    />
  ),
)
