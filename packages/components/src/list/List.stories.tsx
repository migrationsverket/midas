import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import type { Selection } from 'react-aria-components'
import { fruit, type Fruit } from '@midas-ds/test-utils'
import { Star } from 'lucide-react'
import { Button } from '../button'
import { Tag } from '../tag'
import { TagGroup } from '../tag/tag-group'
import { TagList } from '../tag/tag-list'
import { List } from './List'
import { ListItem } from './ListItem'

type Story = StoryObj<typeof List<Fruit>>

const items = fruit.slice(0, 6)

export default {
  component: List,
  subcomponents: { ListItem },
  title: 'Components/List',
  tags: ['autodocs'],
  args: {
    'aria-label': 'Frukter',
  },
  render: args => (
    <List {...args}>
      {items.map(item => (
        <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
      ))}
    </List>
  ),
} satisfies Meta<typeof List<Fruit>>

export const Default: Story = {}

export const ZebraStripes: Story = {
  args: { striped: true, label: 'Frukter' },
}

export const SingleSelect: Story = {
  args: {
    selectionMode: 'single',
    label: 'Välj frukt',
  },
}

export const MultiSelect: Story = {
  args: {
    selectionMode: 'multiple',
    label: 'Välj frukter',
  },
}

export const MultiSelectWithSelectAll: Story = {
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set())
    return (
      <List
        {...args}
        selectionMode="multiple"
        label="Välj frukter"
        showSelectAll
        headerSlot={({ selectedCount, totalCount }) => <span>{selectedCount} av {totalCount} valda</span>}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {items.map(item => (
          <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
        ))}
      </List>
    )
  },
}

export const WithTrailingContent: Story = {
  render: args => (
    <List {...args} label="Frukter" striped>
      {items.map(item => (
        <ListItem key={item.id} id={item.id} textValue={item.name}>
          {item.name}
          <ListItem.Trailing>
            <TagGroup aria-label="Kategori">
              <TagList>
                <Tag id="category">{item.category}</Tag>
              </TagList>
            </TagGroup>
          </ListItem.Trailing>
        </ListItem>
      ))}
    </List>
  ),
}

export const WithDisabledItems: Story = {
  args: {
    selectionMode: 'multiple',
    label: 'Välj frukter',
    disabledKeys: [items[1].id, items[3].id] as string[],
  },
}

export const WithRowAction: Story = {
  render: args => {
    const [activated, setActivated] = useState<string | null>(null)
    return (
      <>
        <List {...args} label="Sökresultat" onAction={key => setActivated(String(key))}>
          {items.map(item => (
            <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
          ))}
        </List>
        {activated && <p style={{ marginTop: '1rem' }}>Aktiverad: {activated}</p>}
      </>
    )
  },
}

export const WithActionButton: Story = {
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set())
    const [rowAction, setRowAction] = useState<string | null>(null)
    const [buttonAction, setButtonAction] = useState<string | null>(null)
    return (
      <>
        <List
          {...args}
          label="Frukter"
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          onAction={key => setRowAction(String(key))}
          striped
        >
          {items.map(item => (
            <ListItem key={item.id} id={item.id} textValue={item.name}>
              {item.name}
              <ListItem.Trailing>
                <Button
                  variant="icon"
                  aria-label={`Åtgärd för ${item.name}`}
                  onPress={() => setButtonAction(item.name)}
                >
                  <Star size={16} />
                </Button>
              </ListItem.Trailing>
            </ListItem>
          ))}
        </List>
        <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <li>Vald rad: {selected === 'all' ? 'alla' : Array.from(selected).join(', ') || '–'}</li>
          <li>Radaction (dubbelklick): {rowAction ?? '–'}</li>
          <li>Knappaction: {buttonAction ?? '–'}</li>
        </ul>
      </>
    )
  },
}

export const WithItemCount: Story = {
  render: args => (
    <List {...args} label="Frukter" headerSlot={<span>{items.length} poster</span>} striped>
      {items.map(item => (
        <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
      ))}
    </List>
  ),
}
