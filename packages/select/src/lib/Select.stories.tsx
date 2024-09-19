import type { Meta, StoryObj } from '@storybook/react'
import { Select, Item } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { type: 'string' },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof Select>
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

const options = generateMockOptions(300)

export const OneItem: Story = {
  args: {
    placeholder: 'One item...',
  },
  render: (args: any) => (
    <Select
      items={{ value: 'value' }}
      {...args}
    >
      <Item value={{ value: 'item' }}>Item A</Item>
    </Select>
  ),
}

export const ManyItems: Story = {
  args: {
    placeholder: 'Many items...',
  },
  render: (args: any) => (
    <Select
      label="Välj en frukt"
      items={options}
    >
      {(item) => <Item>{item.name}</Item>}
    </Select>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
    <Select {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Select>
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
    <Select {...args}>
      <Item>Hej</Item>
    </Select>
  ),
}
