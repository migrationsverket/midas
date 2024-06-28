import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
  args: {
    children: 'Länk',
    href: '#',
  },
}
