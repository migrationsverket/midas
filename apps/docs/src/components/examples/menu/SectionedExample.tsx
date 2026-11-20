import {
  Collection,
  Menu,
  MenuHeader,
  MenuItem,
  MenuSection,
} from '@midas-ds/components'

export const SectionedExample = () => {
  const items = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [{ id: 1, name: 'Final Copy (1)' }],
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        { id: 2, name: 'index.ts' },
        { id: 3, name: 'package.json' },
        { id: 4, name: 'license.txt' },
      ],
    },
  ]

  return (
    <Menu
      aria-label='Filer'
      items={items}
    >
      {section => (
        <MenuSection>
          <MenuHeader>{section.name}</MenuHeader>
          <Collection items={section.children}>
            {item => <MenuItem>{item.name}</MenuItem>}
          </Collection>
        </MenuSection>
      )}
    </Menu>
  )
}
