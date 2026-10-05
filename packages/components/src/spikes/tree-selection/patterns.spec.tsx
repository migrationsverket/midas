import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from '../../../test-utils'
import * as searchStories from './A-SearchAndBrowse.stories'
import * as dialogStories from './B-TreeDialog.stories'
import * as hybridStories from './C-Hybrid.stories'

const { AutocompleteSearchAndBrowse } = composeStories(searchStories)
const { AutocompleteSearch, FilteredTree, AutocompleteSearchWithCounts } =
  composeStories(dialogStories)
const { ChipsSearchAndBrowse } = composeStories(hybridStories)

const selectedCount = () =>
  page.getByText(/^Valda ärendetyper \(\d+\)$/).first()

describe('A: the Autocomplete search', () => {
  it('keeps focus in the search field while the arrow keys pick a result', async () => {
    await render(<AutocompleteSearchAndBrowse />)

    const input = page.getByRole('searchbox', { name: 'Ärendetyper' })
    await input.click()
    await userEvent.keyboard('blåkort')
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')

    await expect.element(input).toHaveFocus()
    await expect
      .element(selectedCount())
      .toHaveTextContent('Valda ärendetyper (1)')
  })

  it('also finds ärendetyper by their path', async () => {
    await render(<AutocompleteSearchAndBrowse />)

    await page.getByRole('searchbox', { name: 'Ärendetyper' }).fill('skydd')

    await expect
      .element(page.getByRole('option', { name: /Kvotflyktingar/ }))
      .toBeInTheDocument()
  })
})

describe('B1: the tree dialog with Autocomplete search', () => {
  it('selects a whole branch from the tree and commits it with Klar', async () => {
    await render(<AutocompleteSearch />)

    await page.getByRole('button', { name: 'Välj ärendetyper' }).click()
    // The tree starts collapsed, so this toggles a top-level row. Clicking a
    // row toggles it, the checkbox input itself is visually hidden
    await page.getByRole('row', { name: 'Medborgarskap' }).click()
    await page.getByRole('button', { name: 'Klar' }).click()

    // Three ärendeområden with two ärendetyper each
    await expect
      .element(selectedCount())
      .toHaveTextContent('Valda ärendetyper (6)')
  })

  it('shows a partially selected branch as indeterminate', async () => {
    await render(<AutocompleteSearch />)

    await page.getByRole('button', { name: 'Välj ärendetyper' }).click()
    await page
      .getByRole('row', { name: 'Tillstånd', exact: true })
      .getByRole('button')
      .click()
    await page
      .getByRole('row', { name: 'Arbete', exact: true })
      .getByRole('button')
      .click()
    await page.getByRole('row', { name: 'EU-blåkort', exact: true }).click()

    // React Aria caches rendered tree items, so this only updates when the
    // selection is passed as a dependency
    for (const name of ['Arbete', 'Tillstånd']) {
      await expect
        .element(
          page.getByRole('row', { name, exact: true }).getByRole('checkbox'),
        )
        .toBePartiallyChecked()
    }
  })

  it('throws the changes away on Avbryt', async () => {
    await render(<AutocompleteSearch />)

    await page.getByRole('button', { name: 'Välj ärendetyper' }).click()
    await page.getByRole('row', { name: 'Skydd' }).click()
    await page.getByRole('button', { name: 'Avbryt' }).click()

    await expect
      .element(selectedCount())
      .toHaveTextContent('Valda ärendetyper (0)')
  })
})

describe('B2: the filtered tree', () => {
  it('reveals a nested match without the user expanding anything', async () => {
    await render(<FilteredTree />)

    await page.getByRole('button', { name: 'Välj ärendetyper' }).click()
    await page.getByRole('searchbox', { name: 'Filtrera' }).fill('kvot')

    await expect
      .element(page.getByRole('row', { name: 'Kvotflyktingar' }))
      .toBeVisible()
    await expect
      .element(page.getByRole('row', { name: 'Asyl' }))
      .not.toBeInTheDocument()
  })
})

describe('C: hybrid', () => {
  it('only shows search results while there is a query', async () => {
    await render(<ChipsSearchAndBrowse />)

    await expect
      .element(page.getByRole('listbox', { name: 'Sökresultat' }))
      .not.toBeInTheDocument()

    await page
      .getByRole('searchbox', { name: 'Lägg till ärendetyp' })
      .fill('visum')

    await expect
      .element(page.getByRole('listbox', { name: 'Sökresultat' }))
      .toBeInTheDocument()
  })
})

describe('counts', () => {
  it('shows the total on the trigger and per branch in the tree', async () => {
    await render(<AutocompleteSearchWithCounts />)

    await page.getByRole('button', { name: 'Välj ärendetyper' }).click()
    await page.getByRole('row', { name: 'Medborgarskap', exact: true }).click()

    // The branch pill, and the selected list's pill in the dialog
    await expect
      .element(page.getByRole('row', { name: 'Medborgarskap', exact: true }))
      .toHaveTextContent('6 valda')
    await page.getByRole('button', { name: 'Klar' }).click()

    await expect
      .element(page.getByRole('button', { name: /Välj ärendetyper/ }))
      .toHaveTextContent('6 valda')
  })
})
