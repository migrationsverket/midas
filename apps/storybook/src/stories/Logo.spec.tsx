import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import styles from '@midas-ds/components/logo/Logo.module.css'
import * as stories from './Logo.stories'

const { Primary } = composeStories(stories)

describe('given a primary Logo', async () => {
  beforeEach(async () => {
    await Primary.run({ args: { ...Primary.args, className: 'test-class' } })
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(document.querySelector(`.${styles.container}`)).toHaveClass(
      'test-class',
    )
  })
})
