import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Tooltip.stories'
import styles from '@midas-ds/components/tooltip/Tooltip.module.css'

const { Open, Placement, PlacementStartRTL } = composeStories(stories)

describe('given an Open Tooltip', async () => {
  beforeEach(async () => {
    await Open.run()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('tooltip')).toHaveClass(
      styles.tooltip,
      Open.args.className as string,
    )
  })
})

describe('given a Tooltip with placement="top"', async () => {
  beforeEach(async () => {
    await Placement.run()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('tooltip')).toHaveAttribute('data-placement', 'top')
  })
})

describe('given a Tooltip with placement="start"', async () => {
  beforeEach(async () => {
    await Placement.run({
      args: {
        ...Placement.args,
        placement: 'start',
      },
    })
  })

  it('should preserve its classNames when being passed new ones', async () => {
    expect(page.getByRole('tooltip')).toHaveAttribute('data-placement', 'left')
  })
})

describe('given a RTL Tooltip with placement="start"', async () => {
  beforeEach(async () => {
    await PlacementStartRTL.run()
  })

  it('should be placed at the start for RTL (right)', async () => {
    expect(page.getByRole('tooltip')).toHaveAttribute('data-placement', 'right')
  })
})
