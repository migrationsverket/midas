import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import styles from './SearchField.module.css'
import * as stories from './SearchField.stories'
import { render } from '../../test-utils'

const {
  Primary,
  CustomValidation,
  Invalid,
  WithoutButton,
  WithHelpPopover,
  WithLabelAndDescription,
} = composeStories(stories)

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

    await expect.element(page.getByRole('searchbox')).not.toHaveFocus()

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

    await expect
      .element(page.getByRole('button', { name: 'Find' }))
      .toBeInTheDocument()
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

  it('should render the error message above the input when errorPosition is top', async () => {
    const { getByRole, getByText } = await render(
      <Invalid errorPosition='top' />,
    )

    const errorRect = getByText(Invalid.args.errorMessage as string)
      .element()
      .getBoundingClientRect()
    const inputRect = getByRole('searchbox').element().getBoundingClientRect()

    expect(errorRect.bottom).toBeLessThanOrEqual(inputRect.top)
  })

  it('should render the error message below the input when errorPosition is bottom', async () => {
    const { getByRole, getByText } = await render(
      <Invalid errorPosition='bottom' />,
    )

    const container = document.querySelector(
      `.${styles.container}`,
    ) as HTMLElement
    expect(container.lastElementChild?.textContent).toContain(
      Invalid.args.errorMessage,
    )

    const inputRect = getByRole('searchbox').element().getBoundingClientRect()
    const errorRect = getByText(Invalid.args.errorMessage as string)
      .element()
      .getBoundingClientRect()

    expect(inputRect.bottom).toBeLessThanOrEqual(errorRect.top)
  })
})

// --- Form submission behaviour ---
// These tests cover how SearchField interacts with a parent <form>.
// The core contract: if onSubmit is provided, SearchField owns the submit
// interaction and the form must not submit. If onSubmit is omitted,
// SearchField should behave like a native <input> and let the form submit.

describe('given a SearchField with onSubmit inside a <form>', async () => {
  const handleFormSubmit = vi.fn()

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should fire onSubmit and NOT submit the form when Enter is pressed', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary onSubmit={handleSubmit} />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    expect(handleSubmit).toHaveBeenCalledWith('hello')
    expect(handleFormSubmit).not.toHaveBeenCalled()
  })

  it('should fire onSubmit and NOT submit the form when the search button is clicked', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary onSubmit={handleSubmit} />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.click(page.getByRole('button').last())

    expect(handleSubmit).toHaveBeenCalledWith('hello')
    expect(handleFormSubmit).not.toHaveBeenCalled()
  })

  it('should NOT fire onSubmit or submit the form when the value is empty', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary onSubmit={handleSubmit} />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handleSubmit).not.toHaveBeenCalled()
    expect(handleFormSubmit).not.toHaveBeenCalled()
  })

  it('should NOT fire onSubmit or submit the form when isInvalid is true', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary
          onSubmit={handleSubmit}
          isInvalid
        />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    expect(handleSubmit).not.toHaveBeenCalled()
    expect(handleFormSubmit).not.toHaveBeenCalled()
  })
})

describe('given a SearchField without onSubmit inside a <form>', async () => {
  const handleFormSubmit = vi.fn()

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should submit the form when Enter is pressed with a value', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    expect(handleFormSubmit).toHaveBeenCalledOnce()
  })

  it('should NOT submit the form when Enter is pressed with an empty value', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handleFormSubmit).not.toHaveBeenCalled()
  })

  it('should NOT submit the form when isInvalid is true', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary isInvalid />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    expect(handleFormSubmit).not.toHaveBeenCalled()
  })

  it('should submit the form on Enter when showButton is false', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary showButton={false} />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    expect(handleFormSubmit).toHaveBeenCalledOnce()
  })

  it('should NOT submit the form when the search button is clicked (type=button)', async () => {
    await render(
      <form
        onSubmit={e => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <Primary />
      </form>,
    )

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.click(page.getByRole('button').last())

    expect(handleFormSubmit).not.toHaveBeenCalled()
  })
})

describe('given a SearchField without onSubmit outside a <form>', async () => {
  it('should do nothing when Enter is pressed', async () => {
    // No errors should be thrown and no side effects should occur.
    await render(<Primary />)

    await userEvent.tab()
    await userEvent.keyboard('hello')
    await userEvent.keyboard('[Enter]')

    await expect.element(page.getByRole('searchbox')).toHaveValue('hello')
  })
})

describe('given a SearchField with a label', async () => {
  it('should render the label and use it as the accessible name', async () => {
    const { getByRole, getByText } = await render(<WithLabelAndDescription />)

    await expect
      .element(getByText(WithLabelAndDescription.args.label as string))
      .toBeVisible()
    await expect
      .element(getByRole('searchbox'))
      .toHaveAccessibleName(WithLabelAndDescription.args.label as string)
  })
})

describe('given a SearchField with a description', async () => {
  it('should render the description and associate it via aria-describedby', async () => {
    const { getByRole, getByText } = await render(<WithLabelAndDescription />)

    await expect
      .element(getByText(WithLabelAndDescription.args.description as string))
      .toBeVisible()
    await expect
      .element(getByRole('searchbox'))
      .toHaveAccessibleDescription(
        WithLabelAndDescription.args.description as string,
      )
  })
})

describe('given a SearchField with a label and description', async () => {
  it('should stack them vertically instead of rendering inline', async () => {
    const { getByText, getByRole } = await render(<WithLabelAndDescription />)

    const labelRect = getByText(WithLabelAndDescription.args.label as string)
      .element()
      .getBoundingClientRect()
    const descriptionRect = getByText(
      WithLabelAndDescription.args.description as string,
    )
      .element()
      .getBoundingClientRect()
    const inputRect = getByRole('searchbox').element().getBoundingClientRect()

    expect(labelRect.bottom).toBeLessThanOrEqual(descriptionRect.top)
    expect(descriptionRect.bottom).toBeLessThanOrEqual(inputRect.top)
  })
})

describe('given a SearchField without a label', async () => {
  it('should fall back to placeholder as the accessible name', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('searchbox'))
      .toHaveAccessibleName(Primary.args.placeholder as string)
  })
})

describe('given a SearchField with a help popover', async () => {
  it('should render the popover trigger', async () => {
    const { getByRole } = await render(<WithHelpPopover />)

    await expect
      .element(getByRole('button', { name: 'Mer information' }))
      .toBeInTheDocument()
  })

  it('should be possible to focus the popover trigger using the keyboard', async () => {
    const { getByRole } = await render(<WithHelpPopover />)
    await userEvent.tab()
    await expect.element(getByRole('button').first()).toHaveFocus()
  })
})
