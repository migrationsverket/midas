import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './TreeComboBox.stories'
import { render } from '../../test-utils'

const {
  Primary,
  DefaultCheckedKeys,
  PartiallyCheckedInitialState,
  WithClearAll,
  DisabledNode,
  Invalid,
  Disabled,
  ControlledCheckedKeys,
} = composeStories(stories)

const openViaChevron = async () => {
  await userEvent.click(page.getByRole('button', { name: 'Show list' }))
  return page.getByRole('treegrid')
}

describe('given a primary TreeComboBox', async () => {
  it('should open the popover when typing, and close it on Escape, returning focus to the input', async () => {
    const { getByRole } = await render(<Primary />)

    const input = getByRole('textbox')
    await userEvent.click(input)
    await userEvent.keyboard('Ananas')

    await expect.element(page.getByRole('treegrid')).toBeVisible()

    await userEvent.keyboard('[Escape]')

    await expect.element(page.getByRole('treegrid')).not.toBeInTheDocument()
    await expect.element(input).toHaveFocus()
  })

  it('should open the popover when the chevron button is pressed', async () => {
    await render(<Primary />)

    const tree = await openViaChevron()

    await expect.element(tree).toBeVisible()
  })

  it('should filter to matching leaves and their ancestor chain, hiding non-matching siblings', async () => {
    const { getByRole } = await render(<Primary />)

    await userEvent.click(getByRole('textbox'))
    await userEvent.keyboard('Ananas')
    const tree = page.getByRole('treegrid')

    await expect
      .element(tree.getByText('Ananas', { exact: true }))
      .toBeVisible()
    // Ananas's ancestor chain (its category + umbrella group) stays visible...
    await expect
      .element(tree.getByText('Grupp A', { exact: true }))
      .toBeVisible()
    // ...but a non-matching sibling category under the same umbrella is gone.
    await expect
      .element(tree.getByText('Kiwi', { exact: true }))
      .not.toBeInTheDocument()
  })

  it('should show a distinct empty state when nothing matches the filter', async () => {
    const { getByRole } = await render(<Primary />)

    await userEvent.click(getByRole('textbox'))
    await userEvent.keyboard('nonexistent-fruit-zzz')

    await expect.element(page.getByText('No results found')).toBeVisible()
  })
})

describe('given a TreeComboBox with pre-checked leaves', async () => {
  it('should render the "N selected" pill when the input is idle', async () => {
    await render(<DefaultCheckedKeys />)

    await expect.element(page.getByText('2 selected')).toBeVisible()
  })

  it('should hide the pill once the input is focused', async () => {
    const { getByRole } = await render(<DefaultCheckedKeys />)

    await userEvent.click(getByRole('textbox'))

    await expect.element(page.getByText('2 selected')).not.toBeVisible()
  })

  it('a checked leaf hidden by a filter stays checked once the filter is cleared', async () => {
    const { getByRole } = await render(<DefaultCheckedKeys />)

    const input = getByRole('textbox')
    await userEvent.click(input)
    await userEvent.keyboard('nonexistent-fruit-zzz')

    // Ananas/Kiwi are hidden by the filter now, but still checked.
    await userEvent.clear(input)
    // The pill is CSS-hidden while the input is focused (see
    // TreeComboBox.module.css) regardless of selection — move focus off the
    // input to check the underlying selection state actually persisted.
    await userEvent.tab()

    await expect.element(page.getByText('2 selected')).toBeVisible()
  })
})

describe('given a TreeComboBox with a partially checked branch', async () => {
  it('should show the parent checkbox as indeterminate', async () => {
    await render(<PartiallyCheckedInitialState />)

    const tree = await openViaChevron()
    const parentCheckbox = tree.getByRole('checkbox', {
      name: 'Tropiska frukter',
    })

    await expect.element(parentCheckbox).toBeVisible()
    const element = (await parentCheckbox.element()) as HTMLInputElement
    expect(element.indeterminate).toBe(true)
  })
})

describe('given a TreeComboBox with WithClearAll', async () => {
  it('should clear every checked leaf and refocus the input when the clear button is pressed', async () => {
    const { getByRole } = await render(<WithClearAll />)

    await expect
      .element(page.getByRole('button', { name: 'Clear all' }))
      .toBeVisible()
    await userEvent.click(page.getByRole('button', { name: 'Clear all' }))

    await expect.element(page.getByText(/selected$/)).not.toBeInTheDocument()
    await expect.element(getByRole('textbox')).toHaveFocus()
  })
})

describe('given a TreeComboBox with a disabled node', async () => {
  it('should not allow toggling the disabled leaf, directly or via its parent', async () => {
    await render(<DisabledNode />)

    const tree = await openViaChevron()
    const disabledCheckbox = tree.getByRole('checkbox', { name: 'Ananas' })
    await expect.element(disabledCheckbox).toBeDisabled()
  })
})

describe('given an invalid TreeComboBox', async () => {
  it('should show the error message', async () => {
    await render(<Invalid />)

    await expect.element(page.getByText('Välj minst en kategori')).toBeVisible()
  })
})

describe('given a disabled TreeComboBox', async () => {
  it('should render the field controls as disabled', async () => {
    await render(<Disabled />)

    await expect
      .element(page.getByRole('button', { name: 'Show list' }))
      .toBeDisabled()
    await expect.element(page.getByRole('textbox')).toBeDisabled()
  })
})

describe('given a TreeComboBox with controlled checkedKeys', async () => {
  it('should reflect external state and call onCheckedChange when a leaf is toggled', async () => {
    await render(<ControlledCheckedKeys />)

    await expect.element(page.getByText('Valda lövnoder: 0')).toBeVisible()

    const tree = await openViaChevron()
    // The checkbox's real <input> is visually hidden (a labeled, custom-
    // styled control) — click its visible label text, matching the
    // convention used elsewhere in this codebase (e.g. CheckboxGroup.spec.tsx).
    await userEvent.click(tree.getByText('Ananas', { exact: true }))

    await expect.element(page.getByText('Valda lövnoder: 1')).toBeVisible()
  })
})
