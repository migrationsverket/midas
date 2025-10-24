import { beforeEach, describe, expect, it } from 'vitest'
import { page } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Breadcrumbs.stories'
import styles from '@midas-ds/components/breadcrumbs/Breadcrumbs.module.css'

const { Primary } = composeStories(stories)

describe('given a Breadcrumbs with a Custom ClassName', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        className: 'derp',
      },
    })
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('list')).toHaveClass(styles.container, 'derp')
  })
})
