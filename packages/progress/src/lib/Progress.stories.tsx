
import { Meta, StoryObj} from '@storybook/react';
import { Progress, Form } from './Progress';
import { Checkbox} from '@midas-ds/checkbox'; 
import { action } from '@storybook/addon-actions';
import './Progress.module.css';
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
        { title: 'Step 3', onValidation: false },
        { title: 'Step 4', onValidation: false },
      ], // Provide default steps for the Progress component
    },
    render: args => (
      <Progress {...args}>
          <Form
        onValidationChange={action('Step 1 Validation Changed')}
        updateFormState={action('Step 1 State Updated')} // Provide the required prop
      >
        <Checkbox>Agree to terms</Checkbox>
      </Form>
      <Form
        onValidationChange={action('Step 1 Validation Changed')}
        updateFormState={action('Step 1 State Updated')} // Provide the required prop
      >
        <Checkbox>Agree to terms</Checkbox>
      </Form>
      </Progress>
    ),
  };
