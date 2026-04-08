import { composeStories, type Meta, type StoryObj } from '@storybook/react-vite'
import * as navigationStories from '../../navigation/Navigation.stories'
import { MobileMenu } from '.'
import { useState } from 'react'

type Story = StoryObj<typeof MobileMenu>

const { Primary: PrimaryNavigation } = composeStories(navigationStories)

export default {
  component: MobileMenu,
  title: 'Components/Layout/MobileMenu',
  tags: ['autodocs'],
  args: {
    children: <PrimaryNavigation />,
  },
} satisfies Meta<typeof MobileMenu>

export const Primary: Story = {}

export const Controlled: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <MobileMenu
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        {...args}
      />
    )
  },
}
