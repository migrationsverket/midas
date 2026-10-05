import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from '../../../test-utils'
import * as sectionStories from './1-SectionSelectAll.stories'
import * as searchStories from './A-SearchAndBrowse.stories'
import * as dialogStories from './B-TreeDialog.stories'

const { WithScopeFilter: SectionWithScope } = composeStories(sectionStories)
const { WithScopeFilter: SearchWithScope } = composeStories(searchStories)
const { AutocompleteSearchWithScope } = composeStories(dialogStories)

const choose = async (field: RegExp, option: string) => {
  await page.getByRole('button', { name: field }).click()
  await page.getByRole('option', { name: option, exact: true }).click()
  await userEvent.keyboard('{Escape}')
}

const debugText = () => page.getByText(/^Valt \(/).element().textContent ?? ''

describe('1 with a verksamhetsområde pre-filter', () => {
  it('only shows the sections in scope and keeps a selection outside it', async () => {
    await render(<SectionWithScope />)

    await choose(/Verksamhetsområde/, 'Skydd')
    await page.getByRole('button', { name: /Ärendetyper/ }).click()

    await expect
      .element(page.getByRole('option', { name: /^Välj alla i Arbete/ }))
      .not.toBeInTheDocument()
    await page.getByRole('option', { name: /^Välj alla i Asyl/ }).click()

    // Visum (Tillstånd) was preselected and is outside the scope
    expect(debugText()).toContain('visum')
    expect(debugText()).toContain('asylansokan')
  })
})

describe('A with a pre-filter', () => {
  it('narrows the search to the chosen ärendeområde', async () => {
    await render(<SearchWithScope />)

    await choose(/Ärendeområde/, 'Asyl')
    await page
      .getByRole('searchbox', { name: 'Ärendetyper' })
      .fill('förlängning')

    await expect
      .element(
        page.getByRole('option', { name: /Förlängning av skyddsstatus/ }),
      )
      .toBeInTheDocument()
    await expect
      .element(page.getByRole('option', { name: /Förlängning av visum/ }))
      .not.toBeInTheDocument()
  })

  it('keeps a selection made before the scope changed', async () => {
    await render(<SearchWithScope />)

    const search = page.getByRole('searchbox', { name: 'Ärendetyper' })
    await search.fill('visum')
    await page.getByRole('option', { name: /^Visum/ }).click()

    await choose(/Ärendeområde/, 'Asyl')
    await search.fill('asylansökan')
    await page.getByRole('option', { name: /^Asylansökan/ }).click()

    const list = page.getByRole('grid', { name: 'Valda ärendetyper' })
    await expect.element(list).toHaveTextContent('Visum')
    await expect.element(list).toHaveTextContent('Asylansökan')
  })
})

describe('B1 with a pre-filter inside the dialog', () => {
  it('narrows the tree to the chosen verksamhetsområde', async () => {
    await render(<AutocompleteSearchWithScope />)

    await page.getByRole('button', { name: /Välj ärendetyper/ }).click()
    await choose(/Verksamhetsområde/, 'Medborgarskap')

    await expect
      .element(page.getByRole('row', { name: 'Medborgarskap', exact: true }))
      .toBeInTheDocument()
    await expect
      .element(page.getByRole('row', { name: 'Tillstånd', exact: true }))
      .not.toBeInTheDocument()
  })
})
