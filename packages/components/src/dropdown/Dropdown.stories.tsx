import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownItem } from './Dropdown'
import { LinkButton } from '../link-button'
import { userEvent, expect } from '@storybook/test'

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
  play: async ({ canvas, step, args: { title } }) => {
    await step('It should render successfully', async () => {
      const dropdown = canvas.getByText(title as string)
      await userEvent.click(dropdown)
      expect(canvas).toBeTruthy()
    })
  },
}

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    label: 'Meny',
  },
}
