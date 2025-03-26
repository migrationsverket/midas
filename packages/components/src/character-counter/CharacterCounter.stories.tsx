import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { TextField } from '../textfield'
import { Label } from '../label'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Input } from '../input'
import { CharacterCounter } from './CharacterCounter'

const testID = 'test'

export default {
  render: args => (
    <TextField {...args}>
      <Label variant='label-02'>Label</Label>
      <Text slot='description'>Description</Text>
      <CharacterCounter />
      <FieldError />
      <Input data-testid={testID} />
    </TextField>
  ),
  title: 'Components/CharacterCounter',
  tags: ['autodocs'],
} as Meta<typeof TextField>

type Story = StoryObj<typeof TextField>

export const Primary: Story = {
  args: {
    value: 'I love apples',
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

export const MaxLength: Story = {
  args: {
    ...Primary.args,
    maxLength: 15,
  },
}

export const ShowCounterWithDefaultValue: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    defaultValue: 'HEJ',
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
