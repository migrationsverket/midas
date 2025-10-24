import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import { today, getLocalTimeZone } from '@internationalized/date'
import { mockedNow } from '../utils/storybook'
import * as stories from './Calendar.stories'

const { Primary } = composeStories(stories)

describe('given a Primary Calendar', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should be possible to select a date with the keyboard', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[ArrowLeft]')
    await userEvent.keyboard('[ArrowLeft]')
    await userEvent.keyboard('[Space]')
    expect(
      page.getByRole('gridcell', {
        name: today(getLocalTimeZone()).subtract({ days: 2 }).day.toString(),
      }),
    ).toHaveAttribute('aria-selected', 'true')
  })
})

describe('DS1141', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        minValue: mockedNow,
      },
    })
  })

  it('it should show a "not-allowed" cursor when hovering disabled dates', async () => {
    const yesterdayButton = page
      .getByRole('gridcell', {
        name: `${mockedNow.day - 2}`,
      })
      .getByRole('button')

    await userEvent.hover(yesterdayButton)
    expect(yesterdayButton).toHaveStyle({ cursor: 'not-allowed' })
  })
})
