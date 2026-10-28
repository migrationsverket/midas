import { afterEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Toast.stories'
import { toastQueue } from './Toast'
import { render } from '../../test-utils'

const { Global, Local, Variants, ProgrammaticClose } = composeStories(stories)

describe('given a global Toast', async () => {
  it('should show a toast when the button is pressed', async () => {
    const { getByRole, getByText } = await render(<Global />)

    await getByRole('button').click()

    await expect.element(getByText('Toasten är klar')).toBeVisible()
  })
})

describe('given a local Toast', async () => {
  it('should show a toast when the button is pressed', async () => {
    const { getByRole, getByText } = await render(<Local />)

    await getByRole('button').click()

    await expect.element(getByText('Lokalt meddelande')).toBeVisible()
  })
})

describe('given toast variants', async () => {
  it('should show a success toast', async () => {
    const { getByRole, getByText } = await render(<Variants />)

    await getByRole('button', { name: 'success' }).click()

    await expect.element(getByText('Detta är en success-toast')).toBeVisible()
  })
})

describe('given programmatic close', async () => {
  // The toast doesn't close by itself, and the global queue outlives the
  // render, so a failed attempt left it for the retries to find
  afterEach(() => {
    for (const { key } of toastQueue.visibleToasts) toastQueue.close(key)
  })

  it('should close the toast when close button is pressed', async () => {
    const { getByRole, getByText } = await render(<ProgrammaticClose />)

    await getByRole('button', { name: 'Visa toast' }).click()

    await expect
      .element(getByText('Denna toast stängs inte automatiskt'))
      .toBeVisible()

    // The toast comes in with a view transition, which covers the page and
    // takes the clicks until it ends. Playwright waits for the button to be
    // hit, but WebDriver clicks right away, so wait for it here
    const closeButton = getByRole('button', { name: 'Stäng programmatiskt' })
    await expect
      .poll(() => {
        const { x, y, width, height } = closeButton
          .element()
          .getBoundingClientRect()
        return document.elementFromPoint(x + width / 2, y + height / 2)
      })
      .toBe(closeButton.element())
    await closeButton.click()

    await expect
      .element(getByText('Denna toast stängs inte automatiskt'))
      .not.toBeInTheDocument()
  })
})
