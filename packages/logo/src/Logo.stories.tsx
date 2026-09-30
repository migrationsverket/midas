import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
    primary: {
      control: { type: 'boolean' },
    },
    padding: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {}

export const Monochrome: Story = {
  args: {
    primary: false,
  },
}
