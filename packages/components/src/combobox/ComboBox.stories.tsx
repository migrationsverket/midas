import type { Meta, StoryObj } from '@storybook/react-vite'
import { generateMockOptions, optionsWithSections } from '../utils/tests'
import { RunOptions } from 'axe-core'
import React from 'react'
import { useAsyncList } from 'react-stately'
import { Collection } from 'react-aria-components'
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

const options = generateMockOptions(30)

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
