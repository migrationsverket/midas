import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './LinkButton'

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  title: 'Components/LinkButton',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    children: 'Hej',
    href: '#'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Hej',
    href: '#',
    variant: 'secondary'
  }
}

export const Fullwidth: Story = {
  args: {
    children: 'Hej',
    fullwidth: true,
    href: '#'
  }
}

export const AppLink: Story = {
  args: {
    children: 'Button',
    onPress: () => alert('navigation fn')
  }
}
