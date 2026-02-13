import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Main.module.css'
import { clsx } from '@midas-ds/components'

export type MainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Main = ({ className, ...rest }: MainProps) => (
  <main
    className={clsx(className, styles.main)}
    {...rest}
  />
)
