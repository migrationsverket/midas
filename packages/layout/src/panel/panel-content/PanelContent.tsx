import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import styles from './PanelContent.module.css'

export type PanelContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const PanelContent = forwardRef<HTMLDivElement, PanelContentProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx(className, styles.panelContent)}
      {...rest}
    />
  ),
)
