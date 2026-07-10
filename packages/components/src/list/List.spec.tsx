import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './List.stories'
import { render } from '../../test-utils'

const { Default, ZebraStripes, SingleSelect, MultiSelect, WithDisabledItems } =
  composeStories(stories)

describe('given a Default List', () => {
  it('renders items as rows', async () => {
    await render(<Default />)
    await expect.element(page.getByRole('grid')).toBeInTheDocument()
    await expect.element(page.getByRole('row').nth(0)).toBeInTheDocument()
    await expect.element(page.getByRole('row').nth(5)).toBeInTheDocument()
  })

  it('has no items selected by default', async () => {
    await render(<Default />)
    const rows = await page.getByRole('row').all()
    for (const row of rows) {
      await expect.element(row).not.toHaveAttribute('aria-selected', 'true')
    }
  })
})

describe('given a Striped List', () => {
  it('has the zebra stripes data attribute', async () => {
    await render(<ZebraStripes />)
    await expect
      .element(page.getByRole('grid'))
      .toHaveAttribute('data-striped', 'true')
  })
})

describe('given a SingleSelect List', () => {
  it('selects an item on click', async () => {
    await render(<SingleSelect />)
    await userEvent.click(page.getByRole('row').nth(0))
    await expect
      .element(page.getByRole('row').nth(0))
      .toHaveAttribute('aria-selected', 'true')
  })

  it('deselects the previous item when selecting another', async () => {
    await render(<SingleSelect />)
    await userEvent.click(page.getByRole('row').nth(0))
    await userEvent.click(page.getByRole('row').nth(1))
    await expect
      .element(page.getByRole('row').nth(0))
      .toHaveAttribute('aria-selected', 'false')
    await expect
      .element(page.getByRole('row').nth(1))
      .toHaveAttribute('aria-selected', 'true')
  })

  it('shows a radio visual for each item', async () => {
    await render(<SingleSelect />)
    const grid = page.getByRole('grid').element()
    const radios = grid.querySelectorAll('[aria-hidden][class*="radioVisual"]')
    expect(radios.length).toBe(6)
  })
})

describe('given a MultiSelect List', () => {
  it('selects multiple items independently', async () => {
    await render(<MultiSelect />)
    await userEvent.click(page.getByRole('row').nth(0))
    await userEvent.click(page.getByRole('row').nth(2))
    await expect
      .element(page.getByRole('row').nth(0))
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(page.getByRole('row').nth(1))
      .toHaveAttribute('aria-selected', 'false')
    await expect
      .element(page.getByRole('row').nth(2))
      .toHaveAttribute('aria-selected', 'true')
  })

  it('shows a checkbox visual for each item', async () => {
    await render(<MultiSelect />)
    const grid = page.getByRole('grid').element()
    const checkboxes = grid.querySelectorAll('[aria-hidden][class*="checkVisual"]')
    expect(checkboxes.length).toBe(6)
  })

  it('toggles a selected item off on click', async () => {
    await render(<MultiSelect />)
    await userEvent.click(page.getByRole('row').nth(0))
    await expect
      .element(page.getByRole('row').nth(0))
      .toHaveAttribute('aria-selected', 'true')
    await userEvent.click(page.getByRole('row').nth(0))
    await expect
      .element(page.getByRole('row').nth(0))
      .toHaveAttribute('aria-selected', 'false')
  })
})

describe('given a List with disabled items', () => {
  it('marks disabled items with data-disabled', async () => {
    await render(<WithDisabledItems />)
    await expect
      .element(page.getByRole('row').nth(1))
      .toHaveAttribute('data-disabled', 'true')
    await expect
      .element(page.getByRole('row').nth(3))
      .toHaveAttribute('data-disabled', 'true')
  })

  it('does not select disabled items on click', async () => {
    await render(<WithDisabledItems />)
    await page.getByRole('row').nth(1).click({ force: true })
    await expect
      .element(page.getByRole('row').nth(1))
      .not.toHaveAttribute('aria-selected', 'true')
  })
})
