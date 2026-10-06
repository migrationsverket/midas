import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from '../../../test-utils'
import * as stories from './1-SectionSelectAll.stories'

const { SectionSelectAll, WithGlobalSelectAll, HeaderCheckboxWithCounts } =
  composeStories(stories)

const debugText = () => page.getByText(/^Valt \(/).element().textContent ?? ''

describe('given a Select with select all per section', () => {
  it('selects only that section, skips disabled items and never stores the sentinel', async () => {
    const { getByRole } = await render(
      <SectionSelectAll dataset='arendetyper' />,
    )

    await getByRole('button', { name: /Ärendetyper/ }).click()
    await page.getByRole('option', { name: /^Välj alla i Studier/ }).click()

    const text = debugText()
    expect(text).toContain('hogskolestudier')
    expect(text).toContain('arbetssokande-efter-studier')
    expect(text).not.toContain('utbytesstudier-gymnasium')
    expect(text).not.toContain('arbetstillstand')
    expect(text).not.toContain('section-all')
    // The default value is kept
    expect(text).toContain('visum')
  })

  it('marks the row selected only while the whole section is selected', async () => {
    const { getByRole } = await render(
      <SectionSelectAll dataset='arendetyper' />,
    )

    await getByRole('button', { name: /Ärendetyper/ }).click()
    const sectionAll = page.getByRole('option', {
      name: /^Välj alla i Familj/,
    })
    await sectionAll.click()
    await expect.element(sectionAll).toHaveAttribute('aria-selected', 'true')

    await page.getByRole('option', { name: 'Barn', exact: true }).click()
    await expect.element(sectionAll).toHaveAttribute('aria-selected', 'false')
    await expect
      .element(
        page.getByRole('option', { name: /^Välj alla i Familj, 3 av 4/ }),
      )
      .toBeInTheDocument()
  })

  it('can be reached and toggled with the keyboard', async () => {
    await render(<SectionSelectAll dataset='arendetyper' />)

    await userEvent.tab()
    await userEvent.keyboard('{ArrowDown}')
    // Opening focuses the preselected option, Home goes to the first one,
    // which is "Välj alla i Arbete"
    await userEvent.keyboard('{Home}')
    await userEvent.keyboard('[Space]')

    expect(debugText()).toContain('egen-naringsverksamhet')
    expect(debugText()).toContain('au-pair')
  })
})

describe('given section select all combined with the global select all', () => {
  it('selects every selectable item without storing sentinels', async () => {
    const { getByRole } = await render(
      <WithGlobalSelectAll dataset='arendetyper' />,
    )

    await getByRole('button', { name: /Ärendetyper/ }).click()
    await page.getByText('Select all', { exact: true }).click()

    const text = debugText()
    expect(text).toContain('kvotflyktingar')
    expect(text).not.toContain('section-all')
    expect(text).not.toContain('aterkallelse')
  })
})

describe('given the header checkbox variant with counts', () => {
  it('selects the section from the header and counts it in a pill', async () => {
    const { getByRole } = await render(
      <HeaderCheckboxWithCounts dataset='arendetyper' />,
    )

    await getByRole('button', { name: /Ärendetyper/ }).click()
    // Click the label, the checkbox input itself is visually hidden
    await page.getByText('Studier', { exact: true }).click()

    const text = debugText()
    expect(text).toContain('hogskolestudier')
    expect(text).not.toContain('utbytesstudier-gymnasium')
    // No sentinel rows, so the trigger count is right: Visum + 4
    await expect.element(page.getByText('5 selected')).toBeInTheDocument()
    await expect.element(page.getByText('4 valda')).toBeInTheDocument()
  })

  it('has no "Välj alla i" option rows', async () => {
    const { getByRole } = await render(
      <HeaderCheckboxWithCounts dataset='arendetyper' />,
    )

    await getByRole('button', { name: /Ärendetyper/ }).click()

    await expect
      .element(page.getByRole('option', { name: /^Välj alla i/ }).first())
      .not.toBeInTheDocument()
  })
})
