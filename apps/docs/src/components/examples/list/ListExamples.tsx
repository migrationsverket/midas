import React from 'react'
import {
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Tag,
  TagGroup,
  TagList,
} from '@midas-ds/components'
import type { Selection } from 'react-aria-components'
import { EllipsisVertical, Star } from 'lucide-react'

const items = [
  { id: '1', name: 'Isabella W', status: 'Aktiv' },
  { id: '2', name: 'Margareta B', status: 'Aktiv' },
  { id: '3', name: 'Jenny F', status: 'Inaktiv' },
  { id: '4', name: 'Liam T', status: 'Aktiv' },
  { id: '5', name: 'Sofia K', status: 'Inaktiv' },
]

export const BasicExample = () => (
  <List aria-label="Sökresultat" label="Sökresultat">
    <ListItem id="1">Isabella W</ListItem>
    <ListItem id="2">Margareta B</ListItem>
    <ListItem id="3">Jenny F</ListItem>
  </List>
)

export const SingleSelectExample = () => (
  <List aria-label="Välj person" label="Välj person" selectionMode="single">
    {items.map(item => (
      <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
    ))}
  </List>
)

export const MultiSelectExample = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set())

  return (
    <List
      aria-label="Välj personer"
      label="Välj personer"
      selectionMode="multiple"
      showSelectAll
      headerSlot={({ selectedCount, totalCount }) => (
        <span>{selectedCount} av {totalCount} valda</span>
      )}
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {items.map(item => (
        <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
      ))}
    </List>
  )
}

export const ZebraExample = () => (
  <List
    aria-label="Sökresultat"
    label="Sökresultat"
    headerSlot={<span>{items.length} poster</span>}
    striped
  >
    {items.map(item => (
      <ListItem key={item.id} id={item.id} textValue={item.name}>
        {item.name}
        <ListItem.Trailing>
          <TagGroup aria-label="Status">
            <TagList>
              <Tag id="status" color={item.status === 'Aktiv' ? 'green' : 'red'}>
                {item.status}
              </Tag>
            </TagList>
          </TagGroup>
        </ListItem.Trailing>
      </ListItem>
    ))}
  </List>
)

const rowItems = [
  { id: '1', name: 'Isabella W', status: 'Väntar' },
  { id: '2', name: 'Margareta B', status: 'Aktiv' },
  { id: '3', name: 'Jenny F', status: 'Aktiv' },
  { id: '4', name: 'Liam T', status: 'Aktiv' },
]

export const RowActionExample = () => {
  const [activated, setActivated] = React.useState<string | null>(null)
  return (
    <>
      <List
        aria-label="Sökresultat"
        label="Sökresultat"
        onAction={key => setActivated(String(key))}
      >
        {items.map(item => (
          <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
        ))}
      </List>
      {activated && <p style={{ marginTop: '1rem' }}>Aktiverad: {activated}</p>}
    </>
  )
}

export const TrailingExample = () => (
  <List aria-label="Sökresultat" label="Sökresultat">
    {items.map(item => (
      <ListItem key={item.id} id={item.id} textValue={item.name}>
        {item.name}
        <ListItem.Trailing>
          <TagGroup aria-label="Status">
            <TagList>
              <Tag id="status" color={item.status === 'Aktiv' ? 'green' : 'red'}>
                {item.status}
              </Tag>
            </TagList>
          </TagGroup>
          <Button variant="icon" aria-label={`Åtgärd för ${item.name}`}>
            <Star size={16} />
          </Button>
        </ListItem.Trailing>
      </ListItem>
    ))}
  </List>
)

export const ItemCountExample = () => (
  <List
    aria-label="Sökresultat"
    label="Sökresultat"
    headerSlot={<span>{items.length} poster</span>}
    striped
  >
    {items.map(item => (
      <ListItem key={item.id} id={item.id}>{item.name}</ListItem>
    ))}
  </List>
)

export const DeleteActionExample = () => {
  const [selected, setSelected] = React.useState<Selection>(new Set())
  const [rowAction, setRowAction] = React.useState<string | null>(null)
  const [buttonAction, setButtonAction] = React.useState<string | null>(null)
  return (
    <>
      <List
        aria-label="Sökresultat"
        label="Sökresultat"
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
}

export const RowActionsExample = () => (
  <List
    aria-label="Sökresultat"
    label="Sökresultat"
    headerSlot={<span>{rowItems.length} poster</span>}
    striped
  >
    {rowItems.map(item => (
      <ListItem key={item.id} id={item.id} textValue={item.name}>
        {item.name}
        <ListItem.Trailing>
          <TagGroup aria-label="Status">
            <TagList>
              <Tag id="status" color={item.status === 'Aktiv' ? 'sky' : undefined}>
                {item.status}
              </Tag>
            </TagList>
          </TagGroup>
          <MenuTrigger>
            <Button variant="icon" aria-label={`Åtgärder för ${item.name}`}>
              <EllipsisVertical size={20} />
            </Button>
            <MenuPopover>
              <Menu>
                <MenuItem id="edit">Redigera</MenuItem>
                <MenuItem id="delete">Ta bort</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </ListItem.Trailing>
      </ListItem>
    ))}
  </List>
)
