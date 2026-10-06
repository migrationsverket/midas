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
const { ChipsSearchAndBrowse, CollapsedSelection, GroupedSelection } =
  composeStories(hybridStories)

const selectedCount = () =>
  page.getByText(/^Valda ärendetyper \(\d+\)$/).first()

describe('A: the Autocomplete search', () => {
  it('keeps focus in the search field while the arrow keys pick a result', async () => {
    await render(<AutocompleteSearchAndBrowse dataset='arendetyper' />)

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

  it('keeps the selection when Escape clears the search', async () => {
    await render(<AutocompleteSearchAndBrowse dataset='arendetyper' />)

    const input = page.getByRole('searchbox', { name: 'Ärendetyper' })
    await input.click()
    await userEvent.keyboard('visum')
    await userEvent.keyboard('{ArrowDown}')
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard('{Escape}')
    await userEvent.keyboard('{Escape}')

    // React Aria's ListBox clears its selection on Escape by default
    await expect
      .element(selectedCount())
      .toHaveTextContent('Valda ärendetyper (1)')
  })

  it('also finds ärendetyper by their path', async () => {
    await render(<AutocompleteSearchAndBrowse dataset='arendetyper' />)

    await page.getByRole('searchbox', { name: 'Ärendetyper' }).fill('skydd')

    await expect
      .element(page.getByRole('option', { name: /Kvotflyktingar/ }))
      .toBeInTheDocument()
  })
})

describe('B1: the tree dialog with Autocomplete search', () => {
  it('selects a whole branch from the tree and commits it with Klar', async () => {
    await render(<AutocompleteSearch dataset='arendetyper' />)

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
    await render(<AutocompleteSearch dataset='arendetyper' />)

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
    await render(<AutocompleteSearch dataset='arendetyper' />)

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
    await render(<FilteredTree dataset='arendetyper' />)

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
    await render(<ChipsSearchAndBrowse dataset='arendetyper' />)

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
    await render(<AutocompleteSearchWithCounts dataset='arendetyper' />)

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

describe('summarised selection', () => {
  it('shows a whole branch as one tag, and removing it clears the branch', async () => {
    await render(<CollapsedSelection dataset='arendetyper' />)

    await page.getByRole('button', { name: /Bläddra/ }).click()
    await page
      .getByRole('treegrid')
      .getByRole('row', { name: 'Medborgarskap', exact: true })
      .click()
    await page.getByRole('button', { name: 'Klar' }).click()

    const list = page.getByRole('grid', { name: 'Valda ärendetyper' })
    await expect
      .element(list.getByRole('row'))
      .toHaveTextContent('Medborgarskap · alla 6')

    await list.getByRole('button').click()
    // These stories show the count as a pill, not "(n)"
    await expect
      .element(page.getByText(/^Valda ärendetyper/).first())
      .toHaveTextContent('0 valda')
  })

  it('groups the selection per top level with counts', async () => {
    await render(<GroupedSelection dataset='arendetyper' />)

    const search = page.getByRole('searchbox', { name: 'Lägg till ärendetyp' })
    for (const name of ['Visum', 'Asylansökan', 'EU-blåkort']) {
      await search.fill(name)
      await page.getByRole('option', { name: new RegExp(`^${name}`) }).click()
    }

    const rows = page
      .getByRole('grid', { name: 'Valda ärendetyper' })
      .getByRole('row')
    await expect.element(rows.nth(0)).toHaveTextContent('Tillstånd · 2 av 21')
    await expect.element(rows.nth(1)).toHaveTextContent('Skydd · 1 av 6')
  })
})
