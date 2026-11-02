import { describe, expect, it, vi } from 'vitest'
import { userEvent } from 'vitest/browser'
import { createRef } from 'react'
import { ButtonContext as AriaButtonContext } from 'react-aria-components'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Button.stories'
import { render } from '../../test-utils'
import { Button } from './Button'
import { ButtonContext } from './ButtonContext'

const { Primary, Secondary } = composeStories(stories)

describe('given a basic Button', async () => {
  it('should have focus when clicked', async () => {
    const { getByRole } = await render(<Primary />)

    const button = getByRole('button')
    await button.click()
    await expect.element(button).toBeEnabled()
    await expect.element(button).toHaveFocus()
  })
})

describe('given a disabled primary Button', async () => {
  it('should be disabled', async () => {
    const { getByRole } = await render(<Primary isDisabled />)

    await expect.element(getByRole('button')).toBeDisabled()
  })
})

describe('given a disabled secondary Button', async () => {
  it('should be disabled', async () => {
    const { getByRole } = await render(<Secondary isDisabled />)

    await expect.element(getByRole('button')).toBeDisabled()
  })
})

const heightOf = (element: Element) => element.getBoundingClientRect().height

describe('given a Button inside a ButtonContext', async () => {
  it('should use the props from context', async () => {
    const { getByRole } = await render(
      <ButtonContext.Provider value={{ size: 'medium', isDisabled: true }}>
        <Button>Knapp</Button>
      </ButtonContext.Provider>,
    )
    const button = getByRole('button')
    await expect.element(button).toBeDisabled()
    expect(heightOf(button.element())).toBe(40)
  })

  it('should let its own props take precedence', async () => {
    const { getByRole } = await render(
      <ButtonContext.Provider value={{ size: 'medium' }}>
        <Button size='large'>Knapp</Button>
      </ButtonContext.Provider>,
    )
    expect(heightOf(getByRole('button').element())).toBe(48)
  })

  it('should call onPress from context and its own onPress once each', async () => {
    const contextOnPress = vi.fn()
    const ownOnPress = vi.fn()
    const { getByRole } = await render(
      <ButtonContext.Provider value={{ onPress: contextOnPress }}>
        <Button onPress={ownOnPress}>Knapp</Button>
      </ButtonContext.Provider>,
    )
    await userEvent.click(getByRole('button'))
    expect(contextOnPress).toHaveBeenCalledTimes(1)
    expect(ownOnPress).toHaveBeenCalledTimes(1)
  })

  it('should merge a ref from context with its own', async () => {
    const contextRef = createRef<HTMLButtonElement>()
    const ownRef = createRef<HTMLButtonElement>()
    await render(
      <ButtonContext.Provider value={{ ref: contextRef }}>
        <Button ref={ownRef}>Knapp</Button>
      </ButtonContext.Provider>,
    )
    expect(contextRef.current?.tagName).toBe('BUTTON')
    expect(ownRef.current).toBe(contextRef.current)
  })
})

describe("given a Button inside React Aria's ButtonContext", async () => {
  it('should call onPress from context once', async () => {
    const onPress = vi.fn()
    const { getByRole } = await render(
      <AriaButtonContext.Provider value={{ onPress }}>
        <Button>Knapp</Button>
      </AriaButtonContext.Provider>,
    )
    await userEvent.click(getByRole('button'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it('should prefer the Midas context over React Aria', async () => {
    const { getByRole } = await render(
      <AriaButtonContext.Provider value={{ 'aria-label': 'React Aria' }}>
        <ButtonContext.Provider value={{ 'aria-label': 'Midas' }}>
          <Button>Knapp</Button>
        </ButtonContext.Provider>
      </AriaButtonContext.Provider>,
    )
    await expect.element(getByRole('button', { name: 'Midas' })).toBeVisible()
  })
})
