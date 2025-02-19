'use client'

import clsx from 'clsx'
import { App, SidebarLinkGroup } from '../Layout'
import styles from '../Layout.module.css'
import { RouterProvider } from '../../link'
import { Button } from '../../button'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import * as React from 'react'
import { SidebarLink } from './SidebarLink'

export interface MidasSidebar {
  items: SidebarLinkGroup[]
  app: App
  isOpened?: boolean
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
  clientSideRouter?: (path: string, routerOptions: undefined) => void
}

export const Sidebar: React.FC<MidasSidebar> = ({
  items,
  app,
  isOpened,
  isCollapsed,
  setIsCollapsed,
  setIsOpened,
  clientSideRouter,
}) => {
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
            <SidebarLink
              {...link}
              isCollapsed={isCollapsed}
              setIsOpened={setIsOpened}
            />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <aside
      id='midasMainMenu'
      className={clsx(
        styles.sidebar,
        isCollapsed && styles.sidebarCollapsed,
        isOpened && styles.sidebarOpened,
      )}
    >
      <nav className={styles.sidebarNav}>
        <ul className={styles.list}>
          {items.map((group, i) => (
            <li key={'list_' + i}>
              {group.title && !isCollapsed && (
                <p className={styles.listGroupTitle}>{group.title}</p>
              )}
              {clientSideRouter ? (
                <RouterProvider navigate={clientSideRouter}>
                  <LinkTree group={group} />
                </RouterProvider>
              ) : (
                <LinkTree group={group} />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.sidebarFooter}>
        {!isCollapsed && <p className={styles.appName}>{app.name}</p>}
        <Button
          variant='tertiary'
          aria-label={isCollapsed ? 'Maximera sidomenyn' : 'Minimera sidomenyn'}
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
    </aside>
  )
}
