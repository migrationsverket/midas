import { SidebarLinkProps } from '../Layout'
import styles from '../Layout.module.css'
import { Link, RouterProvider } from 'react-aria-components'
import clsx from '../../utils/clsx'
import { useLayoutContext } from '../context/LayoutContext'
import { Badge, BadgeContainer } from '../../badge'
import { useLocalizedStringFormatter } from '../../utils/intl'
import messages from '../intl/translations.json'

export const Navbar: React.FC = () => {
  const { items, clientSideRouter, clientSideHref } = useLayoutContext()
  const strings = useLocalizedStringFormatter(messages)

  const navBarGroup = items.at(0)?.items

  return (
    <nav
      className={styles.navbar}
      aria-label={strings.format('bottomMenu')}
    >
      {navBarGroup && (
        <ul className={clsx(styles.navbarList)}>
          {clientSideRouter ? (
            <RouterProvider
              navigate={clientSideRouter}
              useHref={clientSideHref}
            >
              <NavbarItemsList items={navBarGroup} />
            </RouterProvider>
          ) : (
            <NavbarItemsList items={navBarGroup} />
          )}
        </ul>
      )}
    </nav>
  )
}

const NavbarItemsList: React.FC<{ items: SidebarLinkProps[] }> = ({
  items,
}) => (
  <>
    {items.map(({ href, active, icon: IconComponent, title, hasBadge }, i) => (
      <li key={i}>
        <Link
          href={href}
          className={clsx(styles.navbarItem)}
          data-active={active}
          aria-current={active && 'page'}
        >
          <BadgeContainer>
            <IconComponent size={20} />
            {hasBadge && <Badge />}
          </BadgeContainer>
          {title}
        </Link>
      </li>
    ))}
  </>
)
