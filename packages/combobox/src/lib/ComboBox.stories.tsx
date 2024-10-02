import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, Item } from './ComboBox'

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'ComboBox',
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
export const Empty: Story = {}

const ITEMS: string[] = []
for (let i = 0; i < 40; i += 1) {
  ITEMS.push(`value ${i}`)
}

function generateMockOptions(count: number) {
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
    placeholder: 'Many items...',
  },
  render: (args: any) => (
    <ComboBox
      label="Välj en frukt"
      description="description"
      items={options}
    >
      {(item) => <Item textValue={item.name}>{item.name}</Item>}
    </ComboBox>
  ),
}

export const Autocomplete: Story = {
  args: {
    placeholder: 'Autocomplete...',
  },
  render: (args: any) => (
    <ComboBox
      label="Välj en frukt"
      description="description"
      items={options}
    >
      {(item) => <Item textValue={item.name}>{item.name}</Item>}
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
  parameters: {
    docs: {
      description: {
        story: 'Avoid using disabled',
      },
    },
  },
  render: (args: any) => (
    <ComboBox {...args}>
      <Item>Hej</Item>
    </ComboBox>
  ),
}
