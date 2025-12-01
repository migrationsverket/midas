import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './TextArea.stories'
import styles from '@midas-ds/components/textfield/TextField.module.css'
import { render } from 'vitest-browser-react'

const { Primary, Required, CustomValidation, MaxLength, ShowCounter } =
  composeStories(stories)

const stringOfLength = (length: number) => new Array(length + 1).join('x')
const handleBlur = vi.fn()
const handleFocus = vi.fn()

describe('given a Primary TextArea', async () => {
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
      .toHaveClass(styles.textArea, 'test-class')
  })
})

describe('given a required TextArea', async () => {
  it('should give a validation error if the user entered no text', async () => {
    const { getByText } = await render(<Required />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText(Required.args.errorMessage as string))
      .toBeInTheDocument()
  })
})

describe('given a TextArea with custom validation', async () => {
  it('should give a validation error if the user entered an unpermitted text', async () => {
    const { getByText } = await render(<CustomValidation />)

    await userEvent.tab()
    await userEvent.keyboard('abc')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText('Only numbers are allowed'))
      .toBeInTheDocument()
  })
})

describe('given a TextArea with maxLength defined', async () => {
  it('should not be possible to exceed the maxLength property', async () => {
    const { getByRole } = await render(<MaxLength />)
    const maxLength = MaxLength.args.maxLength as number
    const randomString = stringOfLength(maxLength + 1)

    await userEvent.tab()
    await userEvent.keyboard(randomString)

    expect(
      (getByRole('textbox').element() as HTMLTextAreaElement).value.length,
    ).toBe(maxLength)
  })
})

describe('given a TextArea with showCounter', async () => {
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
