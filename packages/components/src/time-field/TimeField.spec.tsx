import React from 'react'
import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './TimeField.stories'
import { render } from '../../test-utils'
import { TimeField } from './TimeField'

const { Primary, WithClearButton } = composeStories(stories)

describe('given a TimeField with a ref', async () => {
  it('should forward the ref to the underlying element', async () => {
    const ref = React.createRef<HTMLDivElement>()
    await render(<TimeField label='Time' ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})

describe('given a TimeField', async () => {
  it('should set data-hovered on a segment when hovered', async () => {
    await render(<Primary />)
    const segment = page.getByRole('spinbutton').first()
    await segment.hover()
    await expect.element(segment).toHaveAttribute('data-hovered')
  })
})

describe('given a clearable TimeField', async () => {
  beforeEach(async () => {
    await render(<WithClearButton />)
  })

  it('should be clearable using the mouse', async () => {
    await page.getByRole('button').first().click()

    const hourSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(hourSelector).toHaveFocus()
    await expect.element(hourSelector).toHaveAttribute('data-placeholder', 'true')
  })

  it('should be clearable using the keyboard', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    const hourSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(hourSelector).toHaveFocus()
    await expect.element(hourSelector).toHaveAttribute('data-placeholder', 'true')
  })
})
