'use client'

import { useRef } from 'react'
import { Bell, CircleUserRound, Languages } from 'lucide-react'
import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'
import { HeaderActions } from '@midas-ds/layout'
import { Badge, BadgeContainer, Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'
import { useRouter } from 'next/navigation'

export const AppHeaderActions = () => {
  const router = useRouter()
  const notificationsOpen = useAppStore(s => s.notificationsOpen)
  const setNotificationsOpen = useAppStore(s => s.setNotificationsOpen)
  const unreadCount = useAppStore(selectUnreadCount)
  const languages = useAppStore(s => s.languages)
  const currentLanguage = useAppStore(s => s.currentLanguage)
  const setLanguage = useAppStore(s => s.setLanguage)
  const languageTriggerRef = useRef<HTMLButtonElement>(null)

  return (
    <HeaderActions>
<HeaderActions.Button
        icon={
          <BadgeContainer aria-hidden>
            <Bell size={20} />
            {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
          </BadgeContainer>
        }
        aria-label={`Notifications, ${unreadCount} unread`}
        onPress={() => setNotificationsOpen(!notificationsOpen)}
      >
        Notifications
      </HeaderActions.Button>
      <HeaderActions.Button icon={<CircleUserRound size={20} />} onPress={() => router.push('/profile')}>Profile</HeaderActions.Button>
      <MenuTrigger>
        <HeaderActions.Button ref={languageTriggerRef} icon={<Languages size={20} />}>
          {languages.find(l => l.id === currentLanguage)?.label}
        </HeaderActions.Button>
        <MenuPopover triggerRef={languageTriggerRef}>
          <Menu
            selectionMode='single'
            selectedKeys={new Set([currentLanguage])}
            onSelectionChange={keys => {
              const id = [...keys][0] as string
              if (id) setLanguage(id)
            }}
          >
            {languages.map(l => (
              <MenuItem key={l.id} id={l.id}>{l.label}</MenuItem>
            ))}
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </HeaderActions>
  )
}
