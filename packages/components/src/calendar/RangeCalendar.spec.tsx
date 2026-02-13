import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './RangeCalendar.stories'
import { mockedNow } from '@midas-ds/test-utils'
import { render } from 'vitest-browser-react'
import { getLocalTimeZone } from '@internationalized/date'

const { Primary } = composeStories(stories)

describe('given a primary RangeCalendar', async () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be possible to select today and two days ahead with the keyboard', async () => {
    vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))
    const { getByRole } = await render(<Primary />)

    await getByRole('button', { name: 'Previous' }).first().click()
    await getByRole('button', { name: 'Next' }).first().click()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowRight]')

    await expect
      .element(
        getByRole('button', {
          name: 'Today, Thursday, May 29',
        }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(
        getByRole('button', { name: 'Friday, May 30' }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(
        getByRole('button', {
          name: 'Saturday, May 31',
        }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
  })
})
