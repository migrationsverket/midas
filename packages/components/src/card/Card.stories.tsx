import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { within, expect, userEvent } from '@storybook/test'

const testImage = {
  source:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/640px-Pineapple_and_cross_section.jpg',
  description: 'Pineapple',
}

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
  args: {
    title: 'Welcome to card',
    content:
      "Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",
    image: testImage,
    background: false,
    link: {
      children: 'Läs mer om Card',
      href: '#',
    },
    headingTag: 'h2',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Example: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('It should be possible to focus the link', async () => {
      const link = canvas.getByText('Läs mer om Card')
      expect(link).not.toHaveFocus()

      // focus the link
      await userEvent.tab()

      expect(link).toHaveFocus()
    })
  },
}

export const WithBackground: Story = {
  args: {
    background: true,
  },
}
