import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'
import { Button } from '../button'

type Story = StoryObj<typeof Spinner>

export default {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs', '!snapshot'],
  parameters: {
    layout: 'centered',
  },
  args: {
    small: false,
    className: 'test-class',
  },
} satisfies Meta<typeof Spinner>

export const Primary: Story = {}

export const Small: Story = {
  args: { small: true },
}

export const InButton: Story = {
  args: { small: true },
  render: args => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button>
        <Spinner {...args} />
        Laddar
      </Button>
      <Button variant='secondary'>
        <Spinner {...args} />
        Laddar
      </Button>
    </div>
  ),
}

export const UserSelectColor: Story = {
  args: { color: 'rebeccapurple' },
}
