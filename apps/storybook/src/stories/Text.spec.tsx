import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Text.stories'

const { Body01, Body02, ExpressiveBody02, Span, Description } =
  composeStories(stories)

describe('given a Text with variant=body-01', async () => {
  beforeEach(async () => {
    await Body01.run()
  })

  it('should match styles', async () => {
    expect(page.getByText(Body01.args.children as string)).toHaveStyle({
      fontSize: '16px',
      lineHeight: '20px',
    })
  })
})

describe('given a Text with variant=body-02', async () => {
  beforeEach(async () => {
    await Body02.run()
  })

  it('should match styles', async () => {
    expect(page.getByText(Body02.args.children as string)).toHaveStyle({
      fontSize: '16px',
      lineHeight: '22px',
    })
  })
})

describe('given a Text with variant=body-02 and isExpressive={true}', async () => {
  beforeEach(async () => {
    await ExpressiveBody02.run()
  })

  it('should match styles', async () => {
    expect(
      page.getByText(ExpressiveBody02.args.children as string),
    ).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
    })
  })
})

describe('given a Text with variant=body-02 and elementType="span"', async () => {
  beforeEach(async () => {
    await Span.run()
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
    expect(page.getByText(Span.args.children as string)).toHaveStyle({
      fontSize: '16px',
      lineHeight: '22px',
    })
  })
})

describe('given a Text with slot="description"', async () => {
  beforeEach(async () => {
    await Description.run()
  })

  it('should match styles', async () => {
    expect(page.getByText(Description.args.children as string)).toHaveStyle({
      fontSize: '14px',
      lineHeight: '18px',
      fontWeight: '400',
    })
  })
})
