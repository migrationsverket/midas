import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Skeleton.stories'
import styles from '@midas-ds/components/skeleton/Skeleton.module.css'

const { Rectangle, Circle, NoAnimation, IsOnLayer01, DS1191 } =
  composeStories(stories)

describe('given a Rectangle Skeleton', async () => {
  beforeEach(async () => {
    await Rectangle.run()
  })

  it('should have the correct classes', async () => {
    expect(page.getByTestId('skeleton')).toHaveClass(
      styles.wave,
      styles.skeleton,
    )
  })
})

describe('given a Circle Skeleton', async () => {
  beforeEach(async () => {
    await Circle.run()
  })

  it('should have the correct classes', async () => {
    expect(page.getByTestId('skeleton')).toHaveClass(styles.wave, styles.circle)
  })
})

describe('given a Skeleton without animation', async () => {
  beforeEach(async () => {
    await NoAnimation.run()
  })

  it('should have the correct classes', async () => {
    expect(page.getByTestId('skeleton')).not.toHaveClass(styles.wave)
  })
})

describe('given a Skeleton on layer01', async () => {
  beforeEach(async () => {
    await IsOnLayer01.run()
  })

  it('should have the correct classes', async () => {
    expect(page.getByTestId('skeleton')).toHaveClass(
      styles.wave,
      styles.onLayer01,
    )
  })
})

describe('given DS1191', async () => {
  beforeEach(async () => {
    await DS1191.run()
  })

  it('should merge provided className and style props', async () => {
    const skeleton = page.getByTestId('skeleton')
    expect(skeleton).toHaveClass(styles.wave, styles.skeleton, 'derp')
    expect(skeleton).toHaveStyle({
      width: '100px',
      height: '40px',
      verticalAlign: 'bottom',
    })
  })
})
