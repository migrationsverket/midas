import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import { LinkButton } from '../link-button'
import { within, userEvent } from '@storybook/test'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown'
}
export default meta
type Story = StoryObj<typeof Dropdown>

const ITEMS = ['Ett', 'Två', 'Tre']

export const Primary: Story = {
  args: {
    title: 'Meny',
    children: ITEMS.map((item, i) => (
      <DropdownItem key={'dropdown_' + i}>
        <LinkButton variant='tertiary'>{item}</LinkButton>
      </DropdownItem>
    ))
  }
}

export const Open: Story = {
  args: {
    ...Primary.args
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(await canvas.findByText('Meny'))
  }
}

export const WithoutTitle: Story = {
  args: {
    ...Primary.args,
    title: undefined,
    label: 'Meny'
  }
}
