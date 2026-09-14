import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './ComboBox.stories'
import styles from './ComboBox.module.css'
import { render } from '../../test-utils'
import { ComboBox } from './ComboBox'
import { ListBoxItem } from '../list-box'

const {
  Primary,
  Required,
  Sectioned,
  NotVirtualized,
  WithHelpPopover,
  MultipleDefaultValue,
  MultipleRequired,
} = composeStories(stories)

describe('given a primary ComboBox', async () => {
  it('it should preserve its classNames when being passed new ones', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.combobox}`) as HTMLElement)
      .toHaveClass(styles.combobox, 'test')
  })

  it('should not cover the toggle button when the input value is very long', async () => {
    const { getByRole } = await render(
      <ComboBox
        label='Test'
        defaultInputValue='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
      >
        <ListBoxItem id='a'>A</ListBoxItem>
      </ComboBox>,
    )

    const inputEl = getByRole('combobox').element()
    const buttonEl = getByRole('button').element()
    const inputRect = inputEl.getBoundingClientRect()
    const buttonRect = buttonEl.getBoundingClientRect()
    const paddingRight = parseFloat(
      window.getComputedStyle(inputEl).paddingRight,
    )

    // Small tolerance for sub-pixel layout rounding, which varies slightly
    // between browser engine versions. Confirmed visually in Storybook that
    // there is no actual text/button overlap at this margin.
    const RENDERING_TOLERANCE_PX = 4
    expect(inputRect.right - paddingRight).toBeLessThanOrEqual(
      buttonRect.left + RENDERING_TOLERANCE_PX,
    )
  })

  it('should select the text when clicking in a combobox with a selected value (DS1253)', async () => {
    const { getByRole } = await render(<Primary />)

    const comboBox = getByRole('combobox')
    await userEvent.click(comboBox)
    await userEvent.keyboard('Apple')
    await userEvent.click(comboBox)

    expect(window?.getSelection()?.toString()).toBe('Apple')
  })
})

describe('given a Required ComboBox', async () => {
  it('should be (aria) invalid and show a validation error message if the user submitted without selecting anything', async () => {
    await render(<Required errorMessage='Custom error message' />)
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(page.getByRole('combobox')).toBeInvalid()
    await expect
      .element(page.getByText('Custom error message'))
      .toBeInTheDocument()
  })
})

describe('given a Sectioned ComboBox', async () => {
  it('The label should preserve its id when opening and closing the list box (DS1207)', async () => {
    const { getByRole } = await render(<Sectioned />)

    await expect.element(getByRole('combobox')).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Escape]')

    await expect.element(page.getByRole('combobox')).toBeInTheDocument()
  })
})

describe('given an async ComboBox with allowsEmptyCollection', async () => {
  it('should not show "No results found" when the consumer overrides renderEmptyState via listBoxProps', async () => {
    await render(
      <ComboBox
        label='Test'
        allowsEmptyCollection
        listBoxProps={{
          renderEmptyState: () => <span>Fetching data...</span>,
        }}
      >
        {[]}
      </ComboBox>,
    )

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByText('Fetching data...')).toBeInTheDocument()
    await expect
      .element(page.getByText('No results found'))
      .not.toBeInTheDocument()
  })

  it('should show "No results found" by default when there are no items', async () => {
    await render(
      <ComboBox
        label='Test'
        allowsEmptyCollection
      >
        {[]}
      </ComboBox>,
    )

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByText('No results found')).toBeInTheDocument()
  })
})

describe('given a ComboBox with listBoxProps={{ virtualized: false }}', async () => {
  it('should render items in every section', async () => {
    const { getByRole } = await render(<NotVirtualized />)

    await userEvent.click(getByRole('button'))

    const listbox = page.getByRole('listbox')
    await expect.element(listbox.getByText('Ananas')).toBeVisible()
    await expect.element(listbox.getByText('Kokosnöt')).toBeVisible()
    await expect.element(listbox.getByText('Päron')).toBeVisible()
  })
})

describe('given a ComboBox with a default multi-value', async () => {
  it('should render a removable chip for each pre-selected value', async () => {
    await render(<MultipleDefaultValue />)

    const tagGrid = page.getByRole('grid')
    await expect.element(tagGrid).toBeVisible()
    await expect
      .element(tagGrid.getByText('Ananas', { exact: true }))
      .toBeVisible()
    await expect
      .element(tagGrid.getByText('Kiwi', { exact: true }))
      .toBeVisible()
  })

  it('should add chips and clear the input after picking another item', async () => {
    const { getByRole } = await render(<MultipleDefaultValue />)

    const comboBox = getByRole('combobox')
    await comboBox.click()
    await userEvent.keyboard('Apelsin')

    const option = getByRole('option', { name: 'Apelsin' })
    await expect.element(option).toBeVisible()
    await option.click()

    const tagGrid = getByRole('grid')
    await expect.element(comboBox).toHaveValue('')
    await expect
      .element(tagGrid.getByText('Apelsin', { exact: true }))
      .toBeVisible()
    await expect
      .element(tagGrid.getByText('Ananas', { exact: true }))
      .toBeVisible()
  })

  it('should remove a chip and update the selection when its dismiss button is clicked', async () => {
    await render(<MultipleDefaultValue />)

    const tagGrid = page.getByRole('grid')
    await userEvent.click(tagGrid.getByRole('button').first())

    await expect
      .element(tagGrid.getByText('Ananas', { exact: true }))
      .not.toBeInTheDocument()
    await expect
      .element(tagGrid.getByText('Kiwi', { exact: true }))
      .toBeVisible()
  })

  it('should remove the last chip when pressing Backspace in an empty input', async () => {
    const { getByRole } = await render(<MultipleDefaultValue />)

    const comboBox = getByRole('combobox')
    await userEvent.click(comboBox)
    await userEvent.keyboard('[Backspace]')

    const tagGrid = page.getByRole('grid')
    await expect
      .element(tagGrid.getByText('Kiwi', { exact: true }))
      .not.toBeInTheDocument()
    await expect
      .element(tagGrid.getByText('Ananas', { exact: true }))
      .toBeVisible()
  })
})

describe('given a required multiple ComboBox', async () => {
  it('should show invalid state when all chips are removed via dismiss buttons', async () => {
    const { getByRole } = await render(<MultipleRequired />)

    const tagGrid = page.getByRole('grid')
    await expect.element(tagGrid).toBeVisible()

    const count = tagGrid.getByRole('button').elements().length

    for (let i = 0; i < count; i++) {
      await userEvent.click(tagGrid.getByRole('button').first())
    }

    await expect.element(getByRole('combobox')).toBeInvalid()
  })
})

describe('given a ComboBox with a help popover', async () => {
  it('should be possible to focus the popover trigger using the keyboard', async () => {
    const { getByRole } = await render(<WithHelpPopover />)
    await userEvent.tab()
    await expect.element(getByRole('button').first()).toHaveFocus()
  })
})
