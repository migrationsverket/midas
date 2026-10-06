import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from '../../../test-utils'
import * as sectionStories from './1-SectionSelectAll.stories'
import * as searchStories from './A-SearchAndBrowse.stories'
import * as dialogStories from './B-TreeDialog.stories'

const { WithScopeFilter: SectionWithScope, ThreeLevelsWithPreFilter } =
  composeStories(sectionStories)
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
    await render(<SectionWithScope dataset='arendetyper' />)

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
    await render(<SearchWithScope dataset='arendetyper' />)

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
    await render(<SearchWithScope dataset='arendetyper' />)

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
    await render(<AutocompleteSearchWithScope dataset='arendetyper' />)

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

describe('three levels with a pre-filter and the Select', () => {
  it('selects a whole top level with Select all and keeps it when the scope changes', async () => {
    await render(<ThreeLevelsWithPreFilter dataset='arendetyper' />)

    const selectAll = () => page.getByText('Select all', { exact: true })
    const list = page.getByRole('grid', { name: 'Valda ärendetyper' })

    await choose(/Verksamhetsområde/, 'Medborgarskap')
    await page.getByRole('button', { name: /Ärendetyper/ }).click()
    await selectAll().click()
    await userEvent.keyboard('{Escape}')
    await expect.element(list).toHaveTextContent('Medborgarskap · alla 6')

    // Switch the scope, then Select all on and off again in Skydd
    await choose(/Verksamhetsområde/, 'Medborgarskap')
    await choose(/Verksamhetsområde/, 'Skydd')
    await page.getByRole('button', { name: /Ärendetyper/ }).click()
    await selectAll().click()
    await selectAll().click()
    await userEvent.keyboard('{Escape}')

    await expect.element(list).toHaveTextContent('Medborgarskap · alla 6')
    await expect.element(list).not.toHaveTextContent('Skydd')
  })
})
