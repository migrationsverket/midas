import { beforeEach, describe, expect, it } from 'vitest'
import { page } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Badge.stories'

const { NoLabel } = composeStories(stories)

describe('given a Badge without a label', async () => {
  beforeEach(async () => {
    await NoLabel.run({
      args: {
        ...NoLabel.args,
        className: 'derp',
      },
    })
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByTestId('badge')).toHaveClass('derp')
  })
})
