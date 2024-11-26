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

const fruits = [
  'Äpple',
  'Banan',
  'Kiwi',
  'Apelsin',
];
const items = fruits.map(fruit => 
  <Radio key={fruit} value={fruit} id={fruit.toLowerCase()}>{fruit}</Radio>
)

const radioItemsOneDisabled = [
  <Radio key="radio-banan" value="banan">Banan</Radio>,
  <Radio key="radio-apelsin" value="apelsin" isDisabled={true}>
    Apelsin
  </Radio>,
  <Radio key="radio-kiwi" value="kiwi">Kiwi</Radio>
];

export const Normal: Story = {
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items
  }
}

export const Disabled: Story = {
  args: {
    children: items,
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
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}
