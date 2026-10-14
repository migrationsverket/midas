import type { Meta, StoryObj } from '@storybook/react-vite'
import { BasicTable } from './BasicTable'

export default {
  title: 'table-styles/BasicTable',
  component: BasicTable,
} satisfies Meta<typeof BasicTable>

type Story = StoryObj<typeof BasicTable>

export const Default: Story = {}
