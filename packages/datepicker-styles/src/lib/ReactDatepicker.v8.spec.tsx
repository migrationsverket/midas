import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import * as stories from './ReactDatepicker.v8.stories'

const { Default, MonthSelect } = composeStories(stories)

describe('given a react-datepicker v8 BasicDatePicker', () => {
  it('keeps the navigation buttons inside the calendar', async () => {
    const { container } = await render(<Default />)
    const calendar = container
      .querySelector('.react-datepicker')
      ?.getBoundingClientRect() as DOMRect

    for (const button of container.querySelectorAll(
      '.react-datepicker__navigation',
    )) {
      const rect = button.getBoundingClientRect()
      expect(rect.left).toBeGreaterThanOrEqual(calendar.left)
      expect(rect.right).toBeLessThanOrEqual(calendar.right)
    }
  })

  it('selects a day and writes it to the input', async () => {
    const { container } = await render(<Default />)
    const day = page.elementLocator(
      container.querySelector(
        '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)',
      ) as Element,
    )

    await day.click()
    await expect.element(day).toHaveClass('react-datepicker__day--selected')
    expect(
      (container.querySelector('input') as HTMLInputElement).value,
    ).toMatch(/^15-\d{2}-\d{4}$/)
  })
})

describe('given a react-datepicker v8 MonthPicker', () => {
  it('lays the months out in a grid', async () => {
    const { container } = await render(<MonthSelect />)
    const grid = page.elementLocator(
      container.querySelector('.react-datepicker__monthPicker') as Element,
    )
    await expect.element(grid).toHaveStyle({ display: 'grid' })
  })
})
