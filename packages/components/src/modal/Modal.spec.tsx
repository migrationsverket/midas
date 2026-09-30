import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './Modal.stories'
import { render } from '../../test-utils'
import { Button } from '../button'
import { I18nProvider } from '@midas-ds/utils'

const { Default, DS1282 } = composeStories(stories)

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
