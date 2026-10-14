import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page, userEvent } from 'vitest/browser'
import { BasicDatePicker, MonthPicker } from './ReactDatepicker'

// react-datepicker.css restyles markup react-datepicker generates itself, so
// this renders the real picker via the shared fixtures and asserts on the
// actual resolved styles, not just that the classes are present. Assertions
// avoid hardcoding theme token values (those can legitimately change); they
// check the *relationships* the CSS is meant to produce instead.

const query = (container: Element, selector: string) =>
  page.elementLocator(container.querySelector(selector) as Element)

// Days from the adjacent months share the `--015` class, so pin to this one
// Resolves a theme token to the computed color the browser would use, so
// tests can compare against tokens without hardcoding their values
const tokenColor = (token: string) => {
  const probe = document.createElement('span')
  probe.style.color = `var(${token})`
  document.body.append(probe)
  const color = getComputedStyle(probe).color
  probe.remove()
  return color
}

const day15 =
  '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
const day02 =
  '.react-datepicker__day--002:not(.react-datepicker__day--outside-month)'
const day16 =
  '.react-datepicker__day--016:not(.react-datepicker__day--outside-month)'

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

  it('makes the keyboard cursor look like any other day after changing month', async () => {
    const { container } = await render(<BasicDatePicker open />)
    await query(container, day02).click()
    await query(container, '.react-datepicker__navigation--next').click()

    // react-datepicker moves its keyboard cursor (keyboard-selected) to the
    // same day in the new month. It isn't a selection, so it shouldn't look
    // like one.
    const cursorDay = query(container, day02)
    await expect
      .element(cursorDay)
      .toHaveClass('react-datepicker__day--keyboard-selected')
    await expect
      .element(cursorDay)
      .not.toHaveClass('react-datepicker__day--selected')

    const plainDay = container.querySelector(day15) as Element
    await expect.element(cursorDay).toHaveStyle({
      backgroundColor: getComputedStyle(plainDay).backgroundColor,
      color: getComputedStyle(plainDay).color,
    })
  })

  it('does not show the selection on a day from the next month', async () => {
    // Opens on June with June 1 selected, then goes back to May, where June 1
    // is shown as an outside-month day at the end of the grid
    const { container } = await render(
      <BasicDatePicker
        open
        defaultDate={new Date(2025, 5, 1)}
      />,
    )
    await query(container, '.react-datepicker__navigation--previous').click()

    const overflowDay = query(
      container,
      '.react-datepicker__day--001.react-datepicker__day--outside-month',
    )
    await expect
      .element(overflowDay)
      .toHaveClass('react-datepicker__day--selected')

    const otherOverflowDay = container.querySelector(
      '.react-datepicker__day--outside-month:not(.react-datepicker__day--selected)',
    ) as Element
    await expect.element(overflowDay).toHaveStyle({
      backgroundColor: getComputedStyle(otherOverflowDay).backgroundColor,
      color: getComputedStyle(otherOverflowDay).color,
    })
  })

  it('shows a focus ring on the day the arrow keys move to, but not after a mouse click', async () => {
    const { container } = await render(<BasicDatePicker open />)
    await query(container, day15).click()
    // Changing month moves focus to the keyboard cursor in the new month
    await query(container, '.react-datepicker__navigation--next').click()
    const cursorDay = query(container, day15)
    await expect.element(cursorDay).toHaveFocus()
    await expect.element(cursorDay).toHaveStyle({ boxShadow: 'none' })

    await userEvent.keyboard('{ArrowRight}')

    const focusedDay = query(container, day16)
    await expect.element(focusedDay).toHaveFocus()
    await expect.element(focusedDay).not.toHaveStyle({ boxShadow: 'none' })
  })

  it('writes the selected date to the input in the docs format', async () => {
    const { container } = await render(<BasicDatePicker open />)
    await query(container, day15).click()

    const input = container.querySelector('input') as HTMLInputElement
    expect(input.value).toMatch(/^15-\d{2}-\d{4}$/)
  })
})

