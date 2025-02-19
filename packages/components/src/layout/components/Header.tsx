import { App, SidebarUser } from '../Layout'
import styles from '../Layout.module.css'
import { midasColors } from '../../theme'
import { Logo } from '../../logo'
import { Button } from '../../button'
import { Menu, X } from 'lucide-react'
import { Dropdown, DropdownItem } from '../../dropdown'
import * as React from 'react'

export interface MidasHeader {
  title: string
  headerChildren: React.ReactNode
  user: SidebarUser
  app: App
  isOpened?: boolean
  setIsOpened?: React.Dispatch<React.SetStateAction<boolean>>
  setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<MidasHeader> = ({
  title,
  user,
  app,
  headerChildren,
  isOpened,
  setIsOpened,
  setIsCollapsed,
}) => {
  return (
    <header
      className={styles.header}
      style={{
        borderTop: `solid 4px ${app.color ? app.color : midasColors.logoPrimary}`,
      }}
    >
      <div className={styles.headerContent}>
        <Logo
          padding={false}
          size='small'
          className={styles.logo}
        />
        {isOpened !== undefined && setIsCollapsed && setIsOpened && (
          <Button
            variant='icon'
            className={styles.toggleButton}
            aria-label={isOpened ? 'Stäng meny' : 'Öppna meny'}
            aria-controls='midasMainMenu'
            onPress={() => {
              setIsCollapsed(false)
              setIsOpened(!isOpened)
            }}
          >
            {isOpened ? (
              <X
                size={20}
                aria-hidden
              />
            ) : (
              <Menu
                size={20}
                aria-hidden
              />
            )}
          </Button>
        )}
        <div>
          <p className={styles.userName}>{user.name}</p>
          <p className={styles.userTitle}>{user.title}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      {headerChildren && (
        <>
          <div className={styles.headerItems}>{headerChildren}</div>
          <div className={styles.headerMenu}>
            <Dropdown label='Öppna meny'>
              {React.Children.map(headerChildren, child => (
                <DropdownItem>{child}</DropdownItem>
              ))}
            </Dropdown>
          </div>
        </>
      )}
    </header>
  )
}
