import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Skeleton.stories'
import * as formStories from './Skeleton.Form.stories'
import styles from './Skeleton.module.css'
import { render } from 'vitest-browser-react'

const { Rectangle, Circle, NoAnimation, IsOnLayer01, DS1191 } =
  composeStories(stories)

const { Large, Medium } = composeStories(formStories)

describe('given a Rectangle Skeleton', async () => {
  it('should have the correct classes', async () => {
    const { getByTestId } = await render(<Rectangle />)

    await expect
      .element(getByTestId('skeleton'))
      .toHaveClass(styles.wave, styles.skeleton)
  })
})

describe('given a Circle Skeleton', async () => {
  it('should have the correct classes', async () => {
    const { getByTestId } = await render(<Circle />)

    await expect
      .element(getByTestId('skeleton'))
      .toHaveClass(styles.wave, styles.circle)
  })
})

describe('given a Skeleton without animation', async () => {
  it('should have the correct classes', async () => {
    const { getByTestId } = await render(<NoAnimation />)

    await expect.element(getByTestId('skeleton')).not.toHaveClass(styles.wave)
  })
})

describe('given a Skeleton on layer01', async () => {
  it('should have the correct classes', async () => {
    const { getByTestId } = await render(<IsOnLayer01 />)

    await expect
      .element(getByTestId('skeleton'))
      .toHaveClass(styles.wave, styles.onLayer01)
  })
})

describe('given DS1191', async () => {
  it('should merge provided className and style props', async () => {
    const { getByTestId } = await render(<DS1191 />)
    const skeleton = getByTestId('skeleton')

    await expect
      .element(skeleton)
      .toHaveClass(styles.wave, styles.skeleton, 'derp')
    await expect.element(skeleton).toHaveStyle({
      width: '100px',
      height: '40px',
      verticalAlign: 'bottom',
    })
  })
})

describe('given a Large Form Skeleton', async () => {
  it('should have the correct classes', async () => {
    const { getByTestId } = await render(<Large />)

    await expect.element(getByTestId('skeleton')).toHaveClass(styles.form)
  })
})

describe('given a Medium Form Skeleton', async () => {
  it('should have the medium size class', async () => {
    const { getByTestId } = await render(<Medium />)

    await expect
      .element(getByTestId('skeleton'))
      .toHaveClass(styles.form, styles.medium)
  })
})
