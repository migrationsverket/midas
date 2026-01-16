import type { Meta, StoryObj } from '@storybook/react-vite'
import { options } from '@midas-ds/test-utils'
import { LegacySelect } from '.'

type Story = StoryObj<typeof LegacySelect>

export default {
  component: LegacySelect,
  title: 'Components/Select/Legacy',
  tags: ['autodocs'],
  args: {
    description: 'Description',
    isDisabled: false,
    isSelectableAll: false,
    label: 'Label',
    options: options,
    placeholder: 'Select an option',
    selectionMode: 'single',
    showTags: false,
    errorPosition: 'top',
    size: 'large',
  },
} satisfies Meta<typeof LegacySelect>

export const Primary: Story = {}
