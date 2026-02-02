import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'

export type BreadcrumbProps = AriaBreadcrumbProps

export const Breadcrumb = ({ className, ...rest }: BreadcrumbProps) => (
  <AriaBreadcrumb
    className={clsx(className)}
    {...rest}
  />
)
