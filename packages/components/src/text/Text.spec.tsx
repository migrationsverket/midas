import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from 'vitest/browser'
import * as stories from './Text.stories'
import { render } from '../../test-utils'
import { createRef } from 'react'
import { Text } from './Text'
import { TextContext } from './TextContext'

const {
  Default,
  BodySmall,
  Description,
  DescriptionSmall,
  Expressive,
} = composeStories(stories)

describe('given a Text with isExpressive={true}', async () => {
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

describe('given a Text inside a TextContext', async () => {
  it('should use the props from context', async () => {
    const { getByText } = await render(
      <TextContext.Provider value={{ size: 'small', elementType: 'p' }}>
        <Text>Text</Text>
      </TextContext.Provider>,
    )
    const text = getByText('Text')
    expect(text.element().tagName).toBe('P')
    await expect.element(text).toHaveStyle({ fontSize: '14px' })
  })

  it('should let its own props take precedence', async () => {
    const { getByText } = await render(
      <TextContext.Provider value={{ size: 'small', elementType: 'p' }}>
        <Text elementType='strong'>Text</Text>
      </TextContext.Provider>,
    )
    expect(getByText('Text').element().tagName).toBe('STRONG')
  })

  it('should use the description look for a description slot from context', async () => {
    const { getByText } = await render(
      <TextContext.Provider
        value={{ slots: { description: { size: 'small' } } }}
      >
        <Text slot='description'>Text</Text>
      </TextContext.Provider>,
    )
    await expect.element(getByText('Text')).toHaveStyle({ fontSize: '12px' })
  })

  it('should merge a ref from context with its own', async () => {
    const contextRef = createRef<HTMLElement>()
    const ownRef = createRef<HTMLElement>()
    await render(
      <TextContext.Provider value={{ ref: contextRef }}>
        <Text ref={ownRef}>Text</Text>
      </TextContext.Provider>,
    )
    expect(contextRef.current?.tagName).toBe('SPAN')
    expect(ownRef.current).toBe(contextRef.current)
  })
})
