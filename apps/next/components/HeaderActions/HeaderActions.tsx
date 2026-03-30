'use client'

import { useRef } from 'react'
import { Bell, CircleUserRound, Languages } from 'lucide-react'
import { useAppStore, selectUnreadCount } from '../AppProvider/AppContext'
import { HeaderActions, HeaderAction, usePanels } from '@midas-ds/layout'
import {
  Badge,
  BadgeContainer,
  ColorSchemeSwitch,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@midas-ds/components'
import { useRouter } from 'next/navigation'
import { NotificationsPanel } from '../NotificationsPanel/NotificationsPanel'

export const AppHeaderActions = () => {
  const router = useRouter()
  const unreadCount = useAppStore(selectUnreadCount)
  const languages = useAppStore(s => s.languages)
  const currentLanguage = useAppStore(s => s.currentLanguage)
  const setLanguage = useAppStore(s => s.setLanguage)
  const languageTriggerRef = useRef<HTMLButtonElement>(null)
  const { addPanel } = usePanels()

  return (
    <HeaderActions>
      <HeaderAction
        icon={
          <BadgeContainer aria-hidden>
            <Bell size={20} />
            {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
          </BadgeContainer>
        }
        aria-label={`Notifications, ${unreadCount} unread`}
        onPress={() =>
          addPanel({
            id: 'Notifications',
            title: 'Notifications',
            children: <NotificationsPanel />,
          })
        }
      >
        Notifications
      </HeaderAction>
      <HeaderAction
        icon={<CircleUserRound size={20} />}
        onPress={() => router.push('/profile')}
      >
        Profile
      </HeaderAction>
      <MenuTrigger>
        <HeaderAction
          ref={languageTriggerRef}
          icon={<Languages size={20} />}
        >
          {languages.find(l => l.id === currentLanguage)?.label}
        </HeaderAction>
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
              <MenuItem
                key={l.id}
                id={l.id}
              >
                {l.label}
              </MenuItem>
            ))}
          </Menu>
        </MenuPopover>
      </MenuTrigger>
      <ColorSchemeSwitch />
    </HeaderActions>
  )
}
