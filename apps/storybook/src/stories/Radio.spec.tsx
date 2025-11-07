import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from '@vitest/browser/context'
import * as stories from './Radio.stories'
import styles from '@midas-ds/components/radio/Radio.module.css'

const { Primary, Required, CustomValidation } = composeStories(stories)

describe('given a primary RadioGroup', async () => {
  beforeEach(async () => {
    await Primary.run()
  })

  it('should preserve its classNames when being passed new ones', async () => {
    const radioGroup = page.getByRole('radiogroup')
    const radios = page.getByRole('group').element().childNodes

    expect(radioGroup).toHaveClass(
      styles.radioGroup,
      Primary.args.className as string,
    )

    radios.forEach(async radio => {
      expect(radio).toHaveClass(styles.radio, 'test-radio-class')
    })
  })
})

describe('given a required RadioGroup', async () => {
  beforeEach(async () => {
    await Required.run()
  })

  it('should show a validation error message if the user submitted without selecting anything', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByRole('radiogroup')).toBeInvalid()
    expect(
      page.getByText(Required.args.errorMessage as string),
    ).toBeInTheDocument()
  })
})

describe('given a RadioGroup with custom validation', async () => {
  beforeEach(async () => {
    await CustomValidation.run()
  })

  it('should show the custom error message if the constraints was not satisfied', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    expect(page.getByText('Inga äpplen är tillåtna')).toBeInTheDocument()
  })
})
