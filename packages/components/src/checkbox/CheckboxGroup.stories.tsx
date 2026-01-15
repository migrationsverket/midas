import { Meta, StoryObj } from '@storybook/react-vite'
import { CheckboxGroup } from './CheckboxGroup'
import { Checkbox } from './Checkbox'

type Story = StoryObj<typeof CheckboxGroup>

export default {
  title: 'Components/Checkbox/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  args: {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    isReadOnly: false,
    label: 'Etikett',
    description: 'Beskrivning',
    errorMessage: 'Du måste välja en frukt',
    errorPosition: 'top',
    children: ['Banan', 'Apple', 'Mango'].map((item: string) => (
      <Checkbox
        value={item}
        key={item}
      >
        {item}
      </Checkbox>
    )),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

export const Primary: Story = {}

export const ShowSelectAll: Story = {
  args: {
    showSelectAll: true,
  },
}

export const SelectAllInteraction: Story = {
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL',
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>
    )
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango'],
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
  },
}
