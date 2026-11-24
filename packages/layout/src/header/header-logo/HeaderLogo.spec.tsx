import { afterEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { HeaderLogo } from './HeaderLogo'

const visibleLogos = (container: HTMLElement) =>
  Array.from(container.querySelectorAll('svg')).filter(svg =>
    svg.checkVisibility(),
  )

let style: HTMLStyleElement | undefined

afterEach(() => {
  style?.remove()
  style = undefined
})

describe('given a HeaderLogo', () => {
  it('shows one logo', async () => {
    const { container } = await render(<HeaderLogo />)

    expect(visibleLogos(container)).toHaveLength(1)
  })

  it("shows one logo when Logo's CSS loads after HeaderLogo's", async () => {
    const { container } = await render(<HeaderLogo />)
    // An app's bundler can put @midas-ds/components' CSS after
    // @midas-ds/layout's. Logo's own display rule then comes last
    const logoClasses = new Set(
      Array.from(container.querySelectorAll('svg'), svg =>
        Array.from(svg.parentElement!.classList),
      ).flat(),
    )
    style = document.createElement('style')
    style.textContent = Array.from(
      logoClasses,
      className => `.${className} { display: inline-flex; }`,
    ).join('\n')
    document.head.append(style)

    expect(visibleLogos(container)).toHaveLength(1)
  })
})
