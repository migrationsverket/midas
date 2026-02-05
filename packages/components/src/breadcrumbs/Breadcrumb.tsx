import { ReactNode } from 'react'
import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
  type BreadcrumbRenderProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbProps = AriaBreadcrumbProps

type RenderProps = BreadcrumbRenderProps & { defaultChildren: ReactNode }

export const Breadcrumb = ({
  className,
  children,
  ...rest
}: BreadcrumbProps) => (
  <AriaBreadcrumb
    className={clsx(className)}
    {...rest}
  >
    {(renderProps: RenderProps) => {
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
