import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { clsx } from '@midas-ds/utils'
import styles from './CardBody.module.css'

export type CardBodyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const CardBody = ({ className, ...rest }: CardBodyProps) => (
  <div
    className={clsx(className, styles.cardBody)}
    {...rest}
  />
)
