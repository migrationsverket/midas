import React from 'react'
import {
  NavigationItem,
  NavigationLink,
  SidebarContext,
} from '@midas-ds/layout'
import { Badge, BadgeContainer } from '@midas-ds/components'
import { Bell, FileText } from 'lucide-react'

export const NavigationExample: React.FC = () => (
  <div className='card'>
    <div style={{ width: 240 }}>
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <NavigationItem>
          <NavigationLink icon={<FileText />}>Mina ärenden</NavigationLink>
        </NavigationItem>
      </SidebarContext.Provider>
    </div>
  </div>
)

export const NavigationBadgeExample: React.FC = () => (
  <div className='card'>
    <div style={{ width: 240 }}>
      <SidebarContext.Provider value={{ isCollapsed: false }}>
        <NavigationItem>
          <NavigationLink
            icon={
              <BadgeContainer>
                <Bell />
                <Badge>12</Badge>
              </BadgeContainer>
            }
          >
            Meddelanden
          </NavigationLink>
        </NavigationItem>
      </SidebarContext.Provider>
    </div>
  </div>
)
