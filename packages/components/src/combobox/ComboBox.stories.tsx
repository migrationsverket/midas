import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem } from './ComboBox'
import { generateMockOptions } from './utils'
import { Item } from './types'
import { RunOptions } from 'axe-core'
import { expect, userEvent, within } from '@storybook/test'

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

type Story = StoryObj<typeof ComboBox>

const options = generateMockOptions(30)

export const Default: Story = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
  },
  render: (args: any) => (
    <ComboBox
      data-testid='test'
      items={options}
      {...args}
    >
      {(item: Item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
    </ComboBox>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    step(
      'it should preserve its classNames when being passed new ones',
      async () => {
        const comboBox = canvas.getByTestId('test')
        expect(comboBox).toHaveClass(/combobox/, 'test')
      },
    )
  },
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Fel!',
  },
  render: (args: any) => (
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
  render: (args: any) => (
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
  render: (args: any) => (
    <form>
      <ComboBox {...args}>
        <ComboBoxItem>Hej</ComboBoxItem>
      </ComboBox>
      <button type='submit'>Submit</button>
    </form>
  ),
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    step(
      'it should be (aria) invalid and show a validation error message if the user submitted without selecting anything',
      async () => {
        const comboBox = canvas.getByLabelText(args['aria-label'] as string)
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        expect(comboBox).toBeInvalid()
        expect(canvas.getByText(/Fyll i det här fältet/)).toBeInTheDocument()
      },
    )
  },
}
