import type { Meta, StoryObj } from '@storybook/react'
import { Modal, DialogTrigger } from './Dialog'
import { Button } from '../button'
import { Select } from '../select'
import { options } from '../utils/storybook'

type Story = StoryObj<typeof Modal>

export default {
  component: Modal,
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal
        title='Enter your name'
        {...args}
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
        />
        <Button slot={'close'}>Submit</Button>
      </Modal>
    </DialogTrigger>
  ),
} as Meta<typeof Modal>

export const Default: Story = {
  args: {
    isDismissable: true,
  },
}

export const NotDismissable: Story = {}
