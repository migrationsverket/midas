import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'
import { BadgeContainer } from './BadgeContainer'
import { expect } from '@storybook/test'
import { Bell } from 'lucide-react'
import { Button } from '../button'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
}

export default meta
type Story = StoryObj<typeof Badge>

const Render = ({ ...args }) => {
  return (
    <Button
      variant='tertiary'
      aria-label='Notiser'
    >
      <BadgeContainer>
        <Bell />
        <Badge
          {...args}
          data-testid='badge'
        />
      </BadgeContainer>
    </Button>
  )
}

export const NoLabel: Story = {
  args: {},
  render: Render,
  play: async ({ canvas }) => {
    const badge = await canvas.findByTestId('badge')
    await expect(badge).toHaveStyle({ backgroundColor: 'rgb(230, 35, 35)' })
  },
}

export const WithLabel: Story = {
  args: {
    children: '1',
  },
  render: Render,
}

export const LongLabel: Story = {
  args: {
    children: '123',
  },
  render: Render,
}
