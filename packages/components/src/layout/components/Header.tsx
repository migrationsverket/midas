'use client'

import styles from '../Layout.module.css'
import { baseColors } from '../../theme'
import { Logo } from '../../logo'
import { Button } from '../../button'
import { Menu, X } from 'lucide-react'
import { Dropdown, DropdownItem } from '../../dropdown'
import * as React from 'react'
import { useLayoutContext } from '../context/LayoutContext'

export interface MidasHeader {
  headerChildren?: React.ReactNode
}

export const Header: React.FC = () => {
  const {
    title,
    user,
    app,
    isOpened,
    setIsOpened,
    setIsCollapsed,
    headerChildren,
  } = useLayoutContext()

  return (
    <header
      className={styles.header}
      style={{
        borderTop: `solid 4px ${app.color ? app.color : baseColors.red700}`,
      }}
    >
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Logo
            size='small'
            padding={false}
          />
        </div>
        <Button
          variant='icon'
          className={styles.toggleButton}
          aria-label={isOpened ? 'Stäng meny' : 'Öppna meny'}
          aria-controls='midasMainMenu'
          onPressStart={() => {
            setIsCollapsed(false)
            setIsOpened(true)
          }}
        >
          {isOpened ? (
            <X
              size={20}
              aria-hidden='true'
            />
          ) : (
            <Menu
              size={20}
              aria-hidden='true'
            />
          )}
        </Button>
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
