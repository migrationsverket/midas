import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, ModalTrigger } from './Dialog'
import { Button } from '../button'
import React from 'react'
import { Select } from '../select'

const meta: Meta<typeof ModalTrigger> = {
  component: ModalTrigger,
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof ModalTrigger>
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <ModalTrigger {...args}>
      {close => (
        <Dialog title='Enter your name'>
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
          <Button
            onPress={close}
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </Dialog>
      )}
    </ModalTrigger>
  )
}

export const Default: Story = {
  args: {
    isDismissable: true,
    label: 'Visa fruktval',
    defaultOpen: false,
  },
  render: Render,
}

export const NotDismissable: Story = {
  args: {
    ...Default.args,
    label: 'Klicka utanför',
    isDismissable: false,
  },
  render: Render,
}
