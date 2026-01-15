import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import styles from './SearchField.module.css'
import * as stories from './SearchField.stories'
import { render } from 'vitest-browser-react'

const { Primary, CustomValidation, Invalid } = composeStories(stories)

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

  it('should be possible to submit a search string using the mouse', async () => {
    await userEvent.click(page.getByRole('button').last())

    expect(handleChange).toHaveBeenCalledWith('hello')
    expect(handleSubmit).toHaveBeenCalledWith('hello')
  })

  it('should accept custom classNames', async () => {
    await expect
      .element(document.querySelector(`.${styles.container}`) as HTMLElement)
      .toHaveClass(Primary.args.className as string)
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
    await userEvent.keyboard('[Enter]')

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
})
