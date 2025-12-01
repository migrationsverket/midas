import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import styles from '@midas-ds/components/checkbox/Checkbox.module.css'
import * as stories from './Checkbox.stories'
import { render } from 'vitest-browser-react'

const { Primary, Required } = composeStories(stories)

describe('given a primary Checkbox', async () => {
  it('should preserve its classnames when given new ones', async () => {
    const { container } = await render(<Primary />)

    await expect
      .element(container.querySelector(`.${styles.checkbox}`) as HTMLElement)
      .toHaveClass(styles.checkbox, Primary.args.className as string)
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
