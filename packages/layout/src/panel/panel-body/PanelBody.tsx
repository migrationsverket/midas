import clsx from 'clsx'
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react'
import styles from './PanelBody.module.css'

export type PanelBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const PanelBody = forwardRef<HTMLElement, PanelBodyProps>(
  ({ className, ...rest }, ref) => (
    <aside
      ref={ref}
      className={clsx(className, styles.panelBody)}
      {...rest}
    />
  ),
)
