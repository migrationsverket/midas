import { describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './InfoBanner.stories'
import { render } from 'vitest-browser-react'

const { Dismissable, Controlled } = composeStories(stories)

const handleOpenChange = vi.fn()

describe('given a dismissable InfoBanner', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should fire the onOpenChange event and close', async () => {
    const { getByRole } = await render(
      <Dismissable onOpenChange={handleOpenChange} />,
    )

    await getByRole('button').click()

    expect(handleOpenChange).toHaveBeenCalledOnce()
    await expect.element(getByRole('button')).not.toBeInTheDocument()
  })
})

describe('given a controlled InfoBanner', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should only fire the onOpenChange on close', async () => {
    const { getByRole } = await render(
      <Controlled onOpenChange={handleOpenChange} />,
    )

    // close
    await getByRole('button').click()
    expect(handleOpenChange).toHaveBeenCalledWith(false)

    // open
    await getByRole('button').click()
    expect(handleOpenChange).toHaveBeenCalledOnce()
  })
})
