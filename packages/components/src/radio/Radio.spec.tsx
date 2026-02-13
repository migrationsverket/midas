import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import { render } from 'vitest-browser-react'
import * as stories from './Radio.stories'
import styles from './Radio.module.css'

const { Primary, Required, CustomValidation } = composeStories(stories)

describe('given a primary RadioGroup', async () => {
  it('should preserve its classNames when being passed new ones', async () => {
    const { getByRole } = await render(<Primary />)

    const radioGroup = getByRole('radiogroup')
    const radios = getByRole('group').element().childNodes

    await expect
      .element(radioGroup)
      .toHaveClass(styles.radioGroup, Primary.args.className as string)

    radios.forEach(async radio => {
      expect(radio).toHaveClass(styles.radio, 'test-radio-class')
    })
  })
})

describe('given a required RadioGroup', async () => {
  it('should show a validation error message if the user submitted without selecting anything', async () => {
    const { getByRole, getByText } = await render(<Required />)

    await page.getByText('Välj en frukt').click()
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

    await page.getByText('Välj en frukt').click()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    await expect
      .element(getByText('Inga äpplen är tillåtna'))
      .toBeInTheDocument()
  })
})
