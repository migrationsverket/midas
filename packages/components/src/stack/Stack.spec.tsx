import { describe, expect, it } from 'vitest'
import { createRef } from 'react'
import { render } from 'vitest-browser-react'
import { Stack, type StackSpacing } from './Stack'

// Resolves a space token to pixels the same way the browser does for Stack,
// so the tests don't hardcode token values
const tokenToPx = (spacing: StackSpacing) => {
  const probe = document.createElement('div')
  probe.style.width = `var(--midas-space-${spacing})`
  document.body.append(probe)
  const width = getComputedStyle(probe).width
  probe.remove()
  return width
}

const items = ['Ett', 'Två', 'Tre'].map(item => <div key={item}>{item}</div>)

describe('given a Stack with default props', () => {
  it('renders a vertical flex container with small spacing', async () => {
    const { getByTestId } = await render(
      <Stack data-testid='stack'>{items}</Stack>,
    )
    const stack = getByTestId('stack')

    expect(stack.element().tagName).toBe('DIV')
    await expect.element(stack).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      rowGap: tokenToPx('small'),
    })
  })
})

describe('given a spacing token', () => {
  it.each<StackSpacing>(['xsmall', 'small', 'medium', 'large', 'xlarge'])(
    'uses --midas-space-%s as the gap',
    async spacing => {
      const { getByTestId } = await render(
        <Stack
          data-testid='stack'
          spacing={spacing}
        >
          {items}
        </Stack>,
      )

      await expect
        .element(getByTestId('stack'))
        .toHaveStyle({ rowGap: tokenToPx(spacing) })
    },
  )

  it('can still be overridden with the style prop', async () => {
    const { getByTestId } = await render(
      <Stack
        data-testid='stack'
        spacing='large'
        style={{ gap: '3px' }}
      >
        {items}
      </Stack>,
    )

    await expect.element(getByTestId('stack')).toHaveStyle({ rowGap: '3px' })
  })
})

describe('given layout props', () => {
  it('lays out horizontally, aligned and wrapping', async () => {
    const { getByTestId } = await render(
      <Stack
        data-testid='stack'
        direction='row'
        alignItems='center'
        justifyContent='between'
        wrap
      >
        {items}
      </Stack>,
    )

    await expect.element(getByTestId('stack')).toHaveStyle({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    })
  })
})

describe('given consumer CSS', () => {
  // Unlayered, like an app's own stylesheet. Added after the Stack's CSS has
  // loaded would make ties go to the consumer anyway, so it's added first to
  // prove that load order doesn't matter
  const addConsumerCss = (css: string) => {
    const style = document.createElement('style')
    style.textContent = css
    document.head.prepend(style)
    return () => style.remove()
  }

  it('can override a variant with a plain class', async () => {
    const remove = addConsumerCss('.consumer { flex-direction: column; }')
    const { getByTestId } = await render(
      <Stack
        data-testid='stack'
        direction='row'
        className='consumer'
      >
        {items}
      </Stack>,
    )

    await expect
      .element(getByTestId('stack'))
      .toHaveStyle({ flexDirection: 'column' })
    remove()
  })

  it('can override gap with a plain class', async () => {
    const remove = addConsumerCss('.consumer { gap: 3px; }')
    const { getByTestId } = await render(
      <Stack
        data-testid='stack'
        spacing='large'
        className='consumer'
      >
        {items}
      </Stack>,
    )

    await expect.element(getByTestId('stack')).toHaveStyle({ rowGap: '3px' })
    remove()
  })

  it('can override the spacing variable with a plain class', async () => {
    const remove = addConsumerCss(
      '.consumer { --midas-stack-spacing: var(--midas-space-xlarge); }',
    )
    const { getByTestId } = await render(
      <Stack
        data-testid='stack'
        spacing='small'
        className='consumer'
      >
        {items}
      </Stack>,
    )

    await expect
      .element(getByTestId('stack'))
      .toHaveStyle({ rowGap: tokenToPx('xlarge') })
    remove()
  })
})

describe('given an elementType', () => {
  it('renders a list that keeps its list semantics', async () => {
    const { getByRole } = await render(
      <Stack
        elementType='ul'
        aria-label='Steg'
      >
        <li>Ett</li>
        <li>Två</li>
      </Stack>,
    )

    // role="list" keeps VoiceOver announcing a list without bullets
    const list = getByRole('list', { name: 'Steg' })
    expect(list.element().tagName).toBe('UL')
    await expect.element(list).toHaveStyle({ listStyleType: 'none' })
    expect(list.getByRole('listitem').elements()).toHaveLength(2)
  })
})

describe('given a ref', () => {
  it('points to the rendered element', async () => {
    const ref = createRef<HTMLElement>()
    await render(
      <Stack
        ref={ref}
        elementType='section'
      >
        {items}
      </Stack>,
    )

    expect(ref.current?.tagName).toBe('SECTION')
  })
})
