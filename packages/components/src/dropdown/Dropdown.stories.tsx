import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import { LinkButton } from '../link-button'
import { fireEvent, within, expect } from '@storybook/test'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown',
}
export default meta
type Story = StoryObj<typeof Dropdown>

const ITEMS = ['Ett', 'Två', 'Tre']
const menuTitle = 'Meny'

export const Primary: Story = {
  args: {
    title: menuTitle,
    children: ITEMS.map((item, i) => (
      <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>
    )),
  },
}

export const Opened: Story = {
  args: {
    ...Primary.args,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const dropdown = await canvas.findByText(menuTitle)

    await fireEvent.click(dropdown)

    expect(canvas).toBeTruthy()
  },
}

export const WithoutTitle: Story = {
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny',
  },
}
