import type { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './LinkButton'
const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  title: 'Components/LinkButton',
  tags: ['autodocs'],
  argTypes: {}
}
export default meta
type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    children: 'Till E-tjänst',
    href: '#'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Till E-tjänst',
    href: '#',
    isDisabled: true
  }
}
export const PrimaryFullwidth = {
  args: {
    children: 'Till E-tjänst',
    href: '#',
    fullwidth: true
  },
  parameters: {}
}
export const AppLink: Story = {
  args: {
    children: 'Till E-tjänst',
    onPress: () => alert('navigation fn')
  }
}
