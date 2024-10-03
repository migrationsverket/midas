import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, Item } from './ComboBox'

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof ComboBox>
type Item = { id: number; name: string }

function generateMockOptions(count: number): Iterable<Item> {
  const fruits = [
    'Apple',
    'Banana',
    'Kiwi',
    'Elderflower',
    'Nectarine',
    'Watermelon',
    'Pineapple',
    'Apricot',
    'Cloudberry',
    'Mango',
    'Strawberry',
    'Blueberry',
    'Raspberry',
    'Blackberry',
    'Cherry',
    'Peach',
    'Plum',
    'Grape',
    'Orange',
    'Lemon',
    'Lime',
    'Coconut',
    'Fig',
    'Papaya',
    'Guava',
    'Pomegranate',
    'Dragonfruit',
    'Starfruit',
    'Passionfruit',
  ]

  return Array.from({ length: count }, (_, index) => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
    return {
      id: index + 1,
      name: randomFruit,
    }
  })
}

const options = generateMockOptions(30)

export const OneItem: Story = {
  args: {
    placeholder: 'One item...',
  },
  render: (args: any) => (
    <ComboBox
      items={{ value: 'value' }}
      {...args}
    >
      <Item value={{ value: 'item' }}>Item A</Item>
    </ComboBox>
  ),
}

export const ManyItems: Story = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
  },
  render: (args: any) => (
    <ComboBox
      items={options}
      {...args}
    >
      {(item: Item) => <Item textValue={item.name}>{item.name}</Item>}
    </ComboBox>
  ),
}

export const Autocomplete: Story = {
  args: {
    placeholder: 'Autocomplete...',
    label: 'Välj en frukt',
    description: 'description',
  },
  render: (args: any) => (
    <ComboBox
      {...args}
      items={options}
    >
      {(item: Item) => <Item textValue={item.name}>{item.name}</Item>}
    </ComboBox>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
    <ComboBox {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </ComboBox>
  ),
}

export const disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: (args: any) => (
    <ComboBox {...args}>
      <Item>Hej</Item>
    </ComboBox>
  ),
}
