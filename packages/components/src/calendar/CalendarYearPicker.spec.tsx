import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Calendar.stories'
import { render } from '../../test-utils'
import { Calendar } from './Calendar'

const { WithMonthYearPicker } = composeStories(stories)

describe('given a Calendar with showMonthYearPicker', async () => {
  it('should have an accessible name', async () => {
    const { getByTestId } = await render(<WithMonthYearPicker />)

    await expect
      .element(getByTestId('calendar-year-picker').getByRole('button'))
      .toHaveAccessibleName()
  })

  it('should navigate to the selected year without selecting a date', async () => {
    const { getByTestId, getByRole, container } = await render(
      <WithMonthYearPicker />,
    )
    const trigger = getByTestId('calendar-year-picker').getByRole('button')

    const currentYear = await trigger.element().textContent
    const targetYear = String(Number(currentYear) - 1)

    await trigger.click()
    await getByRole('option', { name: targetYear }).click()

    await expect.element(trigger).toHaveTextContent(targetYear)
    expect(container.querySelectorAll('[aria-selected="true"]')).toHaveLength(
      0,
    )
  })
})

describe('given a disabled Calendar with showMonthYearPicker', async () => {
  it('should disable the year picker', async () => {
    const { getByTestId } = await render(
      <Calendar
        showMonthYearPicker
        isDisabled
      />,
    )

    await expect
      .element(getByTestId('calendar-year-picker').getByRole('button'))
      .toBeDisabled()
  })
})

describe('given a read-only Calendar with showMonthYearPicker', async () => {
  it('should keep the year picker interactive (read-only only blocks date selection)', async () => {
    const { getByTestId, getByRole } = await render(
      <Calendar
        showMonthYearPicker
        isReadOnly
      />,
    )

    await getByTestId('calendar-year-picker').getByRole('button').click()
    await expect.element(getByRole('listbox')).toBeVisible()
  })
})
