import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb,
} from 'react-aria-components'
import { Link } from '@midas-ds/link'

import styles from './Breadcrumbs.module.css'

export interface BreadcrumbProps {
  items: MidasBreadcrumb[]
}

export interface MidasBreadcrumb {
  href: string
  title: string
  isDisabled?: boolean
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <AriaBreadcrumbs className={styles.container}>
      {items.map((item) => (
        <Breadcrumb key={item.title.toLocaleLowerCase()}>
          <Link
            href={item.href}
            isDisabled={item.isDisabled}
          >
            {item.title}
          </Link>
        </Breadcrumb>
      ))}
    </AriaBreadcrumbs>
  )
}
