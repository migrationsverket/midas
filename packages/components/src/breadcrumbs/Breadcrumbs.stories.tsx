import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'
import { expect, within } from '@storybook/test'

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Primary: Story = {
  args: {
    items: [
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    step('it should should render successfully', async () => {
      const breadcrumbs = canvas.getByRole('list')
      expect(breadcrumbs).toBeTruthy()
    })
  },
}