describe('given an invalid BasicDatePicker', () => {
  it('marks the input as invalid with a different outline than a valid one', async () => {
    const valid = await render(<BasicDatePicker />)
    const validShadow = getComputedStyle(
      valid.container.querySelector('input') as Element,
    ).boxShadow

    const { container } = await render(<BasicDatePicker isInvalid />)
    const input = query(container, 'input')

    await expect.element(input).toHaveAttribute('aria-invalid', 'true')
    await expect.element(input).not.toHaveStyle({ boxShadow: 'none' })
    await expect.element(input).not.toHaveStyle({ boxShadow: validShadow })
  })

  it('keeps the invalid outline while focused', async () => {
    const { container } = await render(<BasicDatePicker isInvalid />)
    const input = query(container, 'input')
    const restingShadow = getComputedStyle(input.element()).boxShadow

    await input.click()
    await expect.element(input).toHaveStyle({ boxShadow: restingShadow })
  })
})

describe('given a read-only BasicDatePicker', () => {
  it('uses a transparent background and a subtle bottom border', async () => {
    const { container } = await render(
      <BasicDatePicker
        isReadOnly
        defaultDate={new Date(2025, 4, 15)}
      />,
    )
    const input = query(container, 'input')

    await expect.element(input).toHaveAttribute('readonly')
    await expect
      .element(input)
      .toHaveStyle({ backgroundColor: 'rgba(0, 0, 0, 0)' })
    await expect.element(input).toHaveStyle({
      borderBottomColor: tokenColor('--midas-border-color-subtle'),
    })
  })

  it('keeps the background on hover', async () => {
    const { container } = await render(<BasicDatePicker isReadOnly />)
    const input = query(container, 'input')

    await input.hover()
    await expect
      .element(input)
      .toHaveStyle({ backgroundColor: 'rgba(0, 0, 0, 0)' })

    await query(container, '.react-datepicker__calendar-icon').hover()
    await expect
      .element(input)
      .toHaveStyle({ backgroundColor: 'rgba(0, 0, 0, 0)' })
  })
})

describe('given a disabled BasicDatePicker', () => {
  it('uses the disabled text color', async () => {
    const { container } = await render(
      <BasicDatePicker
        isDisabled
        defaultDate={new Date(2025, 4, 15)}
      />,
    )
    await expect
      .element(query(container, 'input'))
      .toHaveStyle({ color: tokenColor('--midas-text-disabled') })
  })

  it('uses the disabled field background', async () => {
    const { container } = await render(<BasicDatePicker isDisabled />)
    const probe = document.createElement('span')
    probe.style.backgroundColor = 'var(--midas-field-01-disabled)'
    document.body.append(probe)
    const disabledBackground = getComputedStyle(probe).backgroundColor
    probe.remove()

    await expect
      .element(query(container, 'input'))
      .toHaveStyle({ backgroundColor: disabledBackground })
  })

  it('dims the calendar icon', async () => {
    const { container } = await render(<BasicDatePicker isDisabled />)
    await expect
      .element(query(container, '.react-datepicker__calendar-icon'))
      .toHaveStyle({ color: tokenColor('--midas-text-disabled') })
  })
})

describe('given a rendered MonthPicker', () => {
  it('makes the keyboard cursor look like any other month after changing year', async () => {
    const { container } = await render(<MonthPicker open />)
    const january = '.react-datepicker__month-text.react-datepicker__month-0'
    await query(container, january).click()
    await query(container, '.react-datepicker__navigation--next').click()

    const cursorMonth = query(container, january)
    await expect
      .element(cursorMonth)
      .toHaveClass('react-datepicker__month-text--keyboard-selected')

    const plainMonth = container.querySelector(
      '.react-datepicker__month-text.react-datepicker__month-5',
    ) as Element
    // month-text animates background-color, toHaveStyle polls until it's done
    await expect.element(cursorMonth).toHaveStyle({
      backgroundColor: getComputedStyle(plainMonth).backgroundColor,
    })
  })

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
