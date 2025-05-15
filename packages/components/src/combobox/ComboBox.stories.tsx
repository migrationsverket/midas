import type { Meta, StoryObj } from '@storybook/react'
import { ComboBox, ComboBoxItem, ComboBoxSelection } from './ComboBox'
import { generateMockOptions, optionsWithSections } from './utils'
import { Item, Section } from './types'
import { RunOptions } from 'axe-core'
import { expect, userEvent } from '@storybook/test'
import styles from './ComboBox.module.css'
import { MidasThemeProvider } from '../theme'

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
  parameters: {},
  render: args => (
    <ComboBox {...args}>
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
    await step('it should be large per default', async () => {
      await expect(canvas.getByRole('combobox')).toHaveStyle({
        height: '48px',
      })
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: '48px',
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

export const MediumSize: Story = {
  args: {
    size: 'medium',
  },
  play: async ({ canvas, step }) => {
    await step('it should be medium sized', async () => {
      await expect(canvas.getByRole('combobox')).toHaveStyle({
        height: '40px',
      })
      await expect(canvas.getByRole('button')).toHaveStyle({
        height: '40px',
      })
    })
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
  tags: ['!dev'],
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
  tags: ['!dev'],
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

export const Sectioned: Story = {
  args: {
    ...Default.args,
    items: optionsWithSections,
  },
  render: args => (
    <ComboBox {...args}>
      {(section: Section<Item>) => <ComboBoxSelection {...section} />}
    </ComboBox>
  ),
}

export const ThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    ...Default.args,
  },
  render: args => (
    <MidasThemeProvider value={{ size: 'medium' }}>
      <ComboBox
        data-testid='test'
        items={options}
        {...args}
      >
        {(item: Item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
      </ComboBox>
    </MidasThemeProvider>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should be medium size, as defined by the context',
      async () => {
        await expect(canvas.getByRole('combobox')).toHaveStyle({
          height: '40px',
        })
        await expect(canvas.getByRole('button')).toHaveStyle({
          height: '40px',
        })
      },
    )
  },
}

export const OverrideThemeProvider: Story = {
  tags: ['!dev', '!autodocs'],
  args: {
    ...Default.args,
    size: 'large',
  },
  render: args => (
    <MidasThemeProvider value={{ size: 'medium' }}>
      <ComboBox {...args}>
        {(section: Section<Item>) => <ComboBoxSelection {...section} />}
      </ComboBox>
    </MidasThemeProvider>
  ),
  play: async ({ canvas, step }) => {
    await step(
      'it should be large and override the context, as defined by the component',
      async () => {
        await expect(canvas.getByRole('combobox')).toHaveStyle({
          height: '48px',
        })
        await expect(canvas.getByRole('button')).toHaveStyle({
          height: '48px',
        })
      },
    )
  },
}
