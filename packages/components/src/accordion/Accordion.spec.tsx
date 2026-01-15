import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import * as stories from './Accordion.stories'
import styles from './Accordion.module.css'

const { Default, DynamicContent } = composeStories(stories)

describe('given a Default Accordion', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { container } = await render(<Default />)

    await expect
      .element(container.querySelector(`.${styles.root}`) as HTMLElement)
      .toHaveClass(styles.root, Default.args.className as string)
  })
})

describe('given an Accordion with Dynamic Content', async () => {
  it('should show dynamic content', async () => {
    const { getByRole, getByTestId } = await render(<DynamicContent />)

    await getByRole('button').first().click()
    await getByRole('button').nth(1).click()

    await expect.element(getByTestId('hidden-content')).toBeVisible()
  })
})
