import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { Main } from './Main'

describe('Main', () => {
  it('should render children', async () => {
    await render(<Main>Main content</Main>)

    await expect.element(page.getByText('Main content')).toBeInTheDocument()
  })

  it('should establish a positioning context for absolutely positioned descendants', async () => {
    // Regression: Main used to have no `position`, so an absolutely positioned
    // descendant with no inset (e.g. React Aria's visually-hidden native inputs)
    // anchored to the nearest positioned ancestor *outside* Main instead. That
    // desynced it from Main's own scroll and caused a layout jump on focus.
    const { container } = await render(<Main>content</Main>)
    const main = container.querySelector('main') as HTMLElement

    expect(getComputedStyle(main).position).not.toBe('static')
  })
})
