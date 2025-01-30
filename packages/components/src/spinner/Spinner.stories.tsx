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
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {},
}

export const Small: Story = {
  args: { small: true },
}

export const Dark: Story = {
  parameters: {
    backgrounds: { default: 'Dark' },
  },
  args: { dark: true },
}

export const InButton: Story = {
  args: { small: true, dark: true },
  render: ({ ...args }) => {
    return (
      <Button>
        <Spinner
          dark={args.dark}
          small={args.small}
        />
        Laddar
      </Button>
    )
  },
}
