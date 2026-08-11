import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Bell, HelpCircle, MoreHorizontal, Settings, User } from 'lucide-react'
import { useMediaQuery } from '@react-spectrum/utils'
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
} from '@midas-ds/layout'

const collapsibleActions = [
  { id: 'profile', label: 'Min profil', icon: <User size={20} /> },
  { id: 'settings', label: 'Inställningar', icon: <Settings size={20} /> },
  { id: 'help', label: 'Hjälp', icon: <HelpCircle size={20} /> },
]

export const BasicHeaderExample: React.FC = () => (
  <div className='card' style={{ overflow: 'hidden', padding: 0 }}>
    <Header>
      <HeaderLogo />
      <HeaderTitle>Mitt system</HeaderTitle>
      <HeaderActions>
        <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
        <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
        <HeaderAction icon={<Settings size={20} />}>Inställningar</HeaderAction>
      </HeaderActions>
    </Header>
  </div>
)

export const OverflowHeaderExample: React.FC = () => {
  const isNarrow = useMediaQuery('(max-width: 700px)')

  return (
    <div className='card' style={{ overflow: 'hidden', padding: 0 }}>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          {isNarrow ? (
            <MenuTrigger>
              <HeaderAction
                aria-label='Fler alternativ'
                icon={<MoreHorizontal size={20} />}
              />
              <MenuPopover>
                <Menu>
                  {collapsibleActions.map(action => (
                    <MenuItem key={action.id} id={action.id}>
                      {action.label}
                    </MenuItem>
                  ))}
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          ) : (
            collapsibleActions.map(action => (
              <HeaderAction key={action.id} icon={action.icon}>
                {action.label}
              </HeaderAction>
            ))
          )}
        </HeaderActions>
      </Header>
    </div>
  )
}

export const MobileHeaderExample: React.FC = () => {
  const url = useBaseUrl('/layout-examples/header-mobile')
  return (
    <div
      className='card'
      style={{ overflow: 'hidden', padding: 0, maxWidth: 480 }}
    >
      <iframe
        title='Header with mobile menu example'
        style={{ width: '100%', height: 72, border: 'none', display: 'block' }}
        src={url}
      />
    </div>
  )
}
