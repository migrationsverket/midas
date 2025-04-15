import type { Meta, StoryObj } from '@storybook/react'
import { Modal, DialogTrigger } from './Dialog'
import { Button } from '../button'
import { Select } from '../select'
import React from 'react'

const meta: Meta<typeof DialogTrigger> = {
  component: DialogTrigger,
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof DialogTrigger>
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
const Render = ({ ...args }) => {
  return (
    <DialogTrigger {...args}>
      <Button>Öppna</Button>
      <Modal
        title='Enter your name'
        isDismissable={args?.isDismissable}
      >
        <Select
          autoFocus
          placeholder={'Select...'}
          defaultSelectedKeys={['kiwi']}
          label={'Select fruits'}
          selectionMode={'multiple'}
          options={options}
          isClearable
          isSelectableAll={false}
        ></Select>
        <Button slot={'close'}>Submit</Button>
      </Modal>
    </DialogTrigger>
  )
}

export const Default: Story = {
  args: {
    isDismissable: true,
    defaultOpen: false,
  },
  render: Render,
}

export const NotDismissable: Story = {
  args: {
    ...Default.args,
    isDismissable: false,
  },
  render: Render,
}
