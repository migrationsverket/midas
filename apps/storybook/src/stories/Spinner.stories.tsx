import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Spinner } from '@midas-ds/components'
import { expect } from 'storybook/test'
import styles from '@midas-ds/components/spinner/Spinner.module.css'
import { tokenDictionary } from '@midas-ds/theme'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Components/Spinner',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    small: false,
    // isOnColor: false,
    className: 'test-class',
  },
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  play: async ({ canvas, step, args }) => {
    await step('it should accept custom classNames', async () => {
      await expect(canvas.getByRole('status')).toHaveClass(
        styles.container,
        args.className as string,
      )
    })
  },
}

export const Small: Story = {
  args: { small: true },
}

export const InButton: Story = {
  args: { small: true },
  render: args => (
    <Button>
      <Spinner {...args} />
      Laddar
    </Button>
  ),
}

export const customColor: Story = {
  args: { color: tokenDictionary.brand.primary.$value },
}

export const InButtonAnotherColor: Story = {
  args: { small: true},
  render: args => (
    <Button variant={'icon'}>
      <Spinner {...args} />
      Laddar
    </Button>
  ),
}
