import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelect } from './MultiSelect'
import { RunOptions } from 'axe-core'

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  title: 'Components/MultiSelect',
  tags: ['autodocs'],
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
  'Passionfruit',
]

const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})

export const Primary: Story = {
  args: {
    label: 'Etikett',
    description: 'Valfri hjälptext',
    items: options,
  },
  parameters: {
    a11y: {
      test: 'todo',
    },
  },
}

export const DefaultSelectedKeys: Story = {
  args: {
    label: 'Etikett',
    description: 'Blackberry är förvalt',
    items: options,
    defaultSelectedKeys: ['blackberry'],
  },
}

export const AllKeysSelected: Story = {
  args: {
    label: 'Etikett',
    description: 'Alla val är förvalda',
    items: options,
    defaultSelectedKeys: 'all',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Etikett',
    description: 'Blackberry är förvalt',
    items: options,
    defaultSelectedKeys: ['blackberry'],
    isDisabled: true,
  },
  parameters: {
    a11y: {
      element: 'body',
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
}

export const Invalid: Story = {
  args: {
    label: 'Etikett',
    description: 'Blackberry är förvalt',
    items: options,
    defaultSelectedKeys: ['blackberry'],
    isInvalid: true,
    errorMessage: 'Du får inte välja Blackberry',
  },
}
