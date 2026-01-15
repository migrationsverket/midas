import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from 'vitest/browser'
import * as stories from './Text.stories'
import { render } from 'vitest-browser-react'

const {
  Default,
  BodySmall,
  Description,
  DescriptionSmall,
  Expressive,
  Body01,
  Body02,
} = composeStories(stories)

describe('given a Text with variant=body-01', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Body01 />)

    await expect
      .element(getByText(Body01.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
      })
  })
})

describe('given a Text with variant=body-02', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Body02 />)

    await expect
      .element(getByText(Body02.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '22px',
      })
  })
})

describe('given a Text with variant=body and isExpressive={true}', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Expressive />)

    await expect
      .element(getByText(Expressive.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '24px',
      })
  })
})

describe('given a Text with elementType="p"', async () => {
  beforeEach(async () => {
    await render(<Default elementType='p'>p</Default>)
  })

  it('should have the correct element type', async () => {
    expect(page.getByText('p').element().nodeName.toLowerCase()).toBe('p')
  })

  it('should match styles', async () => {
    await expect.element(page.getByText('p')).toHaveStyle({
      fontSize: '16px',
      lineHeight: '20px',
    })
  })
})

describe('given a default Text', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Default />)

    await expect
      .element(getByText(Default.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
      })
  })
})

describe('given a Text with size="small"', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<BodySmall />)

    await expect
      .element(getByText(BodySmall.args.children as string))
      .toHaveStyle({
        fontSize: '14px',
        lineHeight: '18px',
      })
  })
})

describe('given a Text with slot="description"', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Description />)

    await expect
      .element(getByText(Description.args.children as string))
      .toHaveStyle({
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '400',
      })
  })
})

describe('given a Text with size="small" & slot="description"', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<DescriptionSmall />)

    await expect
      .element(getByText(DescriptionSmall.args.children as string))
      .toHaveStyle({
        fontSize: '12px',
        lineHeight: '16px',
      })
  })
})
