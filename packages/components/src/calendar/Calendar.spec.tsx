import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '@midas-ds/test-utils'
import * as stories from './Calendar.stories'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a Primary Calendar', async () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be possible to select a date with the keyboard', async () => {
    vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))

    const { getByRole } = await render(<Primary />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[ArrowLeft]')
    await userEvent.keyboard('[ArrowLeft]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(
        getByRole('button', {
          name: 'Tuesday, May 27',
        }).element().parentElement,
      )
      .toHaveAttribute('aria-selected', 'true')
  })
})

describe('DS1141', async () => {
  it('it should show a "not-allowed" cursor when hovering disabled dates', async () => {
    vi.setSystemTime(mockedNow.toDate(getLocalTimeZone()))

    const { getByRole } = await render(<Primary minValue={mockedNow} />)
    const yesterdayButton = getByRole('button', { name: 'Tuesday, May 27' })

    await yesterdayButton.hover()

    await expect.element(yesterdayButton).toHaveStyle({
      cursor: 'not-allowed',
    })
  })
})
