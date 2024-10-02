import type { Meta, StoryObj } from '@storybook/react'
import { Combobox, Item } from './ComboBox'

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { control: 'text' },  // Correctly define placeholder as a control
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof Combobox>
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
    <Combobox
      items={{ value: 'value' }}
      {...args}
    >
      <Item value={{ value: 'item' }}>Item A</Item>
    </Combobox>
  ),
}

export const ManyItems: Story = {
  args: {
    placeholder: 'Many items...',
  },
  render: (args: any) => (
    <Combobox
      label="Välj en frukt"
      description='description'
      items={options}
    >
      {(item) => <Item textValue={item.name}>{item.name}</Item>}
    </Combobox>
  ),
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
    <Combobox {...args}>
      <Item>Apple</Item>
      <Item>Lemon</Item>
    </Combobox>
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
    <Combobox {...args}>
      <Item>Hej</Item>
    </Combobox>
  ),
}