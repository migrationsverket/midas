import React from 'react'
import { House, Search, User } from 'lucide-react'
import {
  Navbar,
  Navigation,
  NavigationItem,
  NavigationLink,
} from '@midas-ds/layout'

export const BasicExample: React.FC = () => (
  <div className='card'>
    <Navbar>
      <Navigation>
        <NavigationItem>
          <NavigationLink
            href='#'
            icon={<House />}
            isActive
          >
            Hem
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            href='#'
            icon={<Search />}
          >
            Sök
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            href='#'
            icon={<User />}
          >
            Profil
          </NavigationLink>
        </NavigationItem>
      </Navigation>
    </Navbar>
  </div>
)
