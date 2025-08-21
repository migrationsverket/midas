import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem, ComboBoxSection } from './ComboBox'
import { generateMockOptions, optionsWithSections } from './utils'
import { RunOptions } from 'axe-core'
import { expect, userEvent, within } from '@storybook/test'
import styles from './ComboBox.module.css'

import React from 'react'
import type { ListBoxSectionElement } from '../list-box'

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
    size: 'large',
  },
  argTypes: {
    placeholder: { control: 'text' },
  },
  render: args => (
    <ComboBox {...args}>
      <ComboBoxItem>Apple</ComboBoxItem>
      <ComboBoxItem>Lemon</ComboBoxItem>
    </ComboBox>
  ),
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
  render: args => (
    <ComboBox
      data-testid='test'
      items={options}
      {...args}
    >
      {item => <ComboBoxItem>{item.name}</ComboBoxItem>}
    </ComboBox>
  ),
  play: async ({ canvas, step, args }) => {
    await step('it should change size according to size prop', async () => {
      await expect(canvas.getByRole('combobox')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px',
      })
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: args.size === 'large' ? '48px' : '40px',
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

export const DS1253: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  play: async ({
    canvas,
    canvasElement: {
      ownerDocument: { body },
    },
    step,
  }) => {
    await step(
      'it should select the text when clicking in a combobox with a selected value',
      async () => {
        const comboBox = canvas.getByRole('combobox')
        await userEvent.click(comboBox)
        await userEvent.keyboard('Apple')
        await userEvent.click(within(body).getByText('Apple'))
        await userEvent.click(comboBox)
        await expect(window?.getSelection()?.toString()).toBe('Apple')
      },
    )
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
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
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

export const DS1207: StoryObj<typeof ComboBox<ListBoxSectionElement>> = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
    items: optionsWithSections,
  },
  render: args => (
    <ComboBox {...args}>
      {section => (
        <ComboBoxSection
          {...section}
          id={section.name}
        />
      )}
    </ComboBox>
  ),
  play: async ({ canvas, step, args }) => {
    await step(
      'The label should preserve its id when opening and closing the list box',
      async () => {
        await expect(
          canvas.getByRole('combobox', {
            name: args.label as string,
          }),
        ).toBeInTheDocument()

        await userEvent.tab()
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[Escape]')

        await expect(
          canvas.getByRole('combobox', {
            name: args.label as string,
          }),
        ).toBeInTheDocument()
      },
    )
  },
}

// The generic type is infered from the items prop in real life
export const Sectioned: StoryObj<typeof ComboBox<ListBoxSectionElement>> = {
  args: {
    placeholder: 'Välj eller sök frukt',
    label: 'Välj en frukt',
    description: 'Description',
    className: 'test',
    items: optionsWithSections,
  },
  render: args => (
    <ComboBox {...args}>
      {section => (
        <ComboBoxSection
          {...section}
          id={section.name}
        />
      )}
    </ComboBox>
  ),
}

export const PerformanceTest: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: args => {
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
        <ComboBox {...args}>
          {items.map(({ name, id }) => (
            <ComboBoxItem key={id}>{name}</ComboBoxItem>
          ))}
        </ComboBox>
      </>
    )
  },
}
