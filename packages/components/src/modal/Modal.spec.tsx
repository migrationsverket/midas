import { afterEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './Modal.stories'
import { render } from '../../test-utils'
import { Button } from '../button'
import { I18nProvider } from '../utils/intl'
import styles from './Modal.module.css'

const { Default, DS1282, Scrollable, ScrollableWithFooter, FormWithFooter } =
  composeStories(stories)

describe('given a default Modal', async () => {
  it('should be possible to access the render props', async () => {
    const { getByRole } = await render(
      <Default>
        {({ state: { close } }) => (
          <Button onPress={close}>Custom close button</Button>
        )}
      </Default>,
    )

    await getByRole('button', { name: 'Öppna' }).click()
    const dialog = getByRole('dialog')
    await expect.element(dialog).toBeVisible()
    await dialog.getByRole('button', { name: 'Custom close button' }).click()
    await expect.element(dialog).not.toBeInTheDocument()
  })
})

describe('given a Swedish locale', async () => {
  it('renders the close button with Swedish text', async () => {
    const { getByRole } = await render(
      <I18nProvider locale='sv'>
        <Default>{() => <Button>Custom close button</Button>}</Default>
      </I18nProvider>,
    )

    await getByRole('button', { name: 'Öppna' }).click()

    // Modal renders into a portal, so assert on the dialog itself rather
    // than the render container.
    expect(getByRole('dialog').element().outerHTML).toContain('Stäng')
  })
})

describe('given a Modal without a footer', async () => {
  it('should not render a sticky footer', async () => {
    const { getByRole } = await render(<Default footer={undefined} />)

    await getByRole('button', { name: 'Öppna' }).click()

    expect(
      getByRole('dialog').element().querySelector(`.${styles.modalFooter}`),
    ).toBeNull()
  })
})

describe('given a Modal with the footer prop', async () => {
  it('renders the footer buttons after the body content', async () => {
    const { getByRole } = await render(<ScrollableWithFooter />)

    await getByRole('button', { name: 'Öppna' }).click()
    const dialog = getByRole('dialog')

    await expect
      .element(dialog.getByRole('button', { name: 'Submit' }))
      .toBeVisible()
    await expect
      .element(dialog.getByRole('button', { name: 'Cancel' }))
      .toBeVisible()
  })
})

describe('DS1282', async () => {
  it('should be possible to use the select multiple times while rendering a table with modals', async () => {
    const { getByTestId } = await render(<DS1282 />)

    // Open modal
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    // Get the value of the select
    const hiddenSelectContainer = getByTestId('hidden-select-container')

    // Select "apple"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(hiddenSelectContainer.getByText('apple'))
      .toBeInTheDocument()

    // Select "banana"
    await userEvent.keyboard('[Space]')
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Space]')

    await expect
      .element(hiddenSelectContainer.getByText('banana'))
      .toBeInTheDocument()
  })
})

describe('given a Modal taller than the viewport', async () => {
  it('should be possible to scroll with the keyboard right after opening', async () => {
    const { getByRole } = await render(<Scrollable />)

    await getByRole('button', { name: 'Öppna' }).click()
    const dialog = getByRole('dialog').element()
    expect(dialog.scrollHeight).toBeGreaterThan(dialog.clientHeight)
    expect(dialog.scrollTop).toBe(0)

    // Wait for the scroll animation to finish, a key pressed during it is ignored
    const scrollEnd = new Promise(resolve =>
      dialog.addEventListener('scrollend', resolve, { once: true }),
    )
    await userEvent.keyboard('[End]')
    await scrollEnd
    expect(dialog.scrollTop).toBe(dialog.scrollHeight - dialog.clientHeight)

    await userEvent.keyboard('[Home]')
    await expect.poll(() => dialog.scrollTop).toBe(0)
  })
})

// How many pixels of `element` the sticky header and footer cover
const coveredBySticky = (dialog: Element, element: Element) => {
  const target = element.getBoundingClientRect()
  return [styles.modalHeader, styles.modalFooter]
    .map(className => dialog.querySelector(`.${className}`))
    .filter(sticky => sticky && !sticky.contains(element))
    .map(sticky => {
      const { top, bottom } = (sticky as Element).getBoundingClientRect()
      return Math.max(
        0,
        Math.min(target.bottom, bottom) - Math.max(target.top, top),
      )
    })
    .reduce((sum, covered) => sum + covered, 0)
}

describe.each([
  { device: 'desktop', width: 1280, height: 720 },
  { device: 'mobile', width: 375, height: 667 },
])('given a scrolling Modal with a footer on $device', ({ width, height }) => {
  afterEach(async () => {
    await page.viewport(414, 896)
  })

  it('should keep the focused field clear of the sticky header and footer', async () => {
    await page.viewport(width, height)
    const { getByRole } = await render(<FormWithFooter />)

    await getByRole('button', { name: 'Öppna' }).click()
    const dialog = getByRole('dialog').element()
    const fields = dialog.querySelectorAll('input')

    for (const field of fields) {
      await userEvent.tab()
      if (document.activeElement !== field) await userEvent.tab()
      expect(document.activeElement).toBe(field)
      expect
        .soft(
          coveredBySticky(dialog, field),
          field.labels?.[0]?.textContent ?? '',
        )
        .toBe(0)
    }

    for (const field of [...fields].reverse()) {
      while (document.activeElement !== field) {
        await userEvent.tab({ shift: true })
      }
      expect
        .soft(
          coveredBySticky(dialog, field),
          field.labels?.[0]?.textContent ?? '',
        )
        .toBe(0)
    }
  })
})
