import { SidebarLinkProps } from '../Layout'
import styles from '../Layout.module.css'
import { Link } from 'react-aria-components'
import clsx from 'clsx'
import { useLayoutContext } from '../context/LayoutContext'

export const Navbar: React.FC = () => {
  const { items } = useLayoutContext()

  const navBarGroup = items.at(0)?.items

  return (
    <nav
      className={styles.navbar}
      aria-label='Bottenmeny'
    >
      {navBarGroup && (
        <ul className={clsx(styles.navbarList)}>
          {navBarGroup.map((link, i) => (
            <li key={i}>
              <NavbarItem {...link} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export const NavbarItem: React.FC<SidebarLinkProps> = ({
  title,
  href,
  icon: IconComponent,
  active,
}) => {
  return (
    <Link
      href={href}
      className={clsx(styles.navbarItem)}
      data-active={active}
      aria-current={active && 'page'}
    >
      <IconComponent size={20} />
      {title}
    </Link>
  )
}
