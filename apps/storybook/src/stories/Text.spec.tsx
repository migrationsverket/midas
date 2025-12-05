import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from 'vitest/browser'
import * as stories from './Text.stories'
import { render } from 'vitest-browser-react'

const {
  Body,
  BodySmall,
  Description,
  DescriptionSmall,
  ExpressiveBody,
  Body01,
  Body02,
  Span,
  SlotDescription,
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
    const { getByText } = await render(<ExpressiveBody />)

    await expect
      .element(getByText(ExpressiveBody.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '24px',
      })
  })
})

describe('given a Text with variant=body and elementType="span"', async () => {
  beforeEach(async () => {
    await render(<Span />)
  })

  it('should have the correct element type', async () => {
    expect(
      page
        .getByText(Span.args.children as string)
        .element()
        .nodeName.toLowerCase(),
    ).toBe(Span.args.elementType)
  })

  it('should match styles', async () => {
    await expect
      .element(page.getByText(Span.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
      })
  })
})

describe('given a Text with variant=body', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<Body />)

    await expect
      .element(getByText(Body.args.children as string))
      .toHaveStyle({
        fontSize: '16px',
        lineHeight: '20px',
      })
  })
})

describe('given a Text with variant=bodySmall', async () => {
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

describe('given a Text with variant=description', async () => {
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

describe('given a Text with variant=descriptionSmall', async () => {
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

describe('given a Text with slot="description"', async () => {
  it('should match styles', async () => {
    const { getByText } = await render(<SlotDescription />)

    await expect
      .element(getByText(SlotDescription.args.children as string))
      .toHaveStyle({
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: '400',
      })
  })
})
