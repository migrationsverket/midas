import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import styles from './PanelBody.module.css'

export type PanelBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelBody = forwardRef<HTMLDivElement, PanelBodyProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx(className, styles.panelBody)}
      {...rest}
    />
  ),
)
