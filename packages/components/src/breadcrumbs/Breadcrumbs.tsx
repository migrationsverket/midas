import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb,
} from 'react-aria-components'
import { Link } from '../link'

import styles from './Breadcrumbs.module.css'

export interface BreadcrumbProps {
  items: {
    href: string
    title: string
    isDisabled?: boolean
  }[]
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <AriaBreadcrumbs className={styles.container}>
      {items.map((item, index) => (
        <Breadcrumb key={item.title.toLocaleLowerCase() + index}>
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
