'use client'

import styles from '../Layout.module.css'
import { variables } from '@midas-ds/theme'
import { Logo } from '../../logo'
import { Button } from '../../button'
import { Menu, X } from 'lucide-react'
import * as React from 'react'
import { useLayoutContext } from '../context/LayoutContext'
import clsx from 'clsx'
import { useLocalizedStringFormatter } from '../../utils/intl'
import messages from '../intl/translations.json'

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
    variant,
    id,
  } = useLayoutContext()

  const strings = useLocalizedStringFormatter(messages)

  if (variant === 'external')
    return (
      <header className={clsx(styles.header, styles.headerExternal)}>
        <div className={styles.headerContentExternal}>
          <div className={styles.logoExternalContainer}>
            <Logo
              size='x-small'
              padding={false}
              className={styles.logoExternal}
            />
            <Logo
              size='small'
              padding={false}
              className={styles.logoExternalDesktop}
            />
            <div>
              <p className={styles.userName}>{user.name}</p>
              <p className={styles.userTitle}>{user.title}</p>
            </div>
          </div>
          <div className={styles.headerItems}>{headerChildren}</div>
        </div>
      </header>
    )

  return (
    <header
      className={styles.header}
      style={{
        borderTop: `solid 4px ${app.color ? app.color : variables.brandPrimary}`,
      }}
    >
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Logo
            size='small'
            padding={false}
          />
        </div>
        {isOpened !== undefined && (
          <Button
            variant='icon'
            className={styles.toggleButton}
            aria-label={
              isOpened
                ? strings.format('closeMenu')
                : strings.format('openMenu')
            }
            aria-controls={id}
            onPressStart={() => {
              setIsCollapsed(false)
              setIsOpened?.(true)
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
        )}
        <div>
          <p className={styles.userName}>{user.name}</p>
          <p className={styles.userTitle}>{user.title}</p>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
      <div className={styles.headerItems}>{headerChildren}</div>
    </header>
  )
}
