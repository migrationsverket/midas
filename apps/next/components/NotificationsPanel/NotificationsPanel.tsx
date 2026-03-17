'use client'

import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'
import styles from './NotificationsPanel.module.css'

export const NotificationsPanel = () => {
  const notifications = useAppStore(s => s.notifications)
  const markAllRead = useAppStore(s => s.markAllRead)
  const markRead = useAppStore(s => s.markRead)
  const unreadCount = useAppStore(selectUnreadCount)

  return (
    <>
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
          <button
            className={styles.markAll}
            onClick={markAllRead}
          >
            Mark all as read
          </button>
        </div>
      )}
    </>
  )
}
