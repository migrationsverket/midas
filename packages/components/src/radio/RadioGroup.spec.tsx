import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { fireEvent } from '@testing-library/react'
import { userEvent } from 'vitest/browser'
import { render } from '../../test-utils'
import * as stories from './RadioGroup.stories'
import styles from './Radio.module.css'
import { RadioGroup } from './RadioGroup'
import { Radio } from './Radio'

const { Primary, Required, CustomValidation } = composeStories(stories)

describe('given a primary RadioGroup', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { container, getByRole } = await render(<Primary />)

    const radioGroup = getByRole('radiogroup')
    const radios = container.querySelectorAll(`.${styles.radioButton}`)

    await expect
      .element(radioGroup)
      .toHaveClass(styles.radioGroup, Primary.args.className as string)

    radios.forEach(radio => {
      expect(radio).toHaveClass('test-radio-class')
    })
  })

  it('should accept a function as children', async () => {
    const { getByRole } = await render(
      <Primary>{({ orientation }) => orientation}</Primary>,
    )
    await expect.element(getByRole('radiogroup')).toHaveTextContent('vertical')
  })
})

describe('given a required RadioGroup', async () => {
  it('should show a validation error message if the user submitted without selecting anything', async () => {
    const { getByRole, getByText } = await render(<Required />)

    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect.element(getByRole('radiogroup')).toBeInvalid()
    await expect
      .element(getByText(Required.args.errorMessage as string))
      .toBeInTheDocument()
  })
})

describe('given a RadioGroup with custom validation', async () => {
  it('should show the custom error message if the constraints was not satisfied', async () => {
    const { getByText } = await render(<CustomValidation />)

    await userEvent.tab()
    await userEvent.keyboard('[Space]')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText('Inga äpplen är tillåtna'))
      .toBeInTheDocument()
  })
})

// Tests in apps click radios by test id. It has to be on the label, not the
// field wrapper around it, or the click doesn't select the radio.
describe('given a Radio with a test id', () => {
  const Fruits = () => (
    <RadioGroup label='Fruit'>
      <Radio
        value='apple'
        data-testid='apple'
      >
        Apple
      </Radio>
      <Radio
        value='banana'
        data-testid='banana'
      >
        Banana
      </Radio>
    </RadioGroup>
  )

  it('should put the test id on the label', async () => {
    const { getByTestId } = await render(<Fruits />)

    expect(getByTestId('apple').element().tagName).toBe('LABEL')
  })

  it('should be selected when its test id is clicked', async () => {
    const { getByTestId, getByRole } = await render(<Fruits />)

    await getByTestId('banana').click()

    await expect.element(getByRole('radio', { name: 'Banana' })).toBeChecked()
  })

  it('should be selected when a click is dispatched on its test id', async () => {
    // Like Testing Library's fireEvent and user-event, e.g. in jsdom
    const { getByTestId, getByRole } = await render(<Fruits />)

    ;(getByTestId('banana').element() as HTMLElement).click()

    await expect.element(getByRole('radio', { name: 'Banana' })).toBeChecked()
  })
})

// The recommended way to find a radio in tests: by role and accessible name,
// which doesn't depend on the markup around the input.
describe('given a Radio found by its role and name', () => {
  const Fruits = () => (
    <RadioGroup label='Fruit'>
      <Radio value='apple'>Apple</Radio>
      <Radio value='banana'>Banana</Radio>
    </RadioGroup>
  )

  it('should be selected when it is clicked with Testing Library', async () => {
    const { getByRole } = await render(<Fruits />)
    const banana = getByRole('radio', { name: 'Banana' })

    // fireEvent and user-event dispatch the click on the input itself
    fireEvent.click(banana.element())

    await expect.element(banana).toBeChecked()
  })

  it('should be selected when it is clicked in a real browser', async () => {
    const { getByRole } = await render(<Fruits />)
    const banana = getByRole('radio', { name: 'Banana' })

    // The input is visually hidden behind its label, so Playwright's
    // actionability check sees the label on top of it. `force` skips that
    // check, and the click lands on the label, which selects the input
    await banana.click({ force: true })

    await expect.element(banana).toBeChecked()
  })
})
