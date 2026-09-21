import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Calendar.stories'
import { render } from '../../test-utils'
import { Calendar } from './Calendar'

const { WithMonthYearPicker } = composeStories(stories)

describe('given a Calendar with showMonthYearPicker', async () => {
  it('should have an accessible name', async () => {
    const { getByRole } = await render(<WithMonthYearPicker />)

    await expect
      .element(getByRole('button', { name: 'month' }))
      .toHaveAccessibleName()
  })

  it('should navigate to the selected month without selecting a date', async () => {
    const { getByRole, container } = await render(<WithMonthYearPicker />)
    const trigger = getByRole('button', { name: 'month' })
    const currentMonth = trigger.element().textContent

    await trigger.click()

    // Pick a different month by position rather than name text, since the
    // month abbreviation is locale-dependent (this test environment has no
    // I18nProvider, so it renders in the browser's default locale).
    const options = getByRole('option')
    const optionTexts = await Promise.all(
      (await options.elements()).map(el => el.textContent),
    )
    const targetIndex = optionTexts.findIndex(text => text !== currentMonth)
    const targetMonth = optionTexts[targetIndex]

    await options.nth(targetIndex).click()

    await expect.element(trigger).toHaveTextContent(targetMonth as string)
    expect(container.querySelectorAll('[aria-selected="true"]')).toHaveLength(0)
  })
})

describe('given a disabled Calendar with showMonthYearPicker', async () => {
  it('should disable the month picker', async () => {
    const { getByRole } = await render(
      <Calendar
        showMonthYearPicker
        isDisabled
      />,
    )

    await expect.element(getByRole('button', { name: 'month' })).toBeDisabled()
  })
})

describe('given a read-only Calendar with showMonthYearPicker', async () => {
  it('should keep the month picker interactive (read-only only blocks date selection)', async () => {
    const { getByRole } = await render(
      <Calendar
        showMonthYearPicker
        isReadOnly
      />,
    )

    await getByRole('button', { name: 'month' }).click()
    await expect.element(getByRole('listbox')).toBeVisible()
  })
})
