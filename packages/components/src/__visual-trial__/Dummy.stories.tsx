import type { Meta, StoryObj } from '@storybook/react-vite'
import { VisualTrialDummy } from './Dummy'

const meta: Meta<typeof VisualTrialDummy> = {
  component: VisualTrialDummy,
  title: 'VisualTrial/Dummy',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
