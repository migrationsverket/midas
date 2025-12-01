import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './ProgressBar.stories'
import { render } from 'vitest-browser-react'

const { Primary, WithoutLabels, IsIndeterminate } = composeStories(stories)

describe('given a primary ProgressBar', async () => {
  it('should provide an information about the progress for screen readers', async () => {
    const { getByRole } = await render(<Primary />)
    const progressBar = getByRole('progressbar')

    await expect
      .element(progressBar)
      .toHaveAttribute('aria-valuemin', `${Primary.args.minValue}`)
    await expect
      .element(progressBar)
      .toHaveAttribute('aria-valuemax', `${Primary.args.maxValue}`)
    await expect
      .element(progressBar)
      .toHaveAttribute('aria-valuenow', `${Primary.args.value}`)
    await expect
      .element(progressBar)
      .toHaveAttribute(
        'aria-valuetext',
        expect.stringMatching(new RegExp(`${Primary.args.value}`)),
      )
  })
})

describe('given a ProgressBar without visual labels', async () => {
  it('should provide an accessible label for screen readers', async () => {
    const { getByRole } = await render(<WithoutLabels />)

    await expect
      .element(getByRole('progressbar'))
      .toHaveAccessibleName(WithoutLabels.args['aria-label'])
  })
})

describe('given an indeterminate ProgressBar', async () => {
  it('should not have an aria-valuenow property', async () => {
    const { getByRole } = await render(<IsIndeterminate />)

    await expect
      .element(getByRole('progressbar'))
      .not.toHaveProperty('aria-valuenow')
  })
})
