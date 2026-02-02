import {
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  Breadcrumb as AriaBreadcrumb,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import { Link } from '../link'
import styles from './Breadcrumbs.module.css'

/** @deprecated since v1.0.0 Use the compound `<Breadcrumbs>` + `<Breadcrumb>` API instead. */
export interface BreadcrumbItem {
  href: string
  title: string
  isDisabled?: boolean
}

export type BreadcrumbsProps<T extends object> = AriaBreadcrumbsProps<T>

function isDeprecatedUsage(props: Record<string, unknown>): boolean {
  if (!('items' in props) || !Array.isArray(props.items)) return false
  if (props.children != null && typeof props.children === 'function')
    return false

  const first = props.items[0]
  return first != null && 'href' in first && 'title' in first
}

export const Breadcrumbs = <T extends object>({
  className,
  ...rest
}: BreadcrumbsProps<T>) => {
  if (isDeprecatedUsage(rest)) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[Midas] Breadcrumbs: The `items` prop with {href, title} objects is deprecated. Use the compound <Breadcrumbs> + <Breadcrumb> API instead.'
      )
    }

    const { items, ...ariaProps } = rest

    return (
      <AriaBreadcrumbs
        className={clsx(styles.container, className)}
        {...ariaProps}
      >
        {(items as BreadcrumbItem[]).map(
          ({ title, href, isDisabled }, index) => (
            <AriaBreadcrumb key={title.toLocaleLowerCase() + index}>
              <Link
                href={href}
                isDisabled={isDisabled}
              >
                {title}
              </Link>
            </AriaBreadcrumb>
          )
        )}
      </AriaBreadcrumbs>
    )
  }

  return (
    <AriaBreadcrumbs
      className={clsx(styles.container, className)}
      {...rest}
    />
  )
}
