import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { BasicTable } from './BasicTable'

// tanstack-table.css targets consumer-applied class names on markup the
// consumer writes themselves (TanStack is headless, it generates no DOM of
// its own) — so this renders a real table via BasicTable and asserts on the
// actual resolved styles, not just that the classes are present. Assertions
// avoid hardcoding theme token values (those can legitimately change);
// they check the *relationships* the CSS is meant to produce instead.

describe('given a rendered BasicTable', () => {
  it('gives table cells a bottom border', async () => {
    const { container } = await render(<BasicTable />)
    const cell = page.elementLocator(container.querySelector('td') as Element)
    await expect.element(cell).not.toHaveStyle({ borderBottomWidth: '0px' })
  })

  it('gives even rows a different background than odd rows', async () => {
    const { container } = await render(<BasicTable />)
    const rows = container.querySelectorAll('tbody tr')
    expect(rows.length).toBeGreaterThanOrEqual(2)
    const oddBackground = getComputedStyle(rows[0]).backgroundColor
    const evenBackground = getComputedStyle(rows[1]).backgroundColor
    expect(evenBackground).not.toBe(oddBackground)
  })

  it('changes a row background on hover', async () => {
    const { container } = await render(<BasicTable />)
    const row = page.elementLocator(
      container.querySelector('tbody tr') as Element,
    )
    const restingBackground = getComputedStyle(row.element()).backgroundColor

    await row.hover()
    await expect
      .element(row)
      .not.toHaveStyle({ backgroundColor: restingBackground })
  })

  it('reveals the neutral sort icon on header hover', async () => {
    const { container } = await render(<BasicTable />)
    const header = page.elementLocator(
      container.querySelector('.sortable-header') as Element,
    )
    const icon = page.elementLocator(
      header.element().querySelector('.sort-icon-neutral') as Element,
    )

    await expect.element(icon).toHaveStyle({ opacity: '0' })
    await header.hover()
    await expect.element(icon).toHaveStyle({ opacity: '1' })
  })

  it('reveals the drag handle on header cell hover', async () => {
    const { container, getByRole } = await render(<BasicTable />)
    const th = getByRole('columnheader', { name: 'ID', exact: true })
    const handle = page.elementLocator(
      container.querySelector('.drag-handle') as Element,
    )

    await expect.element(handle).toHaveStyle({ opacity: '0' })
    await th.hover()
    await expect.element(handle).toHaveStyle({ opacity: '1' })
  })
})
