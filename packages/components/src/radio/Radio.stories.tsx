import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from './Radio'

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: {
    Radio,
  },
  tags: ['autodocs'],
  args: {
    label: 'Välj frukt',
    description: 'Valfri beskrivning',
    errorMessage: 'Du måste välja en frukt?',
    errorPosition: 'top',
  },
  argTypes: {
    children: { table: { disable: true } },
    label: {
      type: 'string',
      control: { type: 'text' },
    },
    isDisabled: {
      type: 'boolean',
      options: [false, true],
      control: { type: 'radio' },
    },
    isInvalid: {
      type: 'boolean',
      options: [false, true],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof RadioGroup>

const fruits = ['Äpple', 'Banan', 'Kiwi', 'Apelsin']
const items = fruits.map(fruit => (
  <Radio
    key={fruit}
    value={fruit}
    id={fruit.toLowerCase()}
  >
    {fruit}
  </Radio>
))

const radioItemsOneDisabled = [
  <Radio
    key='radio-banan'
    value='banan'
  >
    Banan
  </Radio>,
  <Radio
    key='radio-apelsin'
    value='apelsin'
    isDisabled={true}
  >
    Apelsin
  </Radio>,
  <Radio
    key='radio-kiwi'
    value='kiwi'
  >
    Kiwi
  </Radio>,
]

export const Primary: Story = {
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => (
      <Radio
        key={fruit}
        value={fruit}
        id={fruit.toLowerCase()}
        className='test-radio-class'
      >
        {fruit}
      </Radio>
    )),
    className: 'test-class',
  },
}

export const Disabled: Story = {
  args: {
    children: items,
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi',
  },
}

export const OneItemDisabled: Story = {
  args: {
    children: radioItemsOneDisabled,
  },
}

export const Invalid: Story = {
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!',
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true,
  },
  render: args => (
    <form>
      <RadioGroup {...args} />
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
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value =>
      value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true,
  },
  render: args => (
    <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
  ),
}

export const Horizontal: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <Radio
          key='radio-apple'
          value='apple'
        >
          Äpple
        </Radio>
        <Radio
          key='radio-banan'
          value='banan'
        >
          Banan
        </Radio>
      </>
    ),
    orientation: 'horizontal',
  },
}
