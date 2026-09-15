import type { Meta, StoryObj } from '@storybook/react-vite'
import { options, optionsWithSections } from '@midas-ds/test-utils'
import { RunOptions } from 'axe-core'
import React from 'react'
import { useAsyncList } from 'react-stately'
import { Collection, type Key } from 'react-aria-components'
import { ComboBox } from './ComboBox'
import {
  ListBoxHeader,
  ListBoxItem,
  ListBoxLoadMoreItem,
  ListBoxSection,
} from '../list-box'

type Item = (typeof options)[0]

type Section = (typeof optionsWithSections)[0]

type Story<T extends object = Item> = StoryObj<typeof ComboBox<T>>

export default {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    placeholder: 'Placeholder',
    description: 'Beskrivning',
    errorMessage: 'Fel!',
    errorPosition: 'top',
    size: 'large',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  render: args => (
    <ComboBox {...args}>
      <ListBoxItem id='apple'>Apple</ListBoxItem>
      <ListBoxItem id='lemon'>Lemon</ListBoxItem>
    </ComboBox>
  ),
} satisfies Meta<typeof ComboBox<Item>>

export const Primary: Story = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
  },
  render: args => (
    <ComboBox
      data-testid='test'
      items={options}
      {...args}
    >
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}

export const DS1253: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
}

export const MediumSizeInvalid: Story = {
  args: {
    size: 'medium',
    isInvalid: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  parameters: {
    a11y: {
      context: 'body',
      config: {
        rules: [
          {
            // Dont check for color contrast on disabled elements
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      } satisfies RunOptions,
    },
  },
}

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    defaultSelectedKey: 'lemon',
  },
}

export const Required: Story = {
  args: {
    'aria-label': 'test',
    isRequired: true,
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <form>
      <ComboBox {...args}>
        <ListBoxItem>Hej</ListBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
  ),
}

// The generic type is infered from the items prop in real life
export const Sectioned: Story<Section> = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
    items: optionsWithSections,
  },
  render: args => (
    <ComboBox {...args}>
      {section => (
        <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      )}
    </ComboBox>
  ),
}

export const NotVirtualized: Story<Section> = {
  tags: ['!autodocs', '!snapshot'],
  args: {
    ...Sectioned.args,
    listBoxProps: { virtualized: false },
  },
  render: args => (
    <ComboBox {...args}>
      {section => (
        <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      )}
    </ComboBox>
  ),
}

export const PerformanceTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
    const [numberOfItems, setNumberOfItems] = React.useState(25)

    const items = [...Array(numberOfItems).keys()].map(n => ({
      name: n.toString(),
      id: n,
    }))

    return (
      <>
        <label>
          Adjust load
          <input
            type='number'
            step={25}
            value={numberOfItems}
            onChange={e => setNumberOfItems(parseInt(e.target.value))}
          />
        </label>
        <ComboBox {...args}>
          {items.map(({ name, id }) => (
            <ListBoxItem key={id}>{name}</ListBoxItem>
          ))}
        </ComboBox>
      </>
    )
  },
}

