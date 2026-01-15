import { describe, expect, it, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Select.stories'
import { options } from '../utils/tests'
import { page, userEvent } from 'vitest/browser'
import { render } from 'vitest-browser-react'

const {
  Primary,
  DefaultValue,
  AllKeysSelected,
  WithTags,
  SelectAllEnabled,
  DynamicSections,
  RequiredSingleSelect,
  DS872,
} = composeStories(stories)

const handleSubmit = vi.fn()

describe('given a primary Select', async () => {
  it('should be possible to select an item using the keyboard', async () => {
    const { getByTestId, getByText } = await render(<Primary />)

    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    const selectedValue = options[0].name as string

    await expect
      .element(
        getByTestId('hidden-select-container').getByText(selectedValue, {
          exact: true,
        }),
      )
      .toBeInTheDocument()

    await expect.element(getByText(selectedValue).first()).toBeVisible()
  })
})

describe('given a Select with a default value', async () => {
  it('should display and reflect the pre-selected value', async () => {
    const { getByTestId } = await render(<DefaultValue />)

    const value = ['Banana', 'Kiwi']

    value.forEach(async name => {
      await expect
        .element(
          getByTestId('hidden-select-container').getByText(name, {
            exact: true,
          }),
        )
        .toBeInTheDocument()
    })

    await expect.element(page.getByText('2')).toBeVisible()
  })
})

describe('given a Select with all keys selected as default', async () => {
  it('should display and reflect the pre-selected values', async () => {
    const { getByTestId } = await render(<AllKeysSelected />)

    const visibleValue = page.getByText('2')

    options.forEach(async ({ name }) => {
      await expect
        .element(
          getByTestId('hidden-select-container').getByText(name, {
            exact: true,
          }),
        )
        .toBeInTheDocument()
    })

    await expect.element(visibleValue).toBeVisible()
  })
})

describe('given a Select with showTags', async () => {
  it('should display and reflect the pre-selected values', async () => {
    const { getByTestId } = await render(<WithTags />)

    const visibleValue = page.getByText('2')
    const value = ['Apple', 'Kiwi']

    value.forEach(async name => {
      await expect
        .element(
          getByTestId('hidden-select-container').getByText(name, {
            exact: true,
          }),
        )
        .toBeInTheDocument()
    })

    await expect.element(visibleValue).toBeVisible()
    await expect
      .element(
        getByTestId('hidden-select-container').getByText('Apple', {
          exact: true,
        }),
      )
      .toBeVisible()
    await expect.element(page.getByRole('grid').getByText('Kiwi')).toBeVisible()
  })
})

describe('given a Select with select all enabled', async () => {
  it('should be possible to select all items', async () => {
    const { getByTestId } = await render(<SelectAllEnabled />)

    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.tab({ shift: true })
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Escape]')

    const visibleValue = page.getByText(`${options.length}`)

    options.forEach(
      async ({ name }) =>
        await expect
          .element(
            getByTestId('hidden-select-container').getByText(name, {
              exact: true,
            }),
          )
          .toBeInTheDocument(),
    )

    await expect.element(visibleValue).toBeVisible()
  })
})

describe('given a sectioned Select ', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(vi.fn())

  afterEach(async () => {
    vi.resetAllMocks()
  })

  it('It should not warn about missing aria labels when toggling the select open state', async () => {
    await render(<DynamicSections />)

    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    expect(warn).toHaveBeenCalledTimes(0)
  })
})

describe('given a required single Select ', async () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should give a validation error if the user submitted without selecting an option', async () => {
    await render(<RequiredSingleSelect />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(handleSubmit).not.toHaveBeenCalled()
  })
})

describe('given a DS872 ', async () => {
  it('should be possible to select an item with an ID greater than 9', async () => {
    const { getByTestId } = await render(<DS872 />)

    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(
        getByTestId('hidden-select-container').getByText('tolv', {
          exact: true,
        }),
      )
      .toBeInTheDocument()
  })
})
