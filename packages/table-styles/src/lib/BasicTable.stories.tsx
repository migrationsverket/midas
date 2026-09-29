import type { Meta, StoryObj } from '@storybook/react-vite'
import { BasicTable } from './BasicTable'

export default {
  title: 'Components/Table',
  component: BasicTable,
} satisfies Meta<typeof BasicTable>

type Story = StoryObj<typeof BasicTable>

export const Default: Story = {}
