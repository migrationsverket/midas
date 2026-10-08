import { describe, expect, it } from 'vitest'
import { page } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import styles from './Checkbox.module.css'
import { render } from '../../test-utils'
import * as stories from './Checkbox.stories'
import { Checkbox } from './Checkbox'

const {
  Primary,
  Required,
  Selected,
  Indeterminate,
  Invalid,
  WithDescription,
  WithErrorMessage,
} = composeStories(stories)

describe('given a primary Checkbox', async () => {
  it('should preserve its classnames when given new ones', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(
        container.querySelector(`.${styles.checkboxButton}`) as HTMLElement,
      )
      .toHaveClass(styles.checkboxButton, Primary.args.className as string)
  })
})

describe('given a selected Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Selected />)
    const wrapper = page.elementLocator(
      container.querySelector(`.${styles.checkboxButton}`) as Element,
    )
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given an indeterminate Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Indeterminate />)
    const wrapper = page.elementLocator(
      container.querySelector(`.${styles.checkboxButton}`) as Element,
    )
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given an invalid Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Invalid />)
    const wrapper = page.elementLocator(
      container.querySelector(`.${styles.checkboxButton}`) as Element,
    )
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given a required Checkbox', async () => {
  it('should be (aria) invalid if the user submitted without checking the box', async () => {
    const { getByRole } = await render(<Required />)
    const checkbox = getByRole('checkbox')
    const submitButton = getByRole('button')

    await submitButton.click()

    await expect.element(checkbox).toHaveFocus()
    await expect.element(checkbox).toBeInvalid()
  })
})

describe('given a Checkbox with a description', async () => {
  it('should render the description and associate it via aria-describedby', async () => {
    const { getByRole, getByText } = await render(<WithDescription />)
    const checkbox = getByRole('checkbox')
    const description = getByText(WithDescription.args.description as string)

    await expect.element(description).toBeVisible()
    await expect
      .element(checkbox)
      .toHaveAccessibleDescription(WithDescription.args.description as string)
  })

  it('should not toggle the checkbox when clicking the description', async () => {
    const { getByRole, getByText } = await render(<WithDescription />)
    const checkbox = getByRole('checkbox')
    const description = getByText(WithDescription.args.description as string)

    await description.click()

    await expect.element(checkbox).not.toBeChecked()
  })
})

describe('given an invalid Checkbox with an error message', async () => {
  it('should render the error message and associate it via aria-describedby', async () => {
    const { getByRole, getByText } = await render(<WithErrorMessage />)
    const checkbox = getByRole('checkbox')
    const errorMessage = getByText(WithErrorMessage.args.errorMessage as string)

    await expect.element(errorMessage).toBeVisible()
    await expect
      .element(checkbox)
      .toHaveAccessibleDescription(WithErrorMessage.args.errorMessage as string)
  })
})

// Tests in apps click checkboxes by test id. It has to be on the label, not
// the full-width field wrapper around it, or the click doesn't check it.
// A bare dispatched click on the label (fireEvent.click) doesn't check a React
// Aria checkbox at all, not even RAC's own Checkbox, so it isn't tested here.
describe('given a Checkbox with a test id', () => {
  it('should put the test id on the label', async () => {
    const { getByTestId } = await render(
      <Checkbox data-testid='checkbox'>Accept</Checkbox>,
    )

    expect(getByTestId('checkbox').element().tagName).toBe('LABEL')
  })

  it('should be checked when its test id is clicked', async () => {
    const { getByTestId, getByRole } = await render(
      <Checkbox data-testid='checkbox'>Accept</Checkbox>,
    )

    await getByTestId('checkbox').click()

    await expect.element(getByRole('checkbox')).toBeChecked()
  })
})
