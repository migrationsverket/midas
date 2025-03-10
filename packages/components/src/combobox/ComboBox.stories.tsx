import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem } from './ComboBox'
import { generateMockOptions } from './utils'
import { Item } from './types'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './ComboBox.module.css'

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    description: 'Beskrivning',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  parameters: {},
}

export default meta

type Story = StoryObj<typeof ComboBox<Item>>

const options = generateMockOptions(30)

export const Default: Story = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
  },
  render: args => (
    <ComboBox
      data-testid='test'
      items={options}
      {...args}
    >
      {(item: Item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
    </ComboBox>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        const comboBox = canvas.getByTestId('test')
        expect(comboBox).toHaveClass(styles.combobox, 'test')
      },
    )
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: args => (
    <ComboBox {...args}>
      <ComboBoxItem>Apple</ComboBoxItem>
      <ComboBoxItem>Lemon</ComboBoxItem>
    </ComboBox>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: args => (
    <ComboBox {...args}>
      <ComboBoxItem>Hej</ComboBoxItem>
    </ComboBox>
  ),
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

export const Required: Story = {
  args: {
    'aria-label': 'test',
    isRequired: true,
  },
  render: args => (
    <form>
      <ComboBox {...args}>
        <ComboBoxItem>Hej</ComboBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args }) => {
    await step(
      'it should be (aria) invalid and show a validation error message if the user submitted without selecting anything',
      async () => {
        const comboBox = canvas.getByLabelText(args['aria-label'] as string)
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(comboBox).toBeInvalid()

        // Error message depends on the browser language
        expect(canvas.getByTestId('fieldError')).toBeInTheDocument()
      },
    )
  },
}

export const CustomErrorMessage: Story = {
  args: {
    'aria-label': 'test',
    isRequired: true,
    errorMessage: 'Custom error message',
  },
  render: args => (
    <form>
      <ComboBox {...args}>
        <ComboBoxItem>Hej</ComboBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvas, step, args }) => {
    await step(
      'it should be (aria) invalid and show a custom error message if the user submitted without selecting anything',
      async () => {
        const comboBox = canvas.getByLabelText(args['aria-label'] as string)
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(comboBox).toBeInvalid()
        expect(
          canvas.getByText(args.errorMessage as string),
        ).toBeInTheDocument()
      },
    )
  },
}
