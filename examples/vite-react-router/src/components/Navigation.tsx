import {
  Navigation as MidasNavigation,
  NavigationItem,
  NavigationSubMenu,
} from '@midas-ds/layout'
import { House, FileText, Plus, Save } from 'lucide-react'
import { NavigationLink } from './NavigationLink'

export const Navigation = () => (
  <MidasNavigation>
    <NavigationItem>
      <NavigationLink
        to='/'
        icon={<House />}
      >
        Home
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink
        to='/applications'
        icon={<FileText />}
      >
        Applications
      </NavigationLink>
      <NavigationSubMenu>
        <NavigationItem>
          <NavigationLink
            to='/applications/new'
            icon={<Plus />}
          >
            New
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            to='/applications/drafts'
            icon={<Save />}
          >
            Drafts
          </NavigationLink>
        </NavigationItem>
      </NavigationSubMenu>
    </NavigationItem>
  </MidasNavigation>
)
