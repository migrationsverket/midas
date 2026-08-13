import React from 'react'
import {
  NavigationItem,
  Navigation,
  NavigationLink,
  NavigationSection,
  Sidebar,
} from '@midas-ds/layout'
import { House, Settings, User } from 'lucide-react'

export const BasicExample = () => (
  <div className='card'>
    <div style={{ width: 240 }}>
      <Sidebar title='Navigation'>
        <Navigation>
          <NavigationSection>
            <NavigationItem>
              <NavigationLink
                href='/'
                icon={<House />}
              >
                Hem
              </NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink
                href='/'
                icon={<Settings />}
              >
                Inställningar
              </NavigationLink>
            </NavigationItem>
          </NavigationSection>
        </Navigation>
      </Sidebar>
    </div>
  </div>
)

export const SectionExample = () => {
  return (
    <div className='card'>
      <div style={{ width: 240 }}>
        <Sidebar title='Navigation'>
          <Navigation>
            <NavigationSection title='Huvudmeny'>
              <NavigationItem>
                <NavigationLink
                  href='/'
                  icon={<House />}
                >
                  Hem
                </NavigationLink>
              </NavigationItem>
            </NavigationSection>
            <NavigationSection title='Inställningar'>
              <NavigationItem>
                <NavigationLink
                  href='/'
                  icon={<User />}
                >
                  Konto
                </NavigationLink>
              </NavigationItem>
              <NavigationItem>
                <NavigationLink
                  href='/'
                  icon={<Settings />}
                >
                  System
                </NavigationLink>
              </NavigationItem>
            </NavigationSection>
          </Navigation>
        </Sidebar>
      </div>
    </div>
  )
}
