import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import { LinkButton } from '../link-button'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown'
}
export default meta
type Story = StoryObj<typeof Dropdown>

const ITEMS = ['Ett', 'Två', 'Tre']

export const Primary: Story = {
  args: {
    label: 'Meny',
    children: ITEMS.map((item, i) => (
      <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>
    ))
  }
}
