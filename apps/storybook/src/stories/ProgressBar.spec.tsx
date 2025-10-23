import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './ProgressBar.stories'

const { Primary, WithoutLabels, IsIndeterminate } = composeStories(stories)

describe('given a primary ProgressBar', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should provide an information about the progress for screen readers', async () => {
    const progressBar = page.getByRole('progressbar')
    expect(progressBar).toHaveAttribute(
      'aria-valuemin',
      `${Primary.args.minValue}`,
    )
    expect(progressBar).toHaveAttribute(
      'aria-valuemax',
      `${Primary.args.maxValue}`,
    )
    expect(progressBar).toHaveAttribute(
      'aria-valuenow',
      `${Primary.args.value}`,
    )
    expect(progressBar).toHaveAttribute(
      'aria-valuetext',
      expect.stringMatching(new RegExp(`${Primary.args.value}`)),
    )
  })
})

describe('given a ProgressBar without visual labels', async () => {
  beforeEach(async () => {
    await WithoutLabels.run()
  })

  it('should provide an accessible label for screen readers', async () => {
    expect(
      page.getByLabelText(WithoutLabels.args['aria-label'] as string),
    ).toBeInTheDocument()
  })
})

describe('given an indeterminate ProgressBar', async () => {
  beforeEach(async () => {
    await IsIndeterminate.run()
  })

  it('should not have an aria-valuenow property', async () => {
    expect(page.getByRole('progressbar')).not.toHaveProperty('aria-valuenow')
  })
})