export const AsynchronousLoadingWithEmptyMessage: Story = {
  args: {
    label: 'Star Wars Character Lookup',
    placeholder: 'Välj eller sök karaktär',
    description: 'Anropar ett externt API',
    allowsEmptyCollection: true,
  },
  render: args => {
    const list = useAsyncList<Item>({
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
        {...args}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <Collection items={list.items}>
          {item => (
            <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>
          )}
        </Collection>
        {list.isLoading && <ListBoxLoadMoreItem isLoading={list.isLoading} />}
      </ComboBox>
    )
  },
}

export const InfiniteScroll: Story = {
  args: {
    ...AsynchronousLoadingWithEmptyMessage.args,
  },
  render: args => {
    const list = useAsyncList<Item>({
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
        {...args}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <Collection items={list.items}>
          {item => (
            <ListBoxItem id={item.name?.toString()}>{item.name}</ListBoxItem>
          )}
        </Collection>
        <ListBoxLoadMoreItem
          isLoading={list.loadingState === 'loadingMore'}
          onLoadMore={list.loadMore}
        />
      </ComboBox>
    )
  },
}

// id here is a product SKU, deliberately unrelated to the name, to
// demonstrate matching a query against a field other than the visible label
const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

const noteStyle: React.CSSProperties = {
  margin: '0 0 12px',
  padding: '8px 12px',
  fontSize: 13,
  lineHeight: 1.5,
  color: '#3a3a3a',
  background: '#f2f2f2',
  borderLeft: '3px solid #999',
  maxWidth: 640,
}

const codeBlockStyle: React.CSSProperties = {
  margin: '12px 0 0',
  padding: 12,
  fontSize: 12,
  lineHeight: 1.6,
  background: '#1e1e1e',
  color: '#d4d4d4',
  overflowX: 'auto',
  borderRadius: 4,
  maxWidth: 640,
}

const textValueTrickCode = `const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

<ComboBox items={products} label='Välj en produkt'>
  {item => (
    // textValue is used for filtering + accessibility only — it's
    // never rendered, so the SKU stays invisible in the dropdown
    <ListBoxItem textValue={\`\${item.name} \${item.id}\`}>
      {item.name}
    </ListBoxItem>
  )}
</ComboBox>`

const controlledCode = `const products = [
  { id: 'SKU-1001', name: 'Trådlösa hörlurar' },
  { id: 'SKU-1002', name: 'Bluetooth-högtalare' },
  { id: 'SKU-1003', name: 'Mekaniskt tangentbord' },
  { id: 'SKU-1004', name: 'Trådlös mus' },
  { id: 'SKU-1005', name: 'USB-C-hubb' },
  { id: 'SKU-1006', name: 'Extern SSD 1TB' },
]

function ProductCombobox() {
  const [query, setQuery] = useState('')
  const [selectedKey, setSelectedKey] = useState<Key | null>(null)

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <ComboBox
      label='Välj en produkt'
      items={filteredProducts}
      inputValue={query}
      onInputChange={value => {
        setQuery(value)
        if (value === '') setSelectedKey(null)
      }}
      selectedKey={selectedKey}
      onSelectionChange={key => {
        setSelectedKey(key)
        setQuery(products.find(item => item.id === key)?.name ?? '')
      }}
      // items are already filtered above, don't filter again
      defaultFilter={() => true}
    >
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ComboBox>
  )
}`

export const FilterByIdAndName: Story<(typeof products)[0]> = {
  name: 'Filter by id — textValue trick',
  args: {
    placeholder: 'Sök på namn eller SKU',
    label: 'Välj en produkt (sök på namn eller SKU)',
    description: 'Filtrerar på både namn och id, t.ex. prova "1004"',
    className: 'test',
    items: products,
  },
  render: args => (
    <>
      <p style={noteStyle}>
        <strong>textValue-tricket.</strong> Id läggs in i <code>textValue</code>{' '}
        — inget extra state behövs. Nackdel: när man väljer ett alternativ
        visas hela textValue i fältet ("Trådlös mus SKU-1004"), inte bara
        namnet.
      </p>
      <ComboBox {...args}>
        {item => (
          // textValue is used for filtering + accessibility only — it's
          // never rendered, so the SKU stays invisible in the dropdown
          <ListBoxItem textValue={`${item.name} ${item.id}`}>
            {item.name}
          </ListBoxItem>
        )}
      </ComboBox>
      <pre style={codeBlockStyle}>
        <code>{textValueTrickCode}</code>
      </pre>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Fold the id into `textValue` on each `ListBoxItem`. Zero extra state, but RAC also uses `textValue` to populate the input on selection — so after picking a product the field shows the full "name + id" string, not just the name.',
      },
      source: {
        code: textValueTrickCode,
        type: 'code',
      },
    },
  },
}

export const FilterByIdAndNameControlled: Story<(typeof products)[0]> = {
  name: 'Filter by id — fully controlled',
  args: {
    placeholder: 'Sök på namn eller SKU',
    label: 'Välj en produkt (sök på namn eller SKU)',
    description:
      'Filtrerar på namn och id, men visar bara namnet i fältet. Prova t.ex. "1004"',
    className: 'test',
  },
  render: args => {
    const [query, setQuery] = React.useState('')
    const [selectedKey, setSelectedKey] = React.useState<Key | null>(null)

    const filteredProducts = React.useMemo(() => {
      const q = query.trim().toLowerCase()

      if (!q) return products

      return products.filter(
        item =>
          item.name.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q),
      )
    }, [query])

    return (
      <>
        <p style={noteStyle}>
          <strong>Helt kontrollerad.</strong> Filtrerar på namn och id, men du
          bestämmer själv vad fältet visar — <code>onSelectionChange</code>{' '}
          sätter texten till bara namnet, oavsett vad som matchade.
        </p>
        <ComboBox
          {...args}
          items={filteredProducts}
          inputValue={query}
          onInputChange={value => {
            setQuery(value)
            if (value === '') setSelectedKey(null)
          }}
          selectedKey={selectedKey}
          onSelectionChange={key => {
            setSelectedKey(key)
            setQuery(products.find(item => item.id === key)?.name ?? '')
          }}
          defaultFilter={() => true}
        >
          {item => <ListBoxItem>{item.name}</ListBoxItem>}
        </ComboBox>
        <pre style={codeBlockStyle}>
          <code>{controlledCode}</code>
        </pre>
      </>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Filters on name and id like the textValue version, but takes full control of the input: `onSelectionChange` explicitly sets the displayed text to the item\'s name, regardless of what matched. Use this when the textValue caveat above is not acceptable.',
      },
      source: {
        code: controlledCode,
        type: 'code',
      },
    },
  },
}

export const WithHelpPopover: Story = {
  args: {
    popover: {
      children:
        'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information',
    },
  },
}
