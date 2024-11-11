import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelect } from './MultiSelect'

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: 'Components/MultiSelect'
}
export default meta
type Story = StoryObj<typeof MultiSelect>

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
  'Passionfruit'
]

const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})

export const Primary: Story = {
  args: {
    label: 'Etikett',
    description: 'Valfri hjälptext',
    items: options
  }
}

export const DefaultSelectedKeys: Story = {
  args: {
    label: 'Etikett',
    description: 'Blackberry är förvalt',
    items: options,
    defaultSelectedKeys: ['blackberry']
  }
}
