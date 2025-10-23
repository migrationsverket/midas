import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './InfoBanner.stories'

const { Dismissable, Controlled } = composeStories(stories)

const onOpenChange = vi.fn()

describe('given a dismissable InfoBanner', async () => {
  beforeEach(async () => {
    await Dismissable.run({
      args: {
        ...Dismissable.args,
        onOpenChange,
      },
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should fire the onOpenChange event and close', async () => {
    const closeButton = page.getByRole('button')
    await userEvent.click(closeButton)
    expect(onOpenChange).toHaveBeenCalledOnce()
    await expect.poll(() => closeButton.query()).not.toBeInTheDocument()
  })
})

describe('given a controlled InfoBanner', async () => {
  beforeEach(async () => {
    await Controlled.run({
      args: {
        ...Dismissable.args,
        onOpenChange,
      },
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should only fire the onOpenChange on close', async () => {
    // close
    await userEvent.click(page.getByRole('button'))
    expect(onOpenChange).toHaveBeenCalledWith(false)
    // open
    await userEvent.click(page.getByRole('button'))
    expect(onOpenChange).toHaveBeenCalledOnce()
  })
})
