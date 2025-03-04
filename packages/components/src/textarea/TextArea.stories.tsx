import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'
import { RunOptions } from 'axe-core'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Components/TextArea',
  tags: ['autodocs'],
  argTypes: {
    label: {
      type: 'string',
      description: 'Etikett',
    },
    description: {
      type: 'string',
    },
  },
}
export default meta
type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    label: 'Label',
    description: 'Description',
  },
}

export const NotValid = {
  args: {
    ...Primary.args,
    isInvalid: true,
    errorMessage: 'Error',
  },
}

export const MaxLength = {
  args: {
    ...Primary.args,
    maxLength: 50,
  },
}

export const ShowCounter = {
  args: {
    ...Primary.args,
    showCounter: true,
  },
}

export const Disabled = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [
          {
            // Dont check for color contrast on disabled elements
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {
        rules: {
          'color-contrast': { enabled: false },
        },
      } satisfies RunOptions,
    },
  },
}
