import { describe, expect, it } from 'vitest'
import { userEvent } from 'vitest/browser'
import styles from './Checkbox.module.css'
import { composeStories } from '@storybook/react-vite'
import * as stories from './CheckboxGroup.stories'
import { render } from '../../test-utils'
import { I18nProvider } from '../aria'

const {
  Primary,
  SelectAllInteraction,
  SelectAllWithPreselectedDisabledItem,
  ShowSelectAll,
} = composeStories(stories)

const Required = () => (
  <Primary
    {...Primary.args}
    isRequired
    isInvalid={undefined}
    label='Invalid (by required)'
    description='This is a working test'
    validationBehavior='aria'
    errorMessage='Du måste välja en av frukterna'
  />
)

describe('given a required CheckboxGroup', async () => {
  it('should display correct error message when invalid', async () => {
    const { getByText } = await render(<Required />)

    await expect
      .element(getByText('Du måste välja en av frukterna'))
      .toBeVisible()
  })

  it('All checkboxes should be required', async () => {
    const { getByRole } = await render(<Required />)

    getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect.element(checkbox).toBeRequired())
  })

  it('Validation should be satisfied when checking one checkbox', async () => {
    const { getByRole } = await render(<Required />)
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect.element(checkbox).toBeValid())
  })
})

describe('given a Checkbox with select all enabled', async () => {
  it('should show all selected as checked when all options are checked', async () => {
    const { getByRole } = await render(<SelectAllInteraction />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    expect(
      (getByRole('checkbox').first().element() as HTMLInputElement).checked,
    ).toBe(true)
  })

  it('should show select all as indeterminate when 0 > check < max is selected', async () => {
    const { getByRole } = await render(<SelectAllInteraction />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    expect(
      (getByRole('checkbox').first().element() as HTMLInputElement)
        .indeterminate,
    ).toBe(true)
  })

  it('should preserve a pre-selected disabled item through select-all and clear-all', async () => {
    const { getByRole, getByText } = await render(
      <SelectAllWithPreselectedDisabledItem />,
    )

    const selectAllLabel = getByText('SELECT ALL')
    const mango = getByRole('checkbox', { name: 'Mango' })
    const banana = getByRole('checkbox', { name: 'Banana' })
    const apple = getByRole('checkbox', { name: 'Apple' })

    expect((mango.element() as HTMLInputElement).checked).toBe(true)

    // select-all should add Banana/Apple without dropping the disabled Mango
    await selectAllLabel.click()
    expect((banana.element() as HTMLInputElement).checked).toBe(true)
    expect((apple.element() as HTMLInputElement).checked).toBe(true)
    expect((mango.element() as HTMLInputElement).checked).toBe(true)

    // clear-all can't touch Mango either — it has no way to have been
    // deselected by the user
    await selectAllLabel.click()
    expect((banana.element() as HTMLInputElement).checked).toBe(false)
    expect((apple.element() as HTMLInputElement).checked).toBe(false)
    expect((mango.element() as HTMLInputElement).checked).toBe(true)
  })
})

describe('given a Swedish locale', async () => {
  it('renders the default select-all label with Swedish text', async () => {
    const { container } = await render(
      <I18nProvider locale='sv'>
        <ShowSelectAll />
      </I18nProvider>,
    )

    expect(container.innerHTML).toContain('Välj alla')
  })
})

// 414px is the default test viewport, so the checkboxes render as cards
describe('given a CheckboxGroup on a small screen', () => {
  it('should give every card the full width of the group', async () => {
    const { container } = await render(<ShowSelectAll />)
    const list = container.querySelector(`.${styles.checkboxList}`)
    const cards = [
      ...container.querySelectorAll(`.${styles.checkboxButton}`),
    ] as HTMLElement[]

    expect(cards.length).toBeGreaterThan(1)
    for (const card of cards) {
      expect(card.getBoundingClientRect().width).toBe(
        list?.getBoundingClientRect().width,
      )
    }
  })

  it('each checkbox should be styled as a card by default', async () => {
    const { container } = await render(<Primary />)
    const button = container.querySelector(
      `.${styles.checkboxButton}`,
    ) as HTMLElement

    expect(getComputedStyle(button).borderTopStyle).toBe('solid')
  })
})
