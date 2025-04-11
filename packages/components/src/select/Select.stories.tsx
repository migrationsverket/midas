import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { RunOptions } from 'axe-core'
import { options } from './utils'
import { expect, userEvent } from '@storybook/test'
import React, { useState } from 'react'
import { Selection } from 'react-stately'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
  args: {
    description: 'Description',
    isClearable: true,
    isDisabled: false,
    isSelectableAll: false,
    label: 'Label',
    options,
    placeholder: 'Select an option',
    selectionMode: 'single',
    showTags: false,
    errorPosition: 'top',
  },
}
export default meta
type Story = StoryObj<typeof Select>

export const Normal: Story = {
  play: async ({ args, canvas, step }) => {
    await step(
      'It should be possible to select an item using the keyboard',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText(options[0].name, {
          selector: 'span',
        })
        expect(hiddenSelect).toHaveDisplayValue([options[0].name])
        expect(visibleValue).toBeVisible()
      },
    )
  },
}

export const DefaultSelectedKey: Story = {
  args: {
    description: 'Kiwi is pre-selected',
    defaultSelectedKeys: new Set(['kiwi']),
  },
  play: async ({ args, canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected value',
      async () => {
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText('Kiwi', {
          selector: 'span',
        })

        expect(hiddenSelect).toHaveDisplayValue(['Kiwi'])
        expect(visibleValue).toBeVisible()
      },
    )
  },
}

export const DefaultSelectedKeys: Story = {
  args: {
    description: 'Kiwi and banana are pre-selected',
    defaultSelectedKeys: new Set(['kiwi', 'banana']),
    selectionMode: 'multiple',
  },
  play: async ({ args, canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected value',
      async () => {
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText('2 valda', {
          selector: 'span',
        })

        expect(hiddenSelect).toHaveDisplayValue(['Banana', 'Kiwi'])
        expect(visibleValue).toBeVisible()
      },
    )
  },
}

export const AllKeysSelected: Story = {
  args: {
    selectionMode: 'multiple',
    description: 'All options are selected',
    defaultSelectedKeys: 'all',
  },
  play: async ({ args, canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected values',
      async () => {
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText(/valda/, {
          selector: 'span',
        })

        expect(hiddenSelect).toHaveDisplayValue(options.map(({ name }) => name))
        expect(visibleValue).toBeVisible()
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
      element: 'body',
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

export const WithTags: Story = {
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultSelectedKeys: ['apple', 'kiwi'],
  },
  play: async ({ args, canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected values',
      async () => {
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText('2 valda', {
          selector: 'span',
        })

        expect(hiddenSelect).toHaveDisplayValue(['Apple', 'Kiwi'])
        expect(visibleValue).toBeVisible()
        expect(canvas.getByText('Apple', { selector: 'div' })).toBeVisible()
        expect(canvas.getByText('Kiwi', { selector: 'div' })).toBeVisible()
      },
    )
  },
}

export const SelectAllEnabled: Story = {
  args: {
    selectionMode: 'multiple',
    isSelectableAll: true,
  },
  play: async ({ args, canvas, step }) => {
    await step('It should be possible to select all items', async () => {
      await userEvent.tab()
      await userEvent.keyboard('[Space]')
      await userEvent.tab({ shift: true })
      await userEvent.keyboard('[Space]')
      await userEvent.keyboard('[Escape]')

      const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
      const visibleValue = canvas.getByText(`${options.length} valda`, {
        selector: 'span',
      })

      expect(hiddenSelect).toHaveDisplayValue(options.map(({ name }) => name))
      expect(visibleValue).toBeVisible()
    })
  },
}

/** As default all options are clearable. `isClearable={false}` Experimental feature  */
export const NotClearable: Story = {
  args: {
    selectionMode: 'multiple',
    isClearable: false,
  },
}

export const RequiredMultiple: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    selectionMode: 'multiple',
    isRequired: true,
  },
  render: args => (
    <form
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Select {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.keyboard('[Enter]')
      await expect(canvas.getByLabelText(`${args.label}-hidden`)).toBeInvalid()
    })

    // Select a value then submit again
    await step(
      'It should be possible to submit the form if a value was selected',
      async () => {
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Escape]')
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await expect(canvas.getByLabelText(`${args.label}-hidden`)).toBeValid()
      },
    )
  },
}

export const RequiredSingle: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    selectionMode: 'single',
    isRequired: true,
  },
  render: RequiredMultiple.render,
  play: async ({ canvas, step, args }) => {
    // Submit the form without selecting a value
    await step('It should not be possible to submit the form', async () => {
      await userEvent.tab()
      await userEvent.tab()
      await userEvent.keyboard('[Enter]')
      await expect(canvas.getByLabelText(`${args.label}-hidden`)).toBeInvalid()
    })

    // Select a value then submit again
    await step(
      'It should be possible to submit the form if a value was selected',
      async () => {
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await expect(canvas.getByLabelText(`${args.label}-hidden`)).toBeValid()
      },
    )
  },
}

export const Controlled: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    ...Normal.args,
    selectionMode: 'multiple',
    label: 'Controlled mode',
    placeholder: 'Välj flera',
  },
  render: args => {
    const options = [
      { id: 'banan', name: 'Banan' },
      { id: 'melon', name: 'Melon' },
      { id: 'kiwi', name: 'Kiwi' },
      { id: 'citron', name: 'Citron' },
    ]

    const [selectedFruit, setSelectedFruit] = useState<Selection>(new Set())

    const handleSelectionChange = (keys: Selection) => {
      if (keys === 'all') {
        return setSelectedFruit(new Set(options.map(({ id }) => id)))
      }
      return setSelectedFruit(keys)
    }

    return (
      <>
        <Select
          {...args}
          selectedKeys={selectedFruit}
          onSelectionChange={handleSelectionChange}
          options={[
            { id: 'banan', name: 'Banan' },
            { id: 'melon', name: 'Melon' },
            { id: 'kiwi', name: 'Kiwi' },
            { id: 'citron', name: 'Citron' },
          ]}
          isSelectableAll
        />
        <pre>
          Valda frukter:
          {typeof selectedFruit === 'string'
            ? selectedFruit
            : selectedFruit && Array.from(selectedFruit).join(', ')}
        </pre>
      </>
    )
  },
}

export const DS872: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    ...Normal.args,
    selectionMode: 'single',
    isClearable: false,
    label: 'Ärende',
    placeholder: 'Välj ärende',
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Selection>(new Set())

    return (
      <Select
        {...args}
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
        options={[
          { id: '12', name: 'tolv' },
          { id: '1', name: 'ett' },
          { id: '2', name: 'två' },
        ]}
      />
    )
  },
  play: async ({ args, step, canvas }) => {
    await step(
      'It should be possible to select an item with an ID greater than 9',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        expect(
          canvas.getByLabelText(args.label + '-hidden'),
        ).toHaveDisplayValue(['tolv'])
      },
    )
  },
}
