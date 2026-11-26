import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import { composeStories } from '@storybook/react-vite'
import { render } from '../../test-utils'
import * as stories from './Stepper.stories'
import styles from './Stepper.module.css'

const {
  Primary,
  LastStep,
  Narrow,
  Items,
  Flow,
  RoutePerStep,
  FlowWithoutHook,
} = composeStories(stories)

describe('given a Stepper on the second of four steps', () => {
  it('should be a navigation landmark with an ordered list of the steps', async () => {
    const { getByRole } = await render(<Primary />)

    await expect
      .element(getByRole('navigation', { name: /^(Steg|Steps)$/ }))
      .toBeInTheDocument()
    expect(getByRole('listitem').elements()).toHaveLength(4)
  })

  it('should mark only the current step as the current step', async () => {
    const { container } = await render(<Primary />)
    const current = container.querySelectorAll('[aria-current]')

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveAttribute('aria-current', 'step')
    expect(current[0].textContent).toMatch(/Adress/)
  })

  it('should link back to completed steps only', async () => {
    const { getByRole } = await render(<Primary />)

    expect(
      getByRole('link')
        .elements()
        .map(link => link.textContent),
    ).toEqual(['Personuppgifter'])
  })

  it('should tell screen readers which steps are completed', async () => {
    const { getByRole } = await render(<Primary />)

    const [completed, current] = getByRole('listitem').elements()

    expect(completed.textContent).toMatch(/Personuppgifter, (klart|completed)/)
    expect(current.textContent).not.toMatch(/klart|completed/)
  })

  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary className='test' />)

    await expect
      .element(getByRole('navigation'))
      .toHaveClass(styles.stepper, 'test')
  })
})

describe('given a Stepper on the last step', () => {
  it('should link back to every earlier step', async () => {
    const { getByRole } = await render(<LastStep />)

    expect(getByRole('link').elements()).toHaveLength(3)
  })
})

describe('given a Stepper built from a list of items', () => {
  it('should render a step per item and find the current one by id', async () => {
    const { getByRole, container } = await render(<Items />)

    expect(getByRole('listitem').elements()).toHaveLength(4)
    expect(container.querySelector('[aria-current]')?.textContent).toMatch(
      /Barn/,
    )
    expect(
      getByRole('link')
        .elements()
        .map(link => link.textContent),
    ).toEqual(['Personuppgifter'])
  })
})

describe('given a narrow Stepper', () => {
  it('should say where the user is in words and keep the labels for screen readers', async () => {
    const { container } = await render(<Narrow />)
    const summary = container.querySelector(`.${styles.summary}`)!
    const label = container.querySelector(`.${styles.label}`)!

    expect(getComputedStyle(summary).display).not.toBe('none')
    expect(summary.textContent).toMatch(/^(Steg 2 av 4|Step 2 of 4)Adress$/)
    expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1)
  })
})

describe('given a wide Stepper', () => {
  it('should show the labels instead of the summary', async () => {
    const { container } = await render(
      <div style={{ width: 800 }}>
        <Primary />
      </div>,
    )

    expect(
      getComputedStyle(container.querySelector(`.${styles.summary}`)!).display,
    ).toBe('none')
  })
})

describe('given a flow with useStepper', () => {
  it('should not move focus on the first render', async () => {
    const { getByRole } = await render(<Flow />)

    await expect
      .element(getByRole('heading', { name: 'Personuppgifter' }))
      .not.toHaveFocus()
  })

  it('should move focus to the heading of the next step', async () => {
    const { getByRole } = await render(<Flow />)

    await userEvent.click(getByRole('button', { name: 'Nästa' }))

    await expect.element(getByRole('heading', { name: 'Adress' })).toHaveFocus()
  })

  it('should add a step that applies without moving the user', async () => {
    const { getByRole, getByText } = await render(<Flow />)

    await userEvent.click(getByText('Jag har barn som ska ingå i ansökan'))

    expect(getByRole('listitem').elements()).toHaveLength(4)
    await expect
      .element(getByRole('listitem').first())
      .toHaveAttribute('aria-current', 'step')
  })

  it('should move back and focus the heading', async () => {
    const { getByRole } = await render(<Flow />)

    await userEvent.click(getByRole('button', { name: 'Nästa' }))
    await userEvent.click(getByRole('button', { name: 'Tillbaka' }))

    await expect
      .element(getByRole('heading', { name: 'Personuppgifter' }))
      .toHaveFocus()
  })

  it('should land on the step that took its place when the current step goes away', async () => {
    const { getByRole, getByText } = await render(<Flow />)
    const checkbox = getByText('Jag har barn som ska ingå i ansökan')

    await userEvent.click(checkbox)
    await userEvent.click(getByRole('button', { name: 'Nästa' }))
    await expect.element(getByRole('heading', { name: 'Barn' })).toBeVisible()

    await userEvent.click(checkbox)

    await expect.element(getByRole('heading', { name: 'Adress' })).toBeVisible()
    expect(getByRole('listitem').elements()).toHaveLength(3)
    expect(
      document.querySelector('[aria-current="step"]')?.textContent,
    ).toMatch(/Adress/)
  })
})

describe('given one route per step', () => {
  it('should focus the heading of the new page after it mounts', async () => {
    const { getByRole } = await render(<RoutePerStep />)
    const first = getByRole('heading', { name: 'Personuppgifter' }).element()

    await userEvent.click(getByRole('button', { name: 'Nästa' }))

    const heading = getByRole('heading', { name: 'Barn' })
    await expect.element(heading).toHaveFocus()
    expect(heading.element()).not.toBe(first)
  })
})

describe('given a flow written without the hook', () => {
  it('should move focus to the heading of the next step', async () => {
    const { getByRole } = await render(<FlowWithoutHook />)

    await userEvent.click(getByRole('button', { name: 'Nästa' }))

    await expect.element(getByRole('heading', { name: 'Adress' })).toHaveFocus()
  })
})
