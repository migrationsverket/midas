import type { Meta, StoryObj } from '@storybook/react-vite'
import { generateMockOptions, optionsWithSections } from '../utils/storybook'
import { RunOptions } from 'axe-core'
import React from 'react'
import {
  ComboBox,
  ComboBoxItem,
  ComboBoxSection,
  ListBoxLoadMoreItem,
  type ListBoxOption,
  type ListBoxSectionElement,
} from '@midas-ds/components'
import { useAsyncList } from 'react-stately'
import { Collection } from 'react-aria-components'

const meta: Meta<typeof ComboBox> = {
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
      <ComboBoxItem id='apple'>Apple</ComboBoxItem>
      <ComboBoxItem id='lemon'>Lemon</ComboBoxItem>
    </ComboBox>
  ),
}

export default meta

type Story = StoryObj<typeof ComboBox>

const options = generateMockOptions(30)

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
      {item => <ComboBoxItem>{item.name}</ComboBoxItem>}
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
        <ComboBoxItem>Hej</ComboBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
  ),
}

// The generic type is infered from the items prop in real life
export const Sectioned: StoryObj<typeof ComboBox<ListBoxSectionElement>> = {
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
        <ComboBoxSection
          {...section}
          id={section.name}
        />
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
            <ComboBoxItem key={id}>{name}</ComboBoxItem>
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
        {...args}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <Collection items={list.items}>
          {item => (
            <ComboBoxItem id={item.name?.toString()}>{item.name}</ComboBoxItem>
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
        {...args}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <Collection items={list.items}>
          {item => (
            <ComboBoxItem id={item.name?.toString()}>{item.name}</ComboBoxItem>
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
