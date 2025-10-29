import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  ListBoxItem,
  ListBoxSection,
  ListBoxHeader,
  SelectionMode,
  TooltipTrigger,
  Tooltip,
} from '@midas-ds/components'
import { RunOptions } from 'axe-core'
import { options, optionsWithSections } from '../utils/storybook'
import { expect, fn, spyOn, userEvent, within } from 'storybook/test'
import { useState } from 'react'
import { Collection, Focusable, type Key } from 'react-aria-components'

const onChange = fn()
const onSubmit = fn()

type Story<
  T extends object = Item,
  M extends SelectionMode = 'single',
> = StoryObj<typeof Select<T, M>>

type Item = (typeof options)[0]
type Section = (typeof optionsWithSections)[0]

export default {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    children: item => <ListBoxItem {...item}>{item.name}</ListBoxItem>,
    description: 'Description',
    isDisabled: false,
    isSelectableAll: false,
    label: 'Label',
    items: options,
    placeholder: 'Select an option',
    selectionMode: 'single',
    showTags: false,
    errorPosition: 'top',
    onSelectionChange: onChange,
    size: 'large',
  },
} satisfies Meta<typeof Select<Item>>

export const StaticItems: Story = {
  args: {
    label: 'label',
    description: 'static',
    children: (
      <>
        <ListBoxItem>Hello</ListBoxItem>
        <ListBoxItem>Goodbye</ListBoxItem>
      </>
    ),
  },
}

export const Normal: Story = {
  play: async ({ args, canvas, step }) => {
    await step(
      'It should be possible to select an item using the keyboard',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')

        const visibleValue = canvas.getByText(options[0].name, {
          selector: 'span',
        })

        const hiddenValue = within(
          canvas.getByTestId('hidden-select-container'),
        ).getByDisplayValue(options[0].name)

        await expect(hiddenValue).toBeVisible()
        await expect(visibleValue).toBeVisible()
      },
    )
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px',
      })
    })
  },
}

export const DefaultValue: Story<Item, 'multiple'> = {
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultValue: ['kiwi', 'banana'],
    selectionMode: 'multiple',
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected value',
      async () => {
        await expect(
          canvas.getByText('2 valda', {
            selector: 'span',
          }),
        ).toBeVisible()
      },
    )
  },
}

export const AllKeysSelected: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultValue: options.map(({ id }) => id),
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected values',
      async () => {
        await expect(
          canvas.getByText(`${options.length} valda`, {
            selector: 'span',
          }),
        ).toBeVisible()
      },
    )
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled',
      },
    },
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
  args: {
    isDisabled: true,
  },
}

export const DisabledOption: Story = {
  args: {
    description: 'Kiwi is disabled',
    disabledKeys: ['kiwi'],
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Error msg',
  },
}

export const WithTags: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi'],
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected values',
      async () => {
        const visibleValue = canvas.getByText('2 valda', {
          selector: 'span',
        })

        await expect(visibleValue).toBeVisible()
        await expect(
          canvas.getByText('Apple', { selector: 'div' }),
        ).toBeVisible()
        await expect(
          canvas.getByText('Kiwi', { selector: 'div' }),
        ).toBeVisible()
      },
    )
  },
}

export const SelectAllEnabled: Story<Item, 'multiple'> = {
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true,
  },
  play: async ({ canvas, step }) => {
    await step('It should be possible to select all items', async () => {
      await userEvent.tab()
      await userEvent.keyboard('[Space]')
      await userEvent.tab({ shift: true })
      await userEvent.keyboard('[Space]')
      await userEvent.keyboard('[Escape]')

      const visibleValue = canvas.getByText(`${options.length} valda`, {
        selector: 'span',
      })

      await expect(visibleValue).toBeVisible()
    })
  },
}

export const DS872: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Normal.args,
    selectionMode: 'single',
    label: 'Ärende',
    placeholder: 'Välj ärende',
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | null>(null)

    return (
      <Select
        {...args}
        value={selectedKey}
        onChange={setSelectedKey}
        items={[
          { id: '12', name: 'tolv' },
          { id: '1', name: 'ett' },
          { id: '2', name: 'två' },
        ]}
      />
    )
  },
  play: async ({ step, canvas }) => {
    await step(
      'It should be possible to select an item with an ID greater than 9',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')

        const visibleValue = canvas.getByText('tolv', {
          selector: 'span',
        })

        await expect(visibleValue).toBeVisible()
      },
    )
  },
}

export const StaticSections: Story = {
  args: {
    children: (
      <>
        <ListBoxSection>
          <ListBoxHeader>Fruit</ListBoxHeader>
          <ListBoxItem id='Apple'>Apple</ListBoxItem>
          <ListBoxItem id='Banana'>Banana</ListBoxItem>
        </ListBoxSection>
        <ListBoxSection>
          <ListBoxHeader>Vegetables</ListBoxHeader>
          <ListBoxItem id='Cabbage'>Cabbage</ListBoxItem>
          <ListBoxItem id='Broccoli'>Broccoli</ListBoxItem>
        </ListBoxSection>
      </>
    ),
  },
}

export const DynamicSections: Story<Section> = {
  args: {
    ...Normal.args,
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
  play: async ({ step }) => {
    const warn = spyOn(console, 'warn').mockImplementation(fn())

    await step(
      'It should not warn about missing aria labels when toggling the select open state',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')

        await expect(warn).toHaveBeenCalledTimes(0)
      },
    )
  },
}

export const RequiredSingleSelect: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    selectionMode: 'single',
    isRequired: true,
  },
  render: args => (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <Select {...args} />
      <button type='submit'>submit</button>
    </form>
  ),
  play: async ({ step }) => {
    await step(
      'It should give a validation error if the user submitted without selecting an option',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await expect(onSubmit).not.toHaveBeenCalled()
      },
    )
  },
}

export const MultiSelectTests: Story<Item, 'multiple'> = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    selectionMode: 'multiple',
  },
  play: async ({ canvas, step }) => {
    await step(
      'It should be possible to deselect all items to empty the selection',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Escape]')

        const visibleValue = canvas.getByText(`Select an option`, {
          selector: 'span',
        })

        await expect(visibleValue).toBeVisible()
      },
    )
  },
}

const longText = 'Flaggstångsknoppsmålarbyxor'

export const TruncationAndTooltip = {
  args: {
    children: (
      <>
        <ListBoxItem textValue={longText}>
          <TooltipTrigger>
            <Focusable>
              <div
                role='button'
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {longText}
              </div>
            </Focusable>
            <Tooltip
              style={{ maxWidth: 'none' }}
              placement='bottom'
            >
              {longText}
            </Tooltip>
          </TooltipTrigger>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
    ),
  },
}

export const TruncationAndTooltipWithDelay = {
  args: {
    children: (
      <>
        <ListBoxItem textValue={longText}>
          <TooltipTrigger delay={1500}>
            <Focusable>
              <div
                role='button'
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {longText}
              </div>
            </Focusable>
            <Tooltip
              style={{ maxWidth: 'none' }}
              placement='bottom'
            >
              {longText}
            </Tooltip>
          </TooltipTrigger>
        </ListBoxItem>
        <ListBoxItem>Hello</ListBoxItem>
      </>
    ),
  },
}
