import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem, ComboBoxSelection } from './ComboBox'
import { generateMockOptions, optionsWithSections } from './utils'
import { Item, Section } from './types'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './ComboBox.module.css'
import { sizeModes } from '../../.storybook/modes'
import React from 'react'

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  title: 'Components/ComboBox',
  tags: ['autodocs'],
  args: {
    label: 'Etikett',
    placeholder: 'Placeholder',
    description: 'Beskrivning',
    errorMessage: 'Fel!',
    errorPosition: 'top',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  parameters: {
    chromatic: {
      modes: sizeModes,
    },
  },
  render: (args, { globals: { size } }) => (
    <ComboBox
      {...args}
      size={size}
    >
      <ComboBoxItem>Apple</ComboBoxItem>
      <ComboBoxItem>Lemon</ComboBoxItem>
    </ComboBox>
  ),
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
  render: (args, { globals: { size } }) => (
    <ComboBox
      data-testid='test'
      items={options}
      {...args}
      size={size}
    >
      {(item: Item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
    </ComboBox>
  ),
  play: async ({ canvas, step, globals: { size } }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('combobox')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: size === 'large' ? '48px' : '40px',
      })
    })

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
  },
}

export const MediumSizeInvalid: Story = {
  args: {
    size: 'medium',
    isInvalid: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
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
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (args, { globals: { size } }) => (
    <form>
      <ComboBox
        {...args}
        size={size}
      >
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
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (args, { globals: { size } }) => (
    <form>
      <ComboBox
        {...args}
        size={size}
      >
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

export const Sectioned: Story = {
  args: {
    ...Default.args,
    items: optionsWithSections,
  },
  render: (args, { globals: { size } }) => (
    <ComboBox
      {...args}
      size={size}
    >
      {(section: Section<Item>) => <ComboBoxSelection {...section} />}
    </ComboBox>
  ),
}

export const PerformanceTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: (args, { globals: { size } }) => {
    const [numberOfItems, setNumberOfItems] = React.useState(25)

    const items = [...Array(numberOfItems).keys()].map(n => ({
      name: n.toString(),
      id: n,
    }))

    return (
      <>
        <label>
          Adjust load
          <input
            type='number'
            step={25}
            value={numberOfItems}
            onChange={e => setNumberOfItems(parseInt(e.target.value))}
          />
        </label>
        <ComboBox
          {...args}
          size={size}
        >
          {items.map(({ name, id }) => (
            <ComboBoxItem key={id}>{name}</ComboBoxItem>
          ))}
        </ComboBox>
      </>
    )
  },
}
