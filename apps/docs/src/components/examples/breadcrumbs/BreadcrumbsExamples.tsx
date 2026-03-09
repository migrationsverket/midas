import {
  Breadcrumbs,
  Breadcrumb,
  Link,
  Button,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from '@midas-ds/components'
import { Ellipsis } from 'lucide-react'
import type { Key } from 'react-aria-components'

export const CollapsedBreadcrumbsExample = () => {
  const handleAction = (id: Key) => console.log('Navigera till:', id)

  return (
    <div className='card'>
      <Breadcrumbs onAction={handleAction}>
        <Breadcrumb id='start'>
          <Link>Start</Link>
        </Breadcrumb>
        <Breadcrumb>
          <MenuTrigger>
            <Button
              aria-label='Fler brödsmulor'
              variant='icon'
              size='medium'
            >
              <Ellipsis />
            </Button>
            <MenuPopover>
              <Menu onAction={handleAction}>
                <MenuItem id='produkter'>Produkter</MenuItem>
                <MenuItem id='kategori'>Kategori</MenuItem>
                <MenuItem id='underkategori'>Underkategori</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </Breadcrumb>
        <Breadcrumb id='artikel'>
          <Link>Artikel</Link>
        </Breadcrumb>
      </Breadcrumbs>
    </div>
  )
}
