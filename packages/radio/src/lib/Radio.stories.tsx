import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, Radio } from './Radio'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    label: 'Group label',
    errorMessage: 'Du måste välja en frukt?'
  },
  argTypes: {
    children: { table: { disable: true } },
    label: {
      type: 'string',
      control: { type: 'text' }
    },
    isDisabled: {
      type: 'boolean',
      options: [false, true],
      control: { type: 'radio' }
    },
    isInvalid: {
      type: 'boolean',
      options: [false, true],
      control: { type: 'radio' }
    }
  }
}
export default meta

type Story = StoryObj<typeof RadioGroup>

const radioItems = [
  <Radio value={'banan'}>Banan</Radio>,
  <Radio value={'apelsin'}>Apelsin</Radio>,
  <Radio value={'kiwi'}>Kiwi</Radio>
]
const radioItemsOneDisabled = [
  <Radio value={'banan'}>Banan</Radio>,
  <Radio
    value={'apelsin'}
    isDisabled={true}
  >
    Apelsin
  </Radio>,
  <Radio value={'kiwi'}>Kiwi</Radio>
]

export const Normal: Story = {
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: [
      <Radio value={'banan'}>Banan</Radio>,
      <Radio value={'apelsin'}>Apelsin</Radio>,
      <Radio value={'kiwi'}>Kiwi</Radio>
    ]
  }
}

export const Disabled: Story = {
  args: {
    children: radioItems,
    isDisabled: true
  }
}

export const OneItemDisabled: Story = {
  args: {
    children: radioItemsOneDisabled
  }
}

export const Invalid: Story = {
  args: {
    children: radioItems,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}
