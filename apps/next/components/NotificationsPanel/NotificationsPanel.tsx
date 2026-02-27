'use client'

import { Panel } from '@midas-ds/layout'
import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'
import styles from './NotificationsPanel.module.css'

export const NotificationsPanel = () => {
  const notificationsOpen = useAppStore(s => s.notificationsOpen)
  const setNotificationsOpen = useAppStore(s => s.setNotificationsOpen)
  const notifications = useAppStore(s => s.notifications)
  const markAllRead = useAppStore(s => s.markAllRead)
  const markRead = useAppStore(s => s.markRead)
  const unreadCount = useAppStore(selectUnreadCount)

  return (
    <Panel
      variant='dismiss'
      title='Notifications'
      isOpen={notificationsOpen}
      onOpenChange={setNotificationsOpen}
    >
      <ul className={styles.list}>
        {notifications.map(n => (
          <li
            key={n.id}
            className={`${styles.item} ${!n.read ? styles.unread : ''}`}
            onClick={() => markRead(n.id)}
          >
            <strong className={styles.title}>{n.title}</strong>
            <span className={styles.body}>{n.body}</span>
            <span className={styles.timestamp}>{n.timestamp}</span>
          </li>
        ))}
      </ul>
      {unreadCount > 0 && (
        <div className={styles.footer}>
          <button className={styles.markAll} onClick={markAllRead}>Mark all as read</button>
        </div>
      )}
    </Panel>
  )
}
