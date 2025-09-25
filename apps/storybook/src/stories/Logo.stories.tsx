import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from '@midas-ds/components'
import { expect } from 'storybook/test'
import styles from '@midas-ds/components/logo/Logo.module.css'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Components/Logo',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
    primary: {
      control: { type: 'boolean' },
    },
    padding: {
      control: { type: 'boolean' },
    },
  },
}
export default meta

type Story = StoryObj<typeof Logo>

export const Primary: Story = {
  args: {
    className: 'test-class',
    // @ts-expect-error dont recognize this property
    'data-testid': 'test',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        // @ts-expect-error dont recognize this property
        const logotype = canvas.getByTestId(args['data-testid'])
        expect(logotype).toHaveClass(styles.container, args.className as string)
      },
    )
  },
}

export const Monochrome: Story = {
  args: {
    primary: false,
  },
}
