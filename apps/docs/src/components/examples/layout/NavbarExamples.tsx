import React from 'react'
import { House, Search, User } from 'lucide-react'
import {
  Navbar,
  Navigation,
  NavigationItem,
  NavigationLink,
} from '@midas-ds/layout'
import styles from './NavbarExamples.module.css'

export const BasicExample: React.FC = () => (
  <div className='card'>
    <p className={styles.desktopNotice}>
      Navbar visas endast på skärmar smalare än 640px. Förminska
      webbläsarfönstret för att se exemplet.
    </p>
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
