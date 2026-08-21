import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { Navbar } from './Navbar'
import { Header } from '../header'
import navbarStyles from './Navbar.module.css'
import headerStyles from '../header/Header.module.css'
import * as stories from './Navbar.stories'

const { FiveItems } = composeStories(stories)

describe('Navbar', () => {
  it('should render children', async () => {
    await render(<Navbar>Navbar content</Navbar>)

    await expect.element(page.getByText('Navbar content')).toBeInTheDocument()
  })

  it('should be visible on mobile and hidden on desktop', async ({ task }) => {
    await render(<Navbar>Navbar content</Navbar>)

    const content = page.getByText('Navbar content')

    if (task.file.projectName === 'mobile') {
      await expect.element(content).toBeVisible()
    } else {
      await expect.element(content).not.toBeVisible()
    }
  })

  it('should have a white background and a top border, matching Header', async () => {
    const { container } = await render(
      <>
        <Header />
        <Navbar>Navbar content</Navbar>
      </>,
    )

    const header = container.querySelector(`.${headerStyles.header}`) as HTMLElement
    const navbar = container.querySelector(`.${navbarStyles.navbar}`) as HTMLElement

    expect(getComputedStyle(navbar).backgroundColor).toBe(
      getComputedStyle(header).backgroundColor,
    )
    expect(getComputedStyle(navbar).borderTopWidth).not.toBe('0px')
  })

  it('should visually distinguish the active item from inactive ones', async () => {
    const { container } = await render(<FiveItems />)

    const links = [...container.querySelectorAll('a')]
    const active = links.find(el => el.textContent === 'Första') as HTMLElement
    const inactive = links.find(el => el.textContent === 'Andra') as HTMLElement

    const activeStyle = getComputedStyle(active)
    const inactiveStyle = getComputedStyle(inactive)

    expect(activeStyle.borderTopColor).not.toBe(inactiveStyle.borderTopColor)
    expect(activeStyle.color).not.toBe(inactiveStyle.color)
    expect(Number(activeStyle.fontWeight)).toBeGreaterThan(
      Number(inactiveStyle.fontWeight),
    )
  })
})
