import type { Meta, StoryObj } from '@storybook/react-vite'
import { options, optionsWithSections } from '@midas-ds/test-utils'
import { RunOptions } from 'axe-core'
import React from 'react'
import { useAsyncList } from 'react-stately'
import { Collection } from 'react-aria-components'
import { ComboBox } from './ComboBox'
import type { SelectionMode } from '../common/types'
import {
  ListBoxHeader,
  ListBoxItem,
  ListBoxLoadMoreItem,
  ListBoxSection,
} from '../list-box'

type Item = (typeof options)[0]

type Section = (typeof optionsWithSections)[0]

type Story<
  T extends object = Item,
  M extends SelectionMode = 'single',
> = StoryObj<typeof ComboBox<T, M>>

export default {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    children: item => <ListBoxItem>{item.name}</ListBoxItem>,
    className: 'test',
    description: 'Description ',
    errorMessage: 'Fel!',
    errorPosition: 'top',
    items: options,
    label: 'Välj en frukt ',
    placeholder: 'Välj eller sök frukt',
    size: 'large',
  },
} satisfies Meta<typeof ComboBox<Item>>

export const Primary: Story = {}

export const Invalid: Story = {
  args: {
    isInvalid: true,
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
    defaultSelectedKey: options[0].id,
  },
}

// The generic type is infered from the items prop in real life
export const Sectioned: Story<Section> = {
  args: {
    className: 'test',
    items: optionsWithSections,
    children: section => (
      <ListBoxSection id={section.name}>
        <ListBoxHeader>{section.name}</ListBoxHeader>
        <Collection items={section.children}>
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Collection>
      </ListBoxSection>
    ),
  },
}

export const Multiple: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
  },
}

export const MultipleDefaultValue: Story<Item, 'multiple'> = {
  args: {
    ...Multiple.args,
    description: 'Ananas och Kiwi är förvalda',
    defaultValue: ['ananas', 'kiwi'],
  },
}

export const MultipleReadOnly: Story<Item, 'multiple'> = {
  args: {
    ...Multiple.args,
    description: 'Ananas och Kiwi är förvalda, skrivskyddad',
    defaultValue: ['ananas', 'kiwi'],
    isReadOnly: true,
  },
}

export const MultipleAllSelected: Story<Item, 'multiple'> = {
  args: {
    ...Multiple.args,
    description: 'Alla alternativ är valda',
    defaultValue: options.map(({ id }) => id),
  },
}

export const MultipleWithSections: Story<Section, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    items: optionsWithSections,
    children: Sectioned.args?.children,
  },
}

export const NotVirtualized: Story<Section> = {
  tags: ['!autodocs', '!snapshot'],
  args: {
    ...Sectioned.args,
    listBoxProps: { virtualized: false },
    children: Sectioned.args?.children,
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

export const WithHelpPopover: Story = {
  args: {
    popover: {
      children:
        'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information',
    },
  },
}

// Hidden stories

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

export const Required: Story = {
  args: {
    'aria-label': 'test',
    isRequired: true,
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  decorators: Component => (
    <form>
      <Component />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const MultipleRequired: Story<Item, 'multiple'> = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    'aria-label': 'test',
    selectionMode: 'multiple',
    isRequired: true,

    defaultValue: ['ananas', 'kiwi'],
  },
  decorators: Component => (
    <form onSubmit={e => e.preventDefault()}>
      <Component />
      <button type='submit'>Submit</button>
    </form>
  ),
}
