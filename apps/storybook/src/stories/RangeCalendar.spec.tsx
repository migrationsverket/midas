import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './RangeCalendar.stories'
import { mockedNow } from '../utils/storybook'

const { Primary } = composeStories(stories)

describe('given a primary RangeCalendar', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should be possible to select today and two days ahead with the keyboard', async () => {
    const todaysDate = mockedNow.day.toString()
    const tomorrow = mockedNow.add({ days: 1 }).day.toString()
    const dayAfterTomorrow = mockedNow.add({ days: 2 }).day.toString()

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowRight]')
    expect(
      page.getByRole('gridcell', { name: todaysDate, selected: true }),
    ).toHaveAttribute('aria-selected', 'true')
    expect(
      page.getByRole('gridcell', { name: tomorrow, selected: true }),
    ).toHaveAttribute('aria-selected', 'true')
    expect(
      page.getByRole('gridcell', {
        name: dayAfterTomorrow,
        selected: true,
      }),
    ).toHaveAttribute('aria-selected', 'true')
  })
})
