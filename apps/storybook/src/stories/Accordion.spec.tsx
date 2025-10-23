import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Accordion.stories'
import styles from '@midas-ds/components/accordion/Accordion.module.css'

const { Default, DynamicContent } = composeStories(stories)

describe('given a Default Accordion', async () => {
  beforeEach(async () => {
    await Default.run()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(document.querySelector(`.${styles.root}`)).toHaveClass(
      styles.root,
      Default.args.className as string,
    )
  })
})

describe('given an Accordion with Dynamic Content', async () => {
  beforeEach(async () => {
    await DynamicContent.run()
  })

  it('should show dynamic content', async () => {
    await userEvent.click(page.getByRole('button').first())
    await userEvent.click(page.getByRole('button').nth(1))

    expect(page.getByTestId('hidden-content')).toBeVisible()
  })
})
