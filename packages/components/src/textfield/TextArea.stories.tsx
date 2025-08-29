import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextArea } from './TextArea'
import { RunOptions } from 'axe-core'
import { expect, fn, userEvent } from 'storybook/test'
import styles from './TextField.module.css'

const stringOfLength = (length: number) => new Array(length + 1).join('x')

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
} as Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    className: 'test-class',
  },
  play: async ({ canvas, step }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        expect(canvas.getByRole('textbox')).toHaveClass(
          styles.textArea,
          'test-class',
        )
      },
    )
  },
}

export const IsNotResizable = {
  args: {
    isResizable: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<TextArea 
                  label="Label" 
                  description="Description" 
                  isResizable={false} 
                />`,
      },
    },
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Något gick fel',
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs'],
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
  play: async ({ canvas, step, args: { errorMessage } }) => {
    await step(
      'it should give a validation error if the user entered no text',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText(errorMessage as string)).toBeInTheDocument()
      },
    )
  },
}

export const CustomValidation: Story = {
  tags: ['!dev', '!autodocs'],
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
  play: async ({ canvas, step }) => {
    await step(
      'it should give a validation error if the user entered an unpermitted text',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('abc')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText('Only numbers are allowed')).toBeInTheDocument()
      },
    )
  },
}

export const MaxLength: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    maxLength: 50,
  },
  play: async ({ canvas, step, args }) => {
    const maxLength = args.maxLength as number
    await step(
      'it should not be possible to exceed the maxLength property',
      async () => {
        const randomString = stringOfLength(maxLength + 1)
        await userEvent.tab()
        await userEvent.keyboard(randomString)
        expect(
          canvas.getByRole<HTMLTextAreaElement>('textbox').value.length,
        ).toBe(maxLength)
      },
    )
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
  play: async ({ canvas, step, args: { value } }) => {
    await step(
      'it should show the correct count for its initial value',
      async () => {
        expect(canvas.getByText((value as string).length)).toBeInTheDocument()
      },
    )
  },
}

export const MaxLengthAndShowCounter: Story = {
  args: {
    showCounter: true,
    maxLength: 50,
  },
}

export const ShowCounterWithDefaultValue: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    defaultValue: 'HEJ',
    showCounter: true,
  },
  play: async ({ canvas, step, args: { defaultValue } }) => {
    await step(
      'it should show the correct count for its initial defaultValue',
      async () => {
        expect(
          canvas.getByText((defaultValue as string).length),
        ).toBeInTheDocument()
      },
    )
  },
}

export const DS1326: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    onBlur: fn(),
    onFocus: fn(),
  },
  play: async ({ args, step }) => {
    await step('focus textarea', async () => {
      await userEvent.tab()
    })

    await step('it should call onFocus once', async () => {
      await expect(args.onFocus).toHaveBeenCalledOnce()
    })

    await step('blur textarea', async () => {
      await userEvent.tab()
    })

    await step('it should call onBlur once', async () => {
      await expect(args.onBlur).toHaveBeenCalledOnce()
    })
  },
}
