import type { Meta, StoryObj } from '@storybook/react'
import { ColorSchemeSwitch } from './ColorSchemeSwitch'
import { expect, userEvent } from '@storybook/test'

const meta: Meta<typeof ColorSchemeSwitch> = {
  component: ColorSchemeSwitch,
  title: 'Components/ColorSchemeSwitch',
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof ColorSchemeSwitch>

export const Example: Story = {
  play: async ({ canvas, step }) => {
    await step(
      'It should be possible to tab to a button and select it',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[ArrowRight]')
        await userEvent.keyboard('[Space]')
        const lightModeButton = canvas.getByText('Ljust läge').parentElement
        expect(lightModeButton).toHaveAttribute('aria-checked', 'true')
      },
    )
    await step('color-scheme on body element should be light', async () => {
      const newColorScheme = document.body.style.colorScheme
      expect(newColorScheme).toBe('light')
    })
  },
}
