import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
const testImage = {
  source:
    'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSRA1VvVWshDqdk-IbClyNwWoUAjMnFQ5KQLb8eH0hu4gCCvfvqMEcQqOF-CTro2maW',
  description: 'Lizard',
}

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Card>

export const Example: Story = {
  args: {
    title: 'Welcome to card',
    content:
      "Sometimes the default accessible name of an element is missing, or does not accurately describe its contents, and there is no content visible in the DOM that can be associated with the object to give it meaning. A common example is a button containing an SVG or icon font (which you shouldn't be using) without any text.",
    image: testImage,
    background: true,
    onPress: () => {
      alert('Klick')
    },
    headingTag: 'h2',
  },
}
