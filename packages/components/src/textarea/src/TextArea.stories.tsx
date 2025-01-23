import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from 'packages/components/src/textarea/src/TextArea'

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

export const MaxCharacters = {
  args: {
    ...Primary.args,
    maxCharacters: 50,
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
}
