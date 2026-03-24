import { Navigation as MidasNavigation, NavigationItem } from '@midas-ds/layout'
import { House, FileText } from 'lucide-react'
import { NavigationLink } from './NavigationLink'

export const Navigation = () => (
  <MidasNavigation>
    <NavigationItem>
      <NavigationLink
        to='/'
        title='Home'
      >
        <House />
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink
        to='/applications'
        title='Applications'
      >
        <FileText />
      </NavigationLink>
    </NavigationItem>
  </MidasNavigation>
)
