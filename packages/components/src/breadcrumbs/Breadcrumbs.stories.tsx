import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from './Breadcrumbs'

type Story = StoryObj<typeof Breadcrumbs>

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>

export const Primary: Story = {}
