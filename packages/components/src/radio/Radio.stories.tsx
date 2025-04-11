import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, Radio } from './Radio'
import { expect, userEvent } from '@storybook/test'
import styles from './Radio.module.css'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
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
}
export default meta

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

export const Normal: Story = {
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    className: 'test-class',
  },
  play: async ({ canvas, step, args }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        const radioGroup = canvas.getByLabelText(args.label as string)
        expect(radioGroup).toHaveClass(
          styles.radioGroup,
          args.className as string,
        )
      },
    )
  },
}

export const Disabled: Story = {
  args: {
    children: items,
    isDisabled: true,
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
  tags: ['!dev'],
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
  play: async ({ canvas, step, args }) => {
    await step(
      'should show a validation error message if the user submitted without selecting anything',
      async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByRole('radiogroup')).toBeInvalid()
        expect(
          canvas.getByText(args.errorMessage as string),
        ).toBeInTheDocument()
      },
    )
  },
}

export const CustomValidation: Story = {
  tags: ['!dev'],
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
  play: async ({ canvas, step }) => {
    await step(
      'it should show the custom error message if the constraints was not satisfied',
      async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(canvas.getByText('Inga äpplen är tillåtna')).toBeInTheDocument()
      },
    )
  },
}

export const Horizontal: Story = {
  args: {
    ...Normal.args,
    orientation: 'horizontal',
  },
}
