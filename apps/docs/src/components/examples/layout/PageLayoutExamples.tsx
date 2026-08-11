import React from 'react'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
} from '@midas-ds/layout'
import { Bell, Settings, User } from 'lucide-react'

export const OnlyHeaderExample: React.FC = () => (
  <div
    className='card'
    style={{ overflow: 'hidden', padding: 0 }}
  >
    <div>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          <HeaderAction icon={<User size={20} />}>Min profil</HeaderAction>
          <HeaderAction icon={<Settings size={20} />}>
            Inställningar
          </HeaderAction>
        </HeaderActions>
      </Header>

      <div
        style={{
          padding: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 180,
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.65)',
        }}
      >
        Din applikation
      </div>
    </div>
  </div>
)
