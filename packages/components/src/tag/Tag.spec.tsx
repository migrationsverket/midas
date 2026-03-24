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

  describe('type/color', () => {
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

  describe('isDismissable', () => {
    it('should be dismissable when using isDismissable=true', async () => {
      const { getByRole } = await render(<Primary isDismissable />)
      await expect.element(getByRole('button')).toBeVisible()
    })
  })
})

describe('deprecated usage', async () => {
  describe('type/color', () => {
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
  })

  describe('dismissable', () => {
    it('should be dismissable when using dismissable=true', async () => {
      const { getByRole } = await render(
        <Primary
          dismissable
          isDismissable={undefined}
        />,
      )
      await expect.element(getByRole('button')).toBeVisible()
    })

    it('should not be dismissable when using dismissable=false', async () => {
      const { getByRole } = await render(
        <Primary
          dismissable={false}
          isDismissable={undefined}
        />,
      )
      await expect.element(getByRole('row')).not.toHaveClass(styles.dismissable)
    })

    it('should be dismissable if the new prop is true and the old is false', async () => {
      const { getByRole } = await render(
        <Primary
          dismissable={false}
          isDismissable
        />,
      )
      await expect.element(getByRole('button')).toBeVisible()
    })

    it('should not be dismissable if the new prop is false and the old is true', async () => {
      const { getByRole } = await render(
        <Primary
          dismissable
          isDismissable={false}
        />,
      )
      await expect.element(getByRole('row')).not.toHaveClass(styles.dismissable)
    })
  })

  describe('TagList', () => {
    it('should render even without a provided TagList', async () => {
      const { getByRole } = await render(<WithoutTagList />)
      await expect.element(getByRole('grid')).toBeVisible()
    })
  })
})
