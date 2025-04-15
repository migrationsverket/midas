import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { RunOptions } from 'axe-core'
import { options, optionsWithSections } from './utils'
import { expect, userEvent } from '@storybook/test'
import React, { useState } from 'react'

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
    defaultSelectedKeys: ['kiwi'],
  },
  play: async ({ args, canvas, step }) => {
    await step(
      'It should display and reflect the pre-selected value',
      async () => {
        const selectedOptionName = options.find(
          option => option.id === (args.defaultSelectedKeys as string[])[0],
        )?.name as string
        const hiddenSelect = canvas.getByLabelText(`${args.label}-hidden`)
        const visibleValue = canvas.getByText(selectedOptionName, {
          selector: 'span',
        })

        expect(hiddenSelect).toHaveDisplayValue([selectedOptionName])
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
    const [selectedItem, setSelectedItem] = useState('')

    return (
      <Select
        {...args}
        selectedKeys={selectedItem}
        onSelectionChange={item => setSelectedItem(item.toString())}
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

export const Sectioned: Story = {
  args: {
    ...Normal.args,
    options: optionsWithSections,
  },
}
