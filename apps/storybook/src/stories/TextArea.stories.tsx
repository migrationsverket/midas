import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextArea } from '@midas-ds/components'
import { RunOptions } from 'axe-core'

type Story = StoryObj<typeof TextArea>

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Label',
    description: 'Description',
    errorPosition: 'top',
  },
  argTypes: {
    size: { table: { disable: true } },
  },
} satisfies Meta<typeof TextArea>

export const Primary: Story = {}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel',
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    isRequired: true,
    errorMessage: 'Var god ange en text',
  },
  render: args => (
    <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const CustomValidation: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: 'Label',
    validate: (value: string) =>
      !/^\d+$/.test(value) ? 'Only numbers are allowed' : true,
  },
  render: args => (
    <form>
      <TextArea {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const MaxLength: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    maxLength: 50,
  },
}

export const Disabled = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
  parameters: {
    a11y: {
      context: 'body',
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

export const ShowCounter: Story = {
  args: {
    value: 'I love apples',
    showCounter: true,
  },
}

export const MaxLengthAndShowCounter: Story = {
  args: {
    showCounter: true,
    maxLength: 50,
  },
}
