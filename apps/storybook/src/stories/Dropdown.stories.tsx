import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown, DropdownItem, LinkButton } from '@midas-ds/components'
import { Ellipsis } from 'lucide-react'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  subcomponents: {
    DropdownItem: DropdownItem as React.ComponentType<unknown>,
  },
  title: 'Components/Dropdown',
  args: {
    title: 'Meny',
    children: ['Ett', 'Två', 'Tre'].map((item, i) => (
      <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>
    )),
  },
}
export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {}

export const Open: Story = {
  tags: ['!snapshot'],
}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    label: 'Meny',
  },
}

export const CustomIcon: Story = {
  args: {
    title: undefined,
    label: 'Meny',
    icon: Ellipsis,
  },
}
