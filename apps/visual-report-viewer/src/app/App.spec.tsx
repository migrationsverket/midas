import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-react'
import { page, userEvent } from 'vitest/browser'
import { App } from './App'
import { reportFixture } from './fixtures'

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '?data=/report.json')
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(new Response(JSON.stringify(reportFixture)))),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    window.history.replaceState(null, '', window.location.pathname)
  })

  it('lists failures and shows the first one', async () => {
    await render(<App />)

    await expect
      .element(page.getByRole('option', { name: 'Primary' }))
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Primary')
    await expect.element(page.getByText('2 changed screenshots')).toBeVisible()
  })

  it('selects a failure and links to it', async () => {
    await render(<App />)

    await page.getByRole('option', { name: 'Month select' }).click()

    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Month select')
    await expect.element(page.getByText('No baseline yet')).toBeVisible()
    expect(window.location.hash).toBe('#datepicker-styles/1')
  })

  it('moves between failures with j and k', async () => {
    await render(<App />)
    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Primary')

    await userEvent.keyboard('j')
    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Secondary')

    await userEvent.keyboard('k')
    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Primary')
  })

  it('filters to new screenshots', async () => {
    await render(<App />)

    // The native radio is visually hidden behind its label
    await page.getByText('New (1)').click()

    await expect
      .element(page.getByRole('radio', { name: 'New (1)' }))
      .toBeChecked()

    await expect
      .element(page.getByRole('option', { name: 'Primary' }))
      .not.toBeInTheDocument()
    await expect
      .element(page.getByRole('heading', { level: 2 }))
      .toHaveTextContent('Month select')
  })

  it('explains when the report is missing', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve(new Response('', { status: 404 }))),
    )
    await render(<App />)

    await expect.element(page.getByText(/No report found/)).toBeVisible()
  })
})
