import type { Meta, StoryObj } from '@storybook/react-vite'
import { ColorSchemeSwitch } from '@midas-ds/components'
import { expect, userEvent } from 'storybook/test'

const meta: Meta<typeof ColorSchemeSwitch> = {
  component: ColorSchemeSwitch,
  title: 'Components/ColorSchemeSwitch',
  tags: ['autodocs'],
  args: {
    className: 'test-class',
  },
}

export default meta
type Story = StoryObj<typeof ColorSchemeSwitch>

export const Example: Story = {
  play: async ({ canvas, step, args }) => {
    await step(
      'It should be possible to tab to a button and select it',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[ArrowRight]')
        await userEvent.keyboard('[Space]')
        const lightModeButton = canvas.getByText('Ljust läge').parentElement
        await expect(lightModeButton).toHaveAttribute('aria-checked', 'true')
      },
    )

    await step('color-scheme on body element should be light', async () => {
      const newColorScheme = document.body.style.colorScheme
      await expect(newColorScheme).toBe('light')
    })

    await step('it should accept a custom className', async () => {
      await expect(canvas.getByRole('radiogroup')).toHaveClass(
        args.className as string,
      )
    })
  },
}
