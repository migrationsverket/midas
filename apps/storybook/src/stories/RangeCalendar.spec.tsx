import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './RangeCalendar.stories'
import { mockedNow } from '../utils/storybook'
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

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowRight]')

    await expect
      .element(
        getByRole('button', {
          name: 'torsdag 29 maj',
        }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(
        getByRole('button', { name: 'fredag 30 maj' }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
    await expect
      .element(
        getByRole('button', {
          name: 'lördag 31 maj',
        }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
  })
})
