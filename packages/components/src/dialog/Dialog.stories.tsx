import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, ModalTrigger } from './Dialog'
import { Button } from '../button'
import React from 'react'
import { PressEvent } from 'react-aria-components'
import { Select } from '../select'

const meta: Meta<typeof ModalTrigger> = {
  component: ModalTrigger,
  title: 'Components/Dialog',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
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
  'Passionfruit'
]
const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})

export const Default: Story = {
  args: {},
  render: function Render() {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    return (
      <>
        <ModalTrigger
          label={'open dialog'}
          isDismissable
        >
          {(close: ((e: PressEvent) => void) | undefined) => (
            <Dialog title='Enter your name'>
              <Select
                placeholder={'Select...'}
                defaultSelectedKeys={['kiwi']}
                label={'Select a single fruit'}
                selectionMode={'single'}
                options={options}
                isClearable={false}
                isSelectableAll={false}
                onSelectionChange={x =>
                  console.log('[single]onSelectionChange', x)
                }
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
      </>
    )
  }
}
