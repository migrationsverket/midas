import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import styles from '@midas-ds/components/checkbox/Checkbox.module.css'
import * as stories from './Checkbox.stories'

const { Primary, Required } = composeStories(stories)

describe('given a primary Checkbox', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should preserve its classnames when given new ones', async () => {
    expect(document.querySelector(`.${styles.checkbox}`)).toHaveClass(
      styles.checkbox,
      Primary.args.className as string,
    )
  })
})

describe('given a required Checkbox', async () => {
  beforeEach(async () => {
    await Required.run()
  })

  it('should be (aria) invalid if the user submitted without checking the box', async () => {
    const checkbox = page.getByRole('checkbox')
    const submitButton = page.getByRole('button')

    await userEvent.click(submitButton)

    expect(checkbox).toHaveFocus()
    expect(checkbox).toBeInvalid()
  })
})
