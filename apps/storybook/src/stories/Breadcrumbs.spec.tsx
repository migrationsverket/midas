import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Breadcrumbs.stories'
import styles from '@midas-ds/components/breadcrumbs/Breadcrumbs.module.css'
import { render } from 'vitest-browser-react'

const { Primary } = composeStories(stories)

describe('given a Breadcrumbs with a Custom ClassName', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary className='test' />)

    await expect
      .element(getByRole('list'))
      .toHaveClass(styles.container, 'test')
  })
})
