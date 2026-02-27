'use client'

import { Heading, Button } from '@midas-ds/components'
import { useAppStore, selectUnreadCount } from '../../components/AppProvider/AppContext'
import panelStyles from '../../components/NotificationsPanel/NotificationsPanel.module.css'
import styles from './page.module.css'

export default function Notifications() {
  const notifications = useAppStore(s => s.notifications)
  const markAllRead = useAppStore(s => s.markAllRead)
  const markRead = useAppStore(s => s.markRead)
  const unreadCount = useAppStore(selectUnreadCount)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Heading level={1}>Notifications</Heading>
        {unreadCount > 0 && (
          <Button variant='tertiary' size='medium' onPress={markAllRead}>Mark all as read</Button>
        )}
      </div>
      <ul className={panelStyles.list}>
        {notifications.map(n => (
          <li
            key={n.id}
            className={`${panelStyles.item} ${!n.read ? panelStyles.unread : ''}`}
            onClick={() => markRead(n.id)}
          >
            <strong className={panelStyles.title}>{n.title}</strong>
            <span className={panelStyles.body}>{n.body}</span>
            <span className={panelStyles.timestamp}>{n.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
