"use client"

import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { useMediaQuery } from './useMediaQuery'
import { page } from 'vitest/browser'

const TEST_ID = 'test-id'

const TestComponent = ({ query }: { query: string }) => {
  const mediaQuery = useMediaQuery(query)

  return (
    <div
      data-testid={TEST_ID}
      className={mediaQuery ? 'matches' : ''}
    />
  )
}

describe('useMediaQuery', async () => {
  it('should work when resizing the window', async () => {
    const limit = 768

    await render(<TestComponent query={`(width >= ${limit}px)`} />)

    const testComponent = page.getByTestId(TEST_ID)

    page.viewport(limit - 1, 800)

    await expect.element(testComponent).not.toHaveClass('matches')

    page.viewport(limit, 800)

    await expect.element(testComponent).toHaveClass('matches')
  })
})
