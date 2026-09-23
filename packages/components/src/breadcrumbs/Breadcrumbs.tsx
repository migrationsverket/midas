import {
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbsProps<T> = AriaBreadcrumbsProps<T>

export const Breadcrumbs = <T extends object>({
  className,
  ...rest
}: BreadcrumbsProps<T>) => {
  return (
    <AriaBreadcrumbs
      className={clsx(styles.container, className)}
      {...rest}
    />
  )
}
