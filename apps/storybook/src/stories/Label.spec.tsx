import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Label.stories'

const { Primary } = composeStories(stories)

describe('given a primary Label', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should match styles', async () => {
    expect(page.getByText(Primary.args.children as string)).toHaveStyle({
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '500',
    })
  })
})
