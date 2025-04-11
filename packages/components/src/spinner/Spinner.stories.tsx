import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import { Button } from '../button'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    small: false,
    isOnColor: false,
    dark: false,
  },
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {},
}

export const Small: Story = {
  args: { small: true },
}

export const InButton: Story = {
  args: { small: true, isOnColor: true },
  render: args => (
    <Button>
      <Spinner {...args} />
      Laddar
    </Button>
  ),
}
