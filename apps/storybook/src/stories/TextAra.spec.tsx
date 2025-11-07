import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './TextArea.stories'
import styles from '@midas-ds/components/textfield/TextField.module.css'

const { Primary, Required, CustomValidation, MaxLength, ShowCounter } =
  composeStories(stories)

const stringOfLength = (length: number) => new Array(length + 1).join('x')
const onBlur = vi.fn()
const onFocus = vi.fn()

describe('given a Primary TextArea', async () => {
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
    expect(page.getByRole('textbox')).toHaveClass(styles.textArea, 'test-class')
  })
})

describe('given a required TextArea', async () => {
  beforeEach(async () => {
    await Required.run()
  })

  it('should give a validation error if the user entered no text', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(
      page.getByText(Required.args.errorMessage as string),
    ).toBeInTheDocument()
  })
})

describe('given a TextArea with custom validation', async () => {
  beforeEach(async () => {
    await CustomValidation.run()
  })

  it('should give a validation error if the user entered an unpermitted text', async () => {
    await userEvent.tab()
    await userEvent.keyboard('abc')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByText('Only numbers are allowed')).toBeInTheDocument()
  })
})

describe('given a TextArea with maxLength defined', async () => {
  beforeEach(async () => {
    await MaxLength.run()
  })

  it('should not be possible to exceed the maxLength property', async () => {
    const maxLength = MaxLength.args.maxLength as number
    const randomString = stringOfLength(maxLength + 1)
    await userEvent.tab()
    await userEvent.keyboard(randomString)
    expect(
      (page.getByRole('textbox').element() as HTMLTextAreaElement).value.length,
    ).toBe(maxLength)
  })
})

describe('given a TextArea with showCounter', async () => {
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
