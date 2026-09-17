import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dummy } from './Dummy'

export default {
  component: Dummy,
  title: 'Visual trial/Dummy',
  tags: ['!dev', '!autodocs'],
} satisfies Meta<typeof Dummy>

export const Primary: StoryObj<typeof Dummy> = {}
