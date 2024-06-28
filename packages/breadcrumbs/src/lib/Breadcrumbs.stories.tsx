import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Primary: Story = {
  args: {
    items: [
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
    ],
  },
}
