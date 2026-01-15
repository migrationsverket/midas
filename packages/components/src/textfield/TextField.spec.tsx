import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './TextField.stories'
import styles from './TextField.module.css'
import { render } from 'vitest-browser-react'

const {
  Primary,
  Password,
  Invalid,
  Required,
  CustomValidation,
  Number,
  ShowCounter,
  DS1243,
} = composeStories(stories)

const handleBlur = vi.fn()
const handleFocus = vi.fn()

describe('given a Primary TextField', async () => {
  beforeEach(async () => {
    await render(
      <Primary
        className='test-class'
        onBlur={handleBlur}
        onFocus={handleFocus}
      />,
    )
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should call event handlers once', async () => {
    await userEvent.tab()
    await userEvent.tab()

    expect(handleFocus).toHaveBeenCalledOnce()
    expect(handleBlur).toHaveBeenCalledOnce()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    await expect
      .element(page.getByRole('textbox'))
      .toHaveClass(styles.input, 'test-class')
  })
})

describe('given a Password TextField', async () => {
  it('should toggle the password when clicking "Show" and "Hide"', async () => {
    const { getByText } = await render(<Password />)
    const password = 'secret'

    await userEvent.tab()
    await userEvent.keyboard('secret')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(getByText(password)).toBeInTheDocument()

    await userEvent.keyboard('[Enter]')
    await expect.element(getByText(password)).not.toBeInTheDocument()
  })
})

describe('given an invalid TextField', async () => {
  it('should be invalid', async () => {
    const { getByRole } = await render(<Invalid />)

    await expect.element(getByRole('textbox')).toBeInvalid()
  })
})

describe('given a required TextField', async () => {
  it('should give a validation error if the user entered no text', async () => {
    const { getByRole } = await render(<Required />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(getByRole('textbox')).toBeInvalid()
  })
})

describe('given a TextField with custom validation', async () => {
  it('should give a validation error if the user entered an unpermitted text', async () => {
    const { getByRole, getByText } = await render(<CustomValidation />)

    await expect.element(getByRole('textbox')).toHaveClass('valid')

    await userEvent.tab()
    await userEvent.keyboard('abc')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText('Only numbers are allowed'))
      .toBeInTheDocument()
    await expect.element(getByRole('textbox')).toHaveClass('invalid')
  })
})

describe('given DS1243', async () => {
  it('should not require more height than neccessary', async () => {
    const { getByTestId, getByRole } = await render(<DS1243 />)

    const textField = getByTestId('wrapper').element()
      .childNodes[0] as HTMLElement
    const input = getByRole('textbox').element()

    const { height: textFieldHeight } = textField.getBoundingClientRect()
    const { height: inputHeight } = input.getBoundingClientRect()

    expect(textFieldHeight).toEqual(inputHeight)
  })
})

describe('given a TextField with type="number"', async () => {
  it('should not allow any non number input', async () => {
    const { getByRole } = await render(<Number />)

    await userEvent.tab()
    await userEvent.keyboard('abc')

    await expect.element(getByRole('spinbutton')).toHaveValue(null)
  })

  it('should not allow numbers below the "min" threshold', async () => {
    const { getByRole } = await render(<Number min={0} />)

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(getByRole('spinbutton')).toHaveValue(0)
  })
})

describe('given a TextField with showCounter', async () => {
  it('should show the correct count for its initial value', async () => {
    const { getByText } = await render(<ShowCounter />)

    await expect
      .element(getByText('I love apples'.length.toString()))
      .toBeInTheDocument()
  })

  describe('using defaultValue', async () => {
    it('should show the correct count for its initial value', async () => {
      const { getByText } = await render(<ShowCounter defaultValue='HEJ' />)

      await expect
        .element(getByText('HEJ'.length.toString()))
        .toBeInTheDocument()
    })
  })
})
