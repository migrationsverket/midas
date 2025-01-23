import { Meta, StoryObj } from '@storybook/react'
import { Progress, Form } from './Progress'
import { Checkbox } from '@midas-ds/checkbox'
import { action } from '@storybook/addon-actions'
import './Progress.module.css'

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'Components/Progress',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    steps: [
      { title: 'Step 1', onValidation: false },
      { title: 'Step 2', onValidation: false },
      { title: 'Step 3', onValidation: false }
    ] // Provide default steps for the Progress component
  },
  render: args => (
    <Progress {...args}>
      <Form
        isChecked={false} // Initial state of checkbox
        isInvalid={true} // Invalid state by default
        onValidationChange={action('Step 1 Validation Changed')}
        updateFormState={action('Step 1 State Updated')}
      >
        <Checkbox>Agree to terms</Checkbox>
      </Form>

      <Form
        isChecked={false}
        isInvalid={true}
        onValidationChange={action('Step 2 Validation Changed')}
        updateFormState={action('Step 2 State Updated')}
      >
        <Checkbox>Agree to terms</Checkbox>
      </Form>

      <Form
        isChecked={false}
        isInvalid={true}
        onValidationChange={action('Step 3 Validation Changed')}
        updateFormState={action('Step 3 State Updated')}
      >
        <Checkbox>Agree to terms</Checkbox>
      </Form>
    </Progress>
  )
}
