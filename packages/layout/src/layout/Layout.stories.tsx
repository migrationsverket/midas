import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layout } from './Layout'

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
  title: 'Components/Layout/Layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'boilerplate',
  },
} satisfies Meta<typeof Layout>

export const Primary: Story = {}
