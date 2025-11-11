import type { Meta, StoryObj } from '@storybook/react-vite'
import { RunOptions } from 'axe-core'
import { TextField } from '@midas-ds/components'

type Story = StoryObj<typeof TextField>

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    type: {
      options: ['password', 'text', 'email'],
      control: { type: 'select' },
    },
  },
  args: {
    label: 'Label',
    description: 'Description',
    errorPosition: 'top',
    size: 'large',
  },
} satisfies Meta<typeof TextField>

export const Primary: Story = {
  args: {
    defaultValue: 'Text value'
  }
}

export const Password: Story = {
  args: {
    type: 'password',
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Något blev fel',
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    isRequired: true,
  },
  render: args => (
    <form>
      <TextField {...args} />
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
      <TextField
        {...args}
        className={({ isInvalid }) => (isInvalid ? 'invalid' : 'valid')}
      />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const Number: Story = {
  args: {
    type: 'number',
  },
}

export const Disabled: Story = {
  args: {
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

export const ReadOnly: Story = {
  args: {
    isReadOnly: true,
    value: 'User input',
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

export const DS1243: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => (
    <div
      style={{ height: 500 }}
      data-testid='wrapper'
    >
      <TextField
        {...args}
        label={undefined}
        description={undefined}
        aria-label='test'
      />
      <div style={{ height: 100 }}>Dummy content</div>
    </div>
  ),
}

export const WithHelpPopover: Story = {
  args: {
    ...Primary.args,
    popover: {
      children:
        'An assistive text that helps the user understand the field better.',
      'aria-label': 'Mer information',
    },
  },
}
