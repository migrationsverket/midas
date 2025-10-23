import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './ComboBox.stories'
import styles from '@midas-ds/components/combobox/ComboBox.module.css'

const { Primary, Required, Sectioned } = composeStories(stories)

describe('given a primary ComboBox', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('it should preserve its classNames when being passed new ones', async () => {
    expect(document.querySelector(`.${styles.combobox}`)).toHaveClass(
      styles.combobox,
      'test',
    )
  })

  it('should select the text when clicking in a combobox with a selected value (DS1253)', async () => {
    const comboBox = page.getByRole('combobox')
    await userEvent.click(comboBox)
    await userEvent.keyboard('Apple')
    await userEvent.click(comboBox)

    expect(window?.getSelection()?.toString()).toBe('Apple')
  })
})

describe('given a Required ComboBox', async () => {
  beforeEach(async () => {
    await Required.run({
      args: {
        ...Required.args,
        errorMessage: 'Custom error message',
      },
    })
  })

  it('should be (aria) invalid and show a validation error message if the user submitted without selecting anything', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(page.getByRole('combobox')).toBeInvalid()
    expect(page.getByText('Custom error message')).toBeInTheDocument()
  })
})

describe('given a Sectioned ComboBox', async () => {
  beforeEach(async () => {
    await Sectioned.run()
  })

  it('The label should preserve its id when opening and closing the list box (DS1207)', async () => {
    expect(
      page.getByRole('combobox', {
        name: Sectioned.args.label as string,
      }),
    ).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Escape]')

    expect(
      page.getByRole('combobox', {
        name: Sectioned.args.label as string,
      }),
    ).toBeInTheDocument()
  })
})
