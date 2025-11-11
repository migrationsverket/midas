import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './TextField.stories'
import styles from '@midas-ds/components/textfield/TextField.module.css'

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

const onBlur = vi.fn()
const onFocus = vi.fn()

describe('given a Primary TextField', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        className: 'test-class',
        onBlur,
        onFocus,
      },
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should call onFocus once', async () => {
    await userEvent.tab()
    expect(onFocus).toHaveBeenCalledOnce()
  })

  it('should call onBlur once', async () => {
    await userEvent.tab()
    await userEvent.tab()
    expect(onBlur).toHaveBeenCalledOnce()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('textbox')).toHaveClass(styles.input, 'test-class')
  })
})

describe('given a Password TextField', async () => {
  beforeEach(async () => {
    await Password.run()
  })

  it('should toggle the password when clicking "Show" and "Hide"', async () => {
    const password = 'secret'
    await userEvent.tab()
    await userEvent.keyboard('secret')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    const passwordText = page.getByText(password)
    expect(page.getByText(password)).toBeInTheDocument()
    await userEvent.keyboard('[Enter]')
    await expect.poll(() => passwordText.query()).not.toBeInTheDocument()
  })
})

describe('given an invalid TextField', async () => {
  beforeEach(async () => {
    await Invalid.run()
  })

  it('should be invalid', async () => {
    expect(page.getByRole('textbox')).toBeInvalid()
  })
})

describe('given a required TextField', async () => {
  beforeEach(async () => {
    await Required.run()
  })

  it('should give a validation error if the user entered no text', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByRole('textbox')).toBeInvalid()
  })
})

describe('given a TextField with custom validation', async () => {
  beforeEach(async () => {
    await CustomValidation.run()
  })

  it('should give a validation error if the user entered an unpermitted text', async () => {
    expect(page.getByRole('textbox')).toHaveClass('valid')
    await userEvent.tab()
    await userEvent.keyboard('abc')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByText('Only numbers are allowed')).toBeInTheDocument()
    expect(page.getByRole('textbox')).toHaveClass('invalid')
  })
})

describe('given DS1243', async () => {
  beforeEach(async () => {
    await DS1243.run()
  })

  it('should not require more height than neccessary', async () => {
    const textField = page.getByTestId('wrapper').element()
      .childNodes[0] as HTMLElement
    const input = page.getByRole('textbox').element()

    const { height: textFieldHeight } = textField.getBoundingClientRect()
    const { height: inputHeight } = input.getBoundingClientRect()

    expect(textFieldHeight).toEqual(inputHeight)
  })
})

describe('given a TextField with type="number"', async () => {
  it('should not allow any non number input', async () => {
    await Number.run()
    await userEvent.tab()
    await userEvent.keyboard('abc')
    expect(page.getByRole('spinbutton')).toHaveValue(null)
  })

  it('should not allow numbers below the "min" threshold', async () => {
    await Number.run({
      args: {
        ...Number.args,
        min: 0,
      },
    })
    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')
    expect(page.getByRole('spinbutton')).toHaveValue(0)
  })
})

describe('given a TextField with showCounter', async () => {
  beforeEach(async () => {
    await ShowCounter.run()
  })

  it('should show the correct count for its initial value', async () => {
    expect(
      page.getByText('I love apples'.length.toString()),
    ).toBeInTheDocument()
  })

  describe('using defaultValue', async () => {
    beforeEach(async () => {
      await ShowCounter.run({
        args: {
          ...ShowCounter.args,
          value: undefined,
          defaultValue: 'HEJ',
        },
      })
    })

    it('should show the correct count for its initial value', async () => {
      expect(page.getByText('HEJ'.length.toString())).toBeInTheDocument()
    })
  })
})
