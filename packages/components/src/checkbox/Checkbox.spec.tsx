import { describe, expect, it } from 'vitest'
import { page } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import styles from './Checkbox.module.css'
import { render } from '../../test-utils'
import * as stories from './Checkbox.stories'

const { Primary, Required, Selected, Indeterminate, Invalid } = composeStories(stories)

describe('given a primary Checkbox', async () => {
  it('should preserve its classnames when given new ones', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.checkbox}`) as HTMLElement)
      .toHaveClass(styles.checkbox, Primary.args.className as string)
  })
})

describe('given a selected Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Selected />)
    const wrapper = page.elementLocator(container.querySelector(`.${styles.checkbox}`) as Element)
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given an indeterminate Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Indeterminate />)
    const wrapper = page.elementLocator(container.querySelector(`.${styles.checkbox}`) as Element)
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given an invalid Checkbox', async () => {
  it('should set data-hovered on the wrapper when hovered', async () => {
    const { container } = await render(<Invalid />)
    const wrapper = page.elementLocator(container.querySelector(`.${styles.checkbox}`) as Element)
    await wrapper.hover()
    await expect.element(wrapper).toHaveAttribute('data-hovered')
  })
})

describe('given a required Checkbox', async () => {
  it('should be (aria) invalid if the user submitted without checking the box', async () => {
    const { getByRole } = await render(<Required />)
    const checkbox = getByRole('checkbox')
    const submitButton = getByRole('button')

    await submitButton.click()

    await expect.element(checkbox).toHaveFocus()
    await expect.element(checkbox).toBeInvalid()
  })
})
