import React from 'react'
import { beforeEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './DateField.stories'
import { render } from '../../test-utils'
import { DateField } from './DateField'

const { Primary, WithClearButton } = composeStories(stories)

describe('given a DateField with a ref', async () => {
  it('should forward the ref to the underlying element', async () => {
    const ref = React.createRef<HTMLDivElement>()
    await render(<DateField label='Date' ref={ref} />)
    expect(ref.current).not.toBeNull()
  })
})

describe('given a DateField', async () => {
  it('should set data-hovered on a segment when hovered', async () => {
    await render(<Primary />)
    const segment = page.getByRole('spinbutton').first()
    await segment.hover()
    await expect.element(segment).toHaveAttribute('data-hovered')
  })
})

describe('given a clearable DateField ', async () => {
  beforeEach(async () => {
    await render(<WithClearButton />)
  })

  it('should be clearable using the mouse', async () => {
    await page.getByRole('button').first().click()

    const monthSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(monthSelector).toHaveFocus()
    await expect.element(monthSelector).toHaveTextContent('mm')
  })

  it('should be clearable using the keyboard', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    const monthSelector = page
      .getByRole('group')
      .getByRole('spinbutton')
      .first()

    await expect.element(monthSelector).toHaveFocus()
    await expect.element(monthSelector).toHaveTextContent('mm')
  })
})
