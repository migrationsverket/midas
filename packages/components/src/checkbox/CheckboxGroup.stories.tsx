import { Checkbox } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxGroup } from './CheckboxGroup'
import { expect, userEvent } from '@storybook/test'

export default {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    // isInvalid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'här gick det snett',
    errorPosition: 'top',
  },
  argTypes: {
    isInvalid: { type: 'boolean' },
    isDisabled: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
    errorMessage: { type: 'string' },
  },
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        {['Banan', 'Apple', 'Mango'].map((item: string) => (
          <Checkbox
            value={item}
            key={item}
          >
            {item}
          </Checkbox>
        ))}
      </CheckboxGroup>
    )
  },
} as Meta<typeof CheckboxGroup>

type Story = StoryObj<typeof CheckboxGroup>

export const Primary: Story = {}

export const SelectAll: Story = {
  args: {
    showSelectAll: true,
  },
}

export const SelectAllInteraction: Story = {
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  // tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({...args}) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value={'banana'}>Banana</Checkbox>
        <Checkbox value={'apple'}>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>
    )
  },
  play: async ({ canvas, step }) => {
    const selectAllCheckbox = canvas.getByText('SELECT ALL')
    await step(
      'It should show all selected as checked when all options are checked',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await expect(selectAllCheckbox).toHaveAttribute('data-selected','true')
      },
    )
    await step('It should show select all as indeterminate when 0 > check < max is selected',
      async () => {
        const banana = canvas.getByLabelText('Banana')
        await userEvent.click(banana)
        await expect(selectAllCheckbox).toHaveAttribute('data-indeterminate','true')
      }
    )
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const Invalid: Story = {
  args: {
    isRequired: true,
    label: 'Invalid (by required)',
    description: 'This is obviously not a working test',
    validationBehavior: 'aria',
    errorMessage: 'Du måste välja en av frukterna',
  },
  play: async ({ canvas, step }) => {
    await step('It should display correct error message when invalid', async () => {
      const checkboxGroup = canvas.getByLabelText('Invalid (by required)')
      await expect(checkboxGroup).toBeVisible()
    })
  }
}

