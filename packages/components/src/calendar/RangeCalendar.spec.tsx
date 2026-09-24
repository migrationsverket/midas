import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './RangeCalendar.stories'
import { mockedNow } from '@midas-ds/test-utils'
import { getLocalTimeZone } from '@internationalized/date'
import { render } from '../../test-utils'

const { Primary, WithMonthYearPicker } = composeStories(stories)

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

describe('given a RangeCalendar with showMonthYearPicker', async () => {
  it('should cleanly drop an in-progress selection when navigating via the month picker, rather than committing a stale/unintended range', async () => {
    const { getByRole, container } = await render(<WithMonthYearPicker />)

    // Start a range by clicking a single day (anchorDate gets set, no
    // range committed yet).
    await getByRole('button', { name: /15/ }).first().click()
    expect(container.querySelectorAll('[aria-selected="true"]')).toHaveLength(1)

    // Navigate to a different month via the picker without finishing the
    // range. React Aria's default commitBehavior ("select") would commit
    // a range using whatever date is focused at that point — since our
    // ListBoxItems aren't <button>s, they don't get RAC's own prev/next
    // exception for this. RangeCalendar is configured with
    // commitBehavior="reset" specifically so this fails safe: no range
    // gets committed at all, rather than an unintended one.
    const monthTrigger = getByRole('button', { name: 'month' })
    await monthTrigger.click()
    await getByRole('option').nth(1).click()

    expect(container.querySelectorAll('[aria-selected="true"]')).toHaveLength(0)
  })
})
