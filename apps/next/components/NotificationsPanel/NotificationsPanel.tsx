'use client'

import { useState } from 'react'
import { GridList, GridListItem, Selection } from 'react-aria-components'
import { Button, Checkbox, clsx } from '@midas-ds/components'
import { Check } from 'lucide-react'
import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'
import styles from './NotificationsPanel.module.css'

export const NotificationsPanel = () => {
  const notifications = useAppStore(s => s.notifications)
  const markAllRead = useAppStore(s => s.markAllRead)
  const markRead = useAppStore(s => s.markRead)
  const clearNotifications = useAppStore(s => s.clearNotifications)
  const unreadCount = useAppStore(selectUnreadCount)
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set())

  const unreadIds = new Set(notifications.filter(n => !n.read).map(n => n.id))

  const selectedIds =
    selectedKeys === 'all'
      ? notifications.map(n => n.id)
      : ([...selectedKeys] as number[])

  const selectedUnreadCount = selectedIds.filter(id => unreadIds.has(id)).length

  const markSelectedRead = () => {
    selectedIds.filter(id => unreadIds.has(id)).forEach(id => markRead(id))
    setSelectedKeys(new Set())
  }

  const clearSelected = () => {
    clearNotifications(selectedIds)
    setSelectedKeys(new Set())
  }

  return (
    <>
      <GridList
        className={styles.list}
        selectionMode='multiple'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={notifications}
        aria-label='Notifications'
      >
        {n => (
          <GridListItem
            id={n.id}
            textValue={n.title}
            className={({ isSelected }) =>
              clsx(styles.item, !n.read && styles.unread, isSelected && styles.selected)
            }
          >
            <Checkbox slot='selection' />
            <div className={styles.content}>
              <strong className={styles.title}>{n.title}</strong>
              <span className={styles.body}>{n.body}</span>
              <span className={styles.timestamp}>{n.timestamp}</span>
            </div>
            {!n.read && (
              <Button
                variant='icon'
                size='medium'
                onPress={() => markRead(n.id)}
                aria-label='Mark as read'
              >
                <Check size={16} />
              </Button>
            )}
          </GridListItem>
        )}
      </GridList>
      {(selectedIds.length > 0 || unreadCount > 0) && (
        <div className={styles.footer}>
          {selectedUnreadCount > 0 && (
            <Button
              variant='tertiary'
              size='medium'
              onPress={markSelectedRead}
            >
              Mark {selectedUnreadCount} as read
            </Button>
          )}
          {selectedIds.length > 0 && (
            <Button
              variant='tertiary'
              size='medium'
              onPress={clearSelected}
            >
              Clear {selectedIds.length} selected
            </Button>
          )}
          {unreadCount > 0 && (
            <Button
              variant='tertiary'
              size='medium'
              onPress={markAllRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
      )}
    </>
  )
}
