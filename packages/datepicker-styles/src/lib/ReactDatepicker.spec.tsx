import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { BasicDatePicker, MonthPicker } from './ReactDatepicker'

// react-datepicker.css restyles markup react-datepicker generates itself, so
// this renders the real picker via the shared fixtures and asserts on the
// actual resolved styles, not just that the classes are present. Assertions
// avoid hardcoding theme token values (those can legitimately change); they
// check the *relationships* the CSS is meant to produce instead.

const query = (container: Element, selector: string) =>
  page.elementLocator(container.querySelector(selector) as Element)

// Days from the adjacent months share the `--015` class, so pin to this one
const day15 =
  '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'

describe('given a rendered BasicDatePicker', () => {
  it('gives the input a bottom border', async () => {
    const { container } = await render(<BasicDatePicker />)
    await expect
      .element(query(container, 'input'))
      .not.toHaveStyle({ borderBottomWidth: '0px' })
  })

  it('opens the calendar from the icon', async () => {
    const { container } = await render(<BasicDatePicker />)
    expect(container.querySelector('.react-datepicker')).toBeNull()

    await query(container, '.react-datepicker__calendar-icon').click()
    await expect
      .element(query(container, '.react-datepicker'))
      .toBeInTheDocument()
  })

  it('keeps the navigation buttons inside the calendar', async () => {
    const { container } = await render(<BasicDatePicker open />)
    const calendar = container
      .querySelector('.react-datepicker')
      ?.getBoundingClientRect() as DOMRect

    for (const button of container.querySelectorAll(
      '.react-datepicker__navigation',
    )) {
      const rect = button.getBoundingClientRect()
      expect(rect.left).toBeGreaterThanOrEqual(calendar.left)
      expect(rect.right).toBeLessThanOrEqual(calendar.right)
      expect(rect.top).toBeGreaterThanOrEqual(calendar.top)
      expect(rect.bottom).toBeLessThanOrEqual(calendar.bottom)
    }
  })

  it('changes a day background on hover', async () => {
    const { container } = await render(<BasicDatePicker open />)
    const day = query(container, day15)
    const restingBackground = getComputedStyle(day.element()).backgroundColor

    await day.hover()
    await expect
      .element(day)
      .not.toHaveStyle({ backgroundColor: restingBackground })
  })

  it('gives the selected day a different background and text color', async () => {
    const { container } = await render(<BasicDatePicker open />)
    const day = query(container, day15)

    await day.click()
    await expect.element(day).toHaveClass('react-datepicker__day--selected')

    const other = container.querySelector(
      '.react-datepicker__day:not(.react-datepicker__day--selected):not(.react-datepicker__day--keyboard-selected):not(.react-datepicker__day--outside-month)',
    ) as Element

    const selected = getComputedStyle(day.element())
    const unselected = getComputedStyle(other)
    expect(selected.backgroundColor).not.toBe(unselected.backgroundColor)
    expect(selected.color).not.toBe(unselected.color)
  })

  it('writes the selected date to the input in the docs format', async () => {
    const { container } = await render(<BasicDatePicker open />)
    await query(container, day15).click()

    const input = container.querySelector('input') as HTMLInputElement
    expect(input.value).toMatch(/^15-\d{2}-\d{4}$/)
  })
})

describe('given a rendered MonthPicker', () => {
  it('lays the months out in a grid', async () => {
    const { container } = await render(<MonthPicker open />)
    await expect
      .element(query(container, '.react-datepicker__monthPicker'))
      .toHaveStyle({ display: 'grid' })
  })

  it('gives the selected month a different background', async () => {
    const { container } = await render(<MonthPicker open />)
    const month = query(
      container,
      '.react-datepicker__month-text.react-datepicker__month-0',
    )

    await month.click()
    await expect
      .element(month)
      .toHaveClass('react-datepicker__month-text--selected')

    const other = container.querySelector(
      '.react-datepicker__month-text:not(.react-datepicker__month-text--selected):not(.react-datepicker__month-text--keyboard-selected)',
    ) as Element
    // month-text animates background-color, so poll instead of reading once
    await expect.element(month).not.toHaveStyle({
      backgroundColor: getComputedStyle(other).backgroundColor,
    })
  })
})
