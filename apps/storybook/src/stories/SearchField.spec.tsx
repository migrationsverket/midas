import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import styles from '@midas-ds/components/search-field/SearchField.module.css'
import * as stories from './SearchField.stories'

const { Primary, CustomValidation, Invalid } = composeStories(stories)

const onChange = vi.fn()
const onSubmit = vi.fn()

describe('given a primary SearchField', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        onChange,
        onSubmit,
      },
    })
    await userEvent.tab()
    await userEvent.keyboard('hello')
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should be possible to submit a search string using only the keyboard', async () => {
    await userEvent.keyboard('[Enter]')

    expect(onChange).toHaveBeenCalledWith('hello')
    expect(onSubmit).toHaveBeenCalledWith('hello')
  })

  it('should be possible to submit a search string using the mouse', async () => {
    await userEvent.click(page.getByText(Primary.args.buttonText as string))

    expect(onChange).toHaveBeenCalledWith('hello')
    expect(onSubmit).toHaveBeenCalledWith('hello')
  })

  it('should accept custom classNames', async () => {
    expect(document.querySelector(`.${styles.container}`)).toHaveClass(
      Primary.args.className as string,
    )
  })
})

describe('given a SearchField with custom validation', async () => {
  beforeEach(async () => {
    await CustomValidation.run({
      args: {
        ...CustomValidation.args,
        onChange,
        onSubmit,
      },
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await userEvent.tab()
    await userEvent.keyboard('secret')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(onChange).toHaveBeenCalledWith('secret')
    expect(onSubmit).not.toHaveBeenCalled()
    expect(page.getByText('Sök inte efter hemligheter')).toBeInTheDocument()
  })
})

describe('given an invalid SearchField', async () => {
  beforeEach(async () => {
    await Invalid.run()
  })

  it('should be invalid', async () => {
    expect(page.getByRole('searchbox')).toBeInvalid()
  })

  it('should show a custom error message', async () => {
    expect(
      page.getByText(Invalid.args.errorMessage as string),
    ).toBeInTheDocument()
  })
})
