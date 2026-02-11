import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Button, clsx, Text } from '@midas-ds/components'
import { PanelLeftClose, PanelLeftOpen, X } from 'lucide-react'
import styles from './Panel.module.css'
import { PanelContext } from './PanelContext'

export type PanelVariant = 'collapse' | 'dismiss'

export interface PanelProps<
  T extends PanelVariant = 'collapse',
> extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children?: ReactNode
  isCollapsed?: T extends 'collapse' ? boolean : never
  isOpen?: T extends 'dismiss' ? boolean : never
  onCollapseChange?: T extends 'collapse'
    ? (isCollapsed: boolean) => void
    : never
  onOpenChange?: T extends 'dismiss' ? (isOpen: boolean) => void : never
  variant?: T
  title?: string
}

export const Panel = <T extends PanelVariant = 'collapse'>({
  children,
  className,
  isCollapsed,
  isOpen,
  onCollapseChange,
  onOpenChange,
  variant,
  title,
  ...rest
}: PanelProps<T>) => {
  const dismiss = () => onOpenChange?.(!isOpen)
  const toggleCollapse = () => {
    onCollapseChange?.(!isCollapsed)
  }

  if (variant === 'dismiss' && typeof isOpen === 'boolean' && !isOpen) {
    return null
  }

  return (
    <PanelContext.Provider value={{ isCollapsed }}>
      <aside
        className={clsx(className, styles.panel, variant && styles[variant], {
          [styles.collapsed]: isCollapsed,
        })}
        {...rest}
      >
        <div className={styles.header}>
          {variant === 'dismiss' ? (
            <Button
              variant='icon'
              aria-label='todo: closeMenu'
              onPress={dismiss}
            >
              <X size={20} />
            </Button>
          ) : null}
          <div>
            {!isCollapsed && title && (
              <Text className={styles.title}>{title}</Text>
            )}
          </div>
          {variant === 'collapse' ? (
            <Button
              variant='icon'
              aria-label={
                isCollapsed ? 'todo: maximizeMenu' : 'todo: minimizeMenu'
              }
              onPress={toggleCollapse}
            >
              {isCollapsed ? (
                <PanelLeftOpen size={20} />
              ) : (
                <PanelLeftClose size={20} />
              )}
            </Button>
          ) : null}
        </div>
        {children}
      </aside>
    </PanelContext.Provider>
  )
}
