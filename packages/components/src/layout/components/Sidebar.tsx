'use client'

import clsx from 'clsx'
import { SidebarLinkGroup } from '../Layout'
import styles from '../Layout.module.css'
import { RouterProvider } from 'react-aria-components'
import { Button } from '../../button'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import * as React from 'react'
import { SidebarLink } from './SidebarLink'
import { useLayoutContext } from '../context/LayoutContext'
import { useLocalizedStringFormatter } from '../../utils/intl'
import messages from '../intl/translations.json'

export const Sidebar: React.FC = () => {
  const {
    items,
    app,
    isOpened,
    isCollapsed,
    setIsCollapsed,
    setIsOpened,
    clientSideRouter,
    clientSideHref,
    id,
  } = useLayoutContext()

  const strings = useLocalizedStringFormatter(messages)

  const LinkTree = ({ group }: { group: SidebarLinkGroup }) => {
    return (
      <ul className={styles.list}>
        {group.items.map((link, i) => (
          <li
            key={'link_' + i}
            className={clsx(
              styles.listItem,
              isCollapsed && styles.listItemCollapsed,
            )}
          >
            <SidebarLink {...link} />
          </li>
        ))}
      </ul>
    )
  }

  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && setIsOpened !== undefined) {
        setIsOpened(false)
      }
    }
    window.addEventListener('keydown', handleEsc)

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [setIsOpened])

  return (
    <aside
      id={id}
      className={clsx(
        styles.sidebar,
        isCollapsed && styles.sidebarCollapsed,
        isOpened && styles.sidebarOpened,
      )}
    >
      <div className={styles.sidebarHeader}>
        {!isCollapsed && <p className={styles.appName}>{app.name}</p>}
        <Button
          variant='icon'
          aria-label={
            isCollapsed
              ? strings.format('maximizeMenu')
              : strings.format('minimizeMenu')
          }
          onPress={() => setIsCollapsed(!isCollapsed)}
          className={styles.collapseButton}
        >
          {isCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </Button>
      </div>
      <nav
        className={styles.sidebarNav}
        aria-label={strings.format('sidebarMenu')}
      >
        <ul className={styles.list}>
          {items.map((group, i) => (
            <li key={'list_' + i}>
              {group.title && !isCollapsed && (
                <p className={styles.listGroupTitle}>{group.title}</p>
              )}
              {clientSideRouter ? (
                <RouterProvider
                  navigate={clientSideRouter}
                  useHref={clientSideHref}
                >
                  <LinkTree group={group} />
                </RouterProvider>
              ) : (
                <LinkTree group={group} />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
