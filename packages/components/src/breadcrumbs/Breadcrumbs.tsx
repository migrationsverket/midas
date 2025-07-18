import {
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  Breadcrumb,
} from 'react-aria-components'
import clsx from 'clsx'
import { Link } from '../link'
import styles from './Breadcrumbs.module.css'

export interface BreadcrumbItem {
  href: string
  title: string
  isDisabled?: boolean
}

export interface BreadcrumbsProps<T extends BreadcrumbItem>
  extends AriaBreadcrumbsProps<T> {
  items: T[]
}

export const Breadcrumbs = <T extends BreadcrumbItem>({
  items,
  className,
  ...rest
}: BreadcrumbsProps<T>) => (
  <AriaBreadcrumbs
    className={clsx(styles.container, className)}
    {...rest}
  >
    {items.map(({ title, href, isDisabled }, index) => (
      <Breadcrumb key={title.toLocaleLowerCase() + index}>
        <Link
          href={href}
          isDisabled={isDisabled}
        >
          {title}
        </Link>
      </Breadcrumb>
    ))}
  </AriaBreadcrumbs>
)

/** @deprecated since v10.3.0 please use `BreadcrumbsProps` instead */
export type BreadcrumbProps<T extends BreadcrumbItem> = BreadcrumbsProps<T>
