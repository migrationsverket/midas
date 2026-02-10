import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbProps = AriaBreadcrumbProps

export const Breadcrumb = ({
  className,
  children,
  ...rest
}: BreadcrumbProps) => (
  <AriaBreadcrumb
    className={clsx(className)}
    {...rest}
  >
    {(renderProps) => {
      const showSeparator = !renderProps.isCurrent
      return (
        <>
          {typeof children === 'function' ? children(renderProps) : children}
          {showSeparator ? (
            <span aria-hidden="true" className={styles.separator}>
              /
            </span>
          ) : null}
        </>
      )
    }}
  </AriaBreadcrumb>
)
