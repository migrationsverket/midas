import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Stack.stories'
import styles from './Stack.module.css'
import { render } from 'vitest-browser-react'

const { Vertical, Horizontal } = composeStories(stories)

describe('given a Vertical Stack', async () => {
  it('should render children and accept custom classNames', async () => {
    const { getByTestId } = await render(
      <Vertical
        data-testid='stack-test'
        className='custom-class'
      />,
    )

    const stackElement = getByTestId('stack-test')

    await expect.element(stackElement).toHaveClass(styles.stack)
    await expect.element(stackElement).toHaveClass(styles['direction-column'])
    await expect.element(stackElement).toHaveClass(styles['align-stretch'])
    await expect.element(stackElement).toHaveClass(styles['justify-start'])
    await expect.element(stackElement).toHaveClass('custom-class')

    await expect.element(stackElement).toHaveTextContent('Element 1')
    await expect.element(stackElement).toHaveTextContent('Element 2')
    await expect.element(stackElement).toHaveTextContent('Element 3')
  })
})

describe('given a Horizontal Stack', async () => {
  it('should apply horizontal classes based on arguments', async () => {
    const { getByTestId } = await render(
      <Horizontal data-testid='stack-horizontal' />,
    )

    const stackElement = getByTestId('stack-horizontal')

    await expect.element(stackElement).toHaveClass(styles['direction-row'])
    await expect.element(stackElement).toHaveClass(styles['align-center'])
  })
})
