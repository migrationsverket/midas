import { Navigation as MidasNavigation, NavigationItem } from '@midas-ds/layout'
import { House, FileText } from 'lucide-react'
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
    </NavigationItem>
  </MidasNavigation>
)
