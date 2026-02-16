import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Tag.stories'
import styles from './Tag.module.css'
import { render } from '../../test-utils'

const { Primary, WithoutTagList } = composeStories(stories)

describe('given a Primary Tag', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('row'))
      .toHaveClass(styles.tag, Primary.args.className as string)
  })

  it('should be green when using color=green', async () => {
    const { getByRole } = await render(<Primary color='green' />)
    await expect.element(getByRole('row')).toHaveClass(styles.green)
  })

  it('should be blue when using color=blue', async () => {
    const { getByRole } = await render(<Primary color='blue' />)
    await expect.element(getByRole('row')).toHaveClass(styles.blue)
  })

  it('should be yellow when using color=yellow', async () => {
    const { getByRole } = await render(<Primary color='yellow' />)
    await expect.element(getByRole('row')).toHaveClass(styles.yellow)
  })

  it('should be red when using color=red', async () => {
    const { getByRole } = await render(<Primary color='red' />)
    await expect.element(getByRole('row')).toHaveClass(styles.red)
  })
})

describe('deprecated usage', async () => {
  it('should be green when using deprecated type=success', async () => {
    const { getByRole } = await render(<Primary type='success' />)
    await expect.element(getByRole('row')).toHaveClass(styles.green)
  })

  it('should be blue when using deprecated type=info', async () => {
    const { getByRole } = await render(<Primary type='info' />)
    await expect.element(getByRole('row')).toHaveClass(styles.blue)
  })

  it('should be yellow when using deprecated type=important', async () => {
    const { getByRole } = await render(<Primary type='important' />)
    await expect.element(getByRole('row')).toHaveClass(styles.yellow)
  })

  it('should be red when using deprecated type=warning', async () => {
    const { getByRole } = await render(<Primary type='warning' />)
    await expect.element(getByRole('row')).toHaveClass(styles.red)
  })

  it('should be render even without a provided TagList', async () => {
    const { getByRole } = await render(<WithoutTagList />)
    await expect.element(getByRole('grid')).toBeVisible()
  })
})
