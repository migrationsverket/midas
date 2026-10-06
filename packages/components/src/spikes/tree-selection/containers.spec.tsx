import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from '../../../test-utils'
import * as dialogStories from './B-TreeDialog.stories'
import * as menuStories from './B4-CascadingMenu.stories'

const { PopoverAutocompleteSearch } = composeStories(dialogStories)
const { WithCounts: MenuWithCounts } = composeStories(menuStories)

const selectedCount = () => page.getByText(/^Valda ärendetyper/).first()

describe('B3: the tree in a popover', () => {
  it('opens a dialog next to the button and commits with Klar', async () => {
    await render(<PopoverAutocompleteSearch dataset='arendetyper' />)

    await page.getByRole('button', { name: /Välj ärendetyper/ }).click()
    const dialog = page.getByRole('dialog', { name: 'Välj ärendetyper' })
    await expect.element(dialog).toBeVisible()

    await dialog
      .getByRole('treegrid')
      .getByRole('row', { name: 'Medborgarskap', exact: true })
      .click()
    await dialog.getByRole('button', { name: 'Klar' }).click()

    await expect.element(dialog).not.toBeInTheDocument()
    await expect.element(selectedCount()).toHaveTextContent('6 valda')
  })
})

describe('B4: cascading menus', () => {
  it('selects a whole group from its submenu and stays open', async () => {
    await render(<MenuWithCounts dataset='arendetyper' />)

    await page.getByRole('button', { name: /Välj ärendetyper/ }).click()
    await page.getByRole('menuitem', { name: /^Medborgarskap/ }).click()
    await page.getByRole('menuitem', { name: /^Anmälan/ }).click()
    await page
      .getByRole('menuitemcheckbox', { name: /^Välj alla i Anmälan/ })
      .click()

    await expect.element(selectedCount()).toHaveTextContent('2 valda')
    await expect
      .element(
        page.getByRole('menuitemcheckbox', { name: /^Välj alla i Anmälan/ }),
      )
      .toBeVisible()
  })

  it('keeps the menu open when toggling with Space', async () => {
    await render(<MenuWithCounts dataset='arendetyper' />)

    await page.getByRole('button', { name: /Välj ärendetyper/ }).click()
    await page.getByRole('menuitem', { name: /^Tillstånd/ }).click()
    await page.getByRole('menuitem', { name: /^Besök/ }).click()
    await page
      .getByRole('menuitemcheckbox', { name: 'Visum', exact: true })
      .hover()
    await userEvent.keyboard('[Space]')

    await expect.element(selectedCount()).toHaveTextContent('1 valda')
    await expect
      .element(
        page.getByRole('menuitemcheckbox', { name: 'Visum', exact: true }),
      )
      .toBeVisible()
  })
})
