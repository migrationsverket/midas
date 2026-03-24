import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import styles from './SearchField.module.css'
import * as stories from './SearchField.stories'
import { render } from '../../test-utils'

const { Primary, CustomValidation, Invalid, WithoutButton } = composeStories(stories)

const handleChange = vi.fn()
const handleSubmit = vi.fn()

describe('given a primary SearchField', async () => {
  beforeEach(async () => {
    await render(
      <Primary
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be possible to submit a search string using only the keyboard', async () => {
    await userEvent.keyboard('[Enter]')

    expect(handleChange).toHaveBeenCalledWith('hello')
    expect(handleSubmit).toHaveBeenCalledWith('hello')
  })

  it('should show a clear button when the input has a value', async () => {
    await expect
      .element(page.getByRole('button', { name: 'Clear search' }))
      .toBeInTheDocument()
  })

  it('should clear the input and hide the clear button when clear is pressed', async () => {
    await userEvent.click(page.getByRole('button', { name: 'Clear search' }))

    await expect.element(page.getByRole('searchbox')).toHaveValue('')
    await expect
      .element(page.getByRole('button', { name: 'Clear search' }))
      .not.toBeInTheDocument()
  })

  it('should accept custom classNames', async () => {
    await expect
      .element(document.querySelector(`.${styles.container}`) as HTMLElement)
      .toHaveClass(Primary.args.className as string)
  })
})

describe('given a SearchField with showButton={false}', async () => {
  it('should not render a submit button', async () => {
    await render(<WithoutButton />)

    await expect.element(page.getByRole('button')).not.toBeInTheDocument()
  })
})

describe('given a SearchField with the default built-in button', async () => {
  beforeEach(async () => {
    await render(
      <Primary
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be possible to submit a search string using the mouse', async () => {
    await userEvent.click(page.getByRole('button').last())

    expect(handleChange).toHaveBeenCalledWith('hello')
    expect(handleSubmit).toHaveBeenCalledWith('hello')
  })

  it('should not include the submit button in the tab order', async () => {
    await userEvent.tab()

    await expect
      .element(page.getByRole('searchbox'))
      .not.toHaveFocus()

    expect(handleSubmit).not.toHaveBeenCalled()
  })
})

describe('given a SearchField with only buttonText set (backward compat)', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should show the button when only buttonText is passed', async () => {
    await render(
      <Primary
        buttonText='Find'
        onSubmit={handleSubmit}
      />,
    )

    await expect.element(page.getByRole('button', { name: 'Find' })).toBeInTheDocument()
  })
})

describe('given a SearchField with custom validation', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should give a validation error if the user entered an unpermitted text', async () => {
    const { getByText } = await render(
      <CustomValidation
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    )

    await userEvent.tab()
    await userEvent.keyboard('secret')
    await userEvent.tab()

    expect(handleChange).toHaveBeenCalledWith('secret')
    expect(handleSubmit).not.toHaveBeenCalled()
    await expect
      .element(getByText('Sök inte efter hemligheter'))
      .toBeInTheDocument()
  })
})

describe('given an invalid SearchField', async () => {
  it('should be invalid and show a custom error message', async () => {
    const { getByRole, getByText } = await render(<Invalid />)

    await expect.element(getByRole('searchbox')).toBeInvalid()
    await expect
      .element(getByText(Invalid.args.errorMessage as string))
      .toBeInTheDocument()
  })

  it('should render the error message below the input when errorPosition is bottom', async () => {
    await render(<Invalid errorPosition='bottom' />)

    const container = document.querySelector(`.${styles.container}`) as HTMLElement
    expect(container.lastElementChild?.textContent).toContain(Invalid.args.errorMessage)
  })
})
