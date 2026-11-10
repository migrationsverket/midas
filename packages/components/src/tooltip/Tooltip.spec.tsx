import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Tooltip.stories'
import styles from './Tooltip.module.css'
import { render } from '../../test-utils'
import { Tooltip, TooltipTrigger } from './Tooltip'
import { Focusable } from '../aria'

const { Open, Placement, PlacementStartRTL } = composeStories(stories)

describe('given an Open Tooltip', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Open />)

    await expect
      .element(getByRole('tooltip'))
      .toHaveClass(styles.tooltip, Open.args.className as string)
  })
})

describe('given a Tooltip with placement="top"', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Placement />)

    await expect
      .element(getByRole('tooltip'))
      .toHaveAttribute('data-placement', 'top')
  })
})

describe('given a Tooltip with placement="start"', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Placement placement='start' />)

    await expect
      .element(getByRole('tooltip'))
      .toHaveAttribute('data-placement', 'left')
  })
})

describe('given a RTL Tooltip with placement="start"', async () => {
  it('should be placed at the start for RTL (right)', async () => {
    const { getByRole } = await render(<PlacementStartRTL />)

    await expect
      .element(getByRole('tooltip'))
      .toHaveAttribute('data-placement', 'right')
  })
})

describe('given a TooltipTrigger with a Focusable trigger', async () => {
  it('should show the tooltip when the trigger is focused', async () => {
    const { getByRole } = await render(
      <TooltipTrigger>
        <Focusable>
          <span role='button'>Trigger</span>
        </Focusable>
        <Tooltip>Tooltip</Tooltip>
      </TooltipTrigger>,
    )

    await userEvent.tab()

    await expect.element(getByRole('tooltip')).toHaveTextContent('Tooltip')
  })
})
