import {
  ComboBox,
  ComboBoxItem,
  ComboBoxSection,
  ListBoxLoadMoreItem,
  ListBoxOption,
  type ComboBoxProps,
} from '@midas-ds/components'
import React from 'react'
import { Collection, Key } from 'react-aria-components'
import { useAsyncList } from 'react-stately'

export const BasicExample: React.FC = () => (
  <ComboBox
    label='Välj din favoritfrukt'
    description='Du kan bara välja en'
  >
    <ComboBoxItem id='Lime'>Lime</ComboBoxItem>
    <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>
    <ComboBoxItem id='Banan'>Banan</ComboBoxItem>
    <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>
    <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>
  </ComboBox>
)

export const ControlledExample = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<Key | null>(null)

  return (
    <>
      <ComboBox
        label='Välj din favoritfrukt'
        description='Du kan bara välja en'
        selectedKey={selectedFruit}
        onSelectionChange={setSelectedFruit}
      >
        <ComboBoxItem id='Lime'>Lime</ComboBoxItem>
        <ComboBoxItem id='Äpple'>Äpple</ComboBoxItem>
        <ComboBoxItem id='Banan'>Banan</ComboBoxItem>
        <ComboBoxItem id='Kiwi'>Kiwi</ComboBoxItem>
        <ComboBoxItem id='Apelsin'>Apelsin</ComboBoxItem>
      </ComboBox>

      <pre style={{ marginTop: '1rem' }}>Vald frukt: {selectedFruit}</pre>
    </>
  )
}

export const SectionedExample = () => {
  return (
    <ComboBox
      label='Välj din favoritfrukt eller grönsak'
      description='Du kan bara välja en'
      items={[
        {
          name: 'Grönsaker',
          children: [
            { name: 'Morot', id: 2 },
            { name: 'Broccoli', id: 3 },
            { name: 'Spenat', id: 4 },
            { name: 'Potatis', id: 5 },
            { name: 'Tomat', id: 6 },
          ],
        },
        {
          name: 'Frukter',
          children: [
            { name: 'Äpple', id: 11 },
            { name: 'Banan', id: 12 },
            { name: 'Kiwi', id: 13 },
            { name: 'Fläder', id: 14 },
            { name: 'Nektarin', id: 15 },
          ],
        },
      ]}
    >
      {section => (
        <ComboBoxSection
          {...section}
          id={section.name}
        />
      )}
    </ComboBox>
  )
}

export const AsyncExample = (props: Partial<ComboBoxProps<ListBoxOption>>) => {
  const list = useAsyncList<ListBoxOption>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://')
      }

      const res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal },
      )

      const { results, next } = await res.json()

      return {
        items: results,
        cursor: next,
      }
    },
  })

  return (
    <ComboBox
      label='Star Wars Character Lookup'
      placeholder='Välj eller sök karaktär'
      description='Anropar ett externt API'
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
      allowsEmptyCollection
    >
      <Collection items={list.items}>
        {item => (
          <ComboBoxItem id={item.name?.toString()}>{item.name}</ComboBoxItem>
        )}
      </Collection>
      {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
    </ComboBox>
  )
}
