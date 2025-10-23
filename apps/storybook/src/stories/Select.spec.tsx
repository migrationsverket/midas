import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './Select.stories'
import { options } from '../utils/storybook'

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

const onSubmit = vi.fn()

describe('given a primary Select', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should be possible to select an item using the keyboard', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    const selectedValue = options[0].name as string

    expect(
      page
        .getByTestId('hidden-select-container')
        .getByText(selectedValue, { exact: true }),
    ).toBeInTheDocument()

    expect(page.getByText(selectedValue).first()).toBeVisible()
  })
})

describe('given a Select with a default value', async () => {
  beforeEach(async () => {
    await DefaultValue.run()
  })

  it('should display and reflect the pre-selected value', async () => {
    const value = ['Banana', 'Kiwi']

    value.forEach(name => {
      expect(
        page
          .getByTestId('hidden-select-container')
          .getByText(name, { exact: true }),
      ).toBeInTheDocument()
    })

    expect(page.getByText('2 valda')).toBeVisible()
  })
})

describe('given a Select with all keys selected as default', async () => {
  beforeEach(async () => {
    await AllKeysSelected.run()
  })

  it('should display and reflect the pre-selected values', async () => {
    const visibleValue = page.getByText(/valda/)

    options.forEach(({ name }) => {
      expect(
        page
          .getByTestId('hidden-select-container')
          .getByText(name, { exact: true }),
      ).toBeInTheDocument()
    })

    expect(visibleValue).toBeVisible()
  })
})

describe('given a Select with showTags', async () => {
  beforeEach(async () => {
    await WithTags.run()
  })

  it('should display and reflect the pre-selected values', async () => {
    const visibleValue = page.getByText('2 valda')
    const value = ['Apple', 'Kiwi']

    value.forEach(name => {
      expect(
        page
          .getByTestId('hidden-select-container')
          .getByText(name, { exact: true }),
      ).toBeInTheDocument()
    })

    expect(visibleValue).toBeVisible()
    expect(
      page
        .getByTestId('hidden-select-container')
        .getByText('Apple', { exact: true }),
    ).toBeVisible()
    expect(page.getByLabelText('Valda objekt').getByText('Kiwi')).toBeVisible()
  })
})

describe('given a Select with select all enabled', async () => {
  beforeEach(async () => {
    await SelectAllEnabled.run()
  })

  it('should be possible to select all items', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.tab({ shift: true })
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Escape]')

    const visibleValue = page.getByText(`${options.length} valda`)

    options.forEach(({ name }) =>
      expect(
        page
          .getByTestId('hidden-select-container')
          .getByText(name, { exact: true }),
      ).toBeInTheDocument(),
    )

    expect(visibleValue).toBeVisible()
  })
})

describe('given a sectioned Select ', async () => {
  const warn = vi.spyOn(console, 'warn').mockImplementation(vi.fn())

  beforeEach(async () => {
    await DynamicSections.run()
  })

  it('It should not warn about missing aria labels when toggling the select open state', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    expect(warn).toHaveBeenCalledTimes(0)
  })
})

describe('given a required single Select ', async () => {
  beforeEach(async () => {
    await RequiredSingleSelect.run()
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should give a validation error if the user submitted without selecting an option', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(onSubmit).not.toHaveBeenCalled()
  })
})

describe('given a DS872 ', async () => {
  beforeEach(async () => {
    await DS872.run()
  })

  it('should be possible to select an item with an ID greater than 9', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')
    expect(
      page
        .getByTestId('hidden-select-container')
        .getByText('tolv', { exact: true }),
    ).toBeInTheDocument()
  })
})
