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

export const CollapsedBreadcrumbsExample = () => {
  const items = [
    { id: 'start', label: 'Start' },
    { id: 'produkter', label: 'Produkter' },
    { id: 'kategori', label: 'Kategori' },
    { id: 'underkategori', label: 'Underkategori' },
    { id: 'artikel', label: 'Artikel' },
  ]

  const first = items[0]
  const middle = items.slice(1, -2)
  const last = items.slice(-2)

  const breadcrumbItems = [
    { id: first.id, content: <Link>{first.label}</Link> },
    ...(middle.length > 0
      ? [
          {
            id: 'ellipsis',
            content: (
              <MenuTrigger>
                <Button
                  variant='icon'
                  aria-label='Visa fler brödsmulor'
                  style={{ minWidth: 'auto', padding: 0, height: 'auto' }}
                >
                  …
                </Button>
                <MenuPopover>
                  <Menu onAction={id => console.log('Navigera till:', id)}>
                    {middle.map(item => (
                      <MenuItem key={item.id} id={item.id}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </MenuPopover>
              </MenuTrigger>
            ),
          },
        ]
      : []),
    ...last.map(item => ({
      id: item.id,
      content: <Link>{item.label}</Link>,
    })),
  ]

  return (
    <div className='card'>
      <Breadcrumbs items={breadcrumbItems} onAction={id => console.log('Navigera till:', id)}>
        {item => <Breadcrumb id={item.id}>{item.content}</Breadcrumb>}
      </Breadcrumbs>
    </div>
  )
}
