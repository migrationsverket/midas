import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './PanelBody.module.css'

export type PanelBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const PanelBody = ({ className, ...rest }: PanelBodyProps) => (
  <aside
    className={clsx(className, styles.panelBody)}
    {...rest}
  />
)
