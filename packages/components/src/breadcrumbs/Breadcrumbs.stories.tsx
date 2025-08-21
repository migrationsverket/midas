import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from './Breadcrumbs'
import { expect } from 'storybook/test'
import styles from './Breadcrumbs.module.css'

type Story = StoryObj<typeof Breadcrumbs>

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
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
} satisfies Meta<typeof Breadcrumbs>

export const Primary: Story = {}

export const CustomClassName: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    className: 'test-class',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classnames when given new ones',
      async () => {
        await expect(canvas.getByRole('list')).toHaveClass(
          styles.container,
          args.className as string,
        )
      },
    )
  },
}
