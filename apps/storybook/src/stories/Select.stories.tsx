import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from '@midas-ds/components'
import { RunOptions } from 'axe-core'
import { options, optionsWithSections } from '../utils/storybook'
import { expect, fn, spyOn, userEvent } from 'storybook/test'
import { useState } from 'react'
import { Key } from 'react-aria-components'

const onChange = fn()
const onSubmit = fn()

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
    onSelectionChange: onChange,
    size: 'large',
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
        await expect(hiddenSelect).toHaveDisplayValue([options[0].name])
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

export const DefaultSelectedKey: Story = {
  args: {
    description: 'Kiwi is pre-selected',
    defaultValue: 'kiwi',
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
    defaultValue: ['kiwi', 'banana'],
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

export const WithTags: Story = {
  args: {
    selectionMode: 'multiple',
    showTags: true,
    defaultValue: ['apple', 'kiwi'],
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

export const DS872: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    ...Normal.args,
    selectionMode: 'single',
    isClearable: false,
    label: 'Ärende',
    placeholder: 'Välj ärende',
  },
  render: args => {
    const [selectedKey, setSelectedKey] = useState<Key | Key[] | null>(null)

    return (
      <Select
        {...args}
        value={selectedKey}
        onChange={setSelectedKey}
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
    validationBehavior: 'native',
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

export const RequiredMultiSelect: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  ...RequiredSingleSelect,
  args: {
    ...RequiredSingleSelect.args,
    selectionMode: 'multiple',
  },
}

export const MultiSelectTests: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    selectionMode: 'multiple',
  },
  play: async ({ canvas, step, args: { label } }) => {
    await step(
      'It should be possible to deselect all items to empty the selection',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Escape]')
        await expect(
          canvas.getByLabelText(`${label as string}-hidden`),
        ).toHaveDisplayValue([])
      },
    )
    await step(
      'It should be possible to press escape to exit the select without clearing the selections made',
      async () => {
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Escape]')
        await expect(
          canvas.getByLabelText(`${label as string}-hidden`),
        ).not.toHaveDisplayValue([])
      },
    )
  },
}
