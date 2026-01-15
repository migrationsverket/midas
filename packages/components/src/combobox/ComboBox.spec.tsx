import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './ComboBox.stories'
import styles from './ComboBox.module.css'
import { render } from 'vitest-browser-react'

const { Primary, Required, Sectioned } = composeStories(stories)

describe('given a primary ComboBox', async () => {
  it('it should preserve its classNames when being passed new ones', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.combobox}`) as HTMLElement)
      .toHaveClass(styles.combobox, 'test')
  })

  it('should select the text when clicking in a combobox with a selected value (DS1253)', async () => {
    const { getByRole } = await render(<Primary />)

    const comboBox = getByRole('combobox')
    await userEvent.click(comboBox)
    await userEvent.keyboard('Apple')
    await userEvent.click(comboBox)

    expect(window?.getSelection()?.toString()).toBe('Apple')
  })
})

describe('given a Required ComboBox', async () => {
  it('should be (aria) invalid and show a validation error message if the user submitted without selecting anything', async () => {
    await render(<Required errorMessage='Custom error message' />)
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(page.getByRole('combobox')).toBeInvalid()
    await expect
      .element(page.getByText('Custom error message'))
      .toBeInTheDocument()
  })
})

describe('given a Sectioned ComboBox', async () => {
  it('The label should preserve its id when opening and closing the list box (DS1207)', async () => {
    const { getByRole } = await render(<Sectioned />)

    await expect.element(getByRole('combobox')).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Escape]')

    await expect.element(page.getByRole('combobox')).toBeInTheDocument()
  })
})
