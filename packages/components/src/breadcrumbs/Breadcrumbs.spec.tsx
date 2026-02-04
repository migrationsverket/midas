import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import * as stories from './Breadcrumbs.stories'
import styles from './Breadcrumbs.module.css'

const { Primary } = composeStories(stories)

describe('given a Breadcrumbs with a Custom ClassName', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary className='test' />)

    await expect
      .element(getByRole('list'))
      .toHaveClass(styles.container, 'test')
  })
})

describe('given a Breadcrumbs component', async () => {
  it('should set data-current on the last breadcrumb', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('listitem').last())
      .toHaveAttribute('data-current', 'true')
  })
})
