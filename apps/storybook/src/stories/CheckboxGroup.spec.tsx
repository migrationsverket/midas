import { beforeEach, describe, expect, it } from 'vitest'
import { page, userEvent } from '@vitest/browser/context'
import { composeStories } from '@storybook/react-vite'
import * as stories from './CheckboxGroup.stories'

const { Primary, SelectAllInteraction } = composeStories(stories)

describe('given a required CheckboxGroup', async () => {
  beforeEach(async () => {
    await Primary.run({
      args: {
        ...Primary.args,
        isRequired: true,
        isInvalid: undefined,
        label: 'Invalid (by required)',
        description: 'This is a working test',
        validationBehavior: 'aria',
        errorMessage: 'Du måste välja en av frukterna',
      },
    })
  })

  it('should display correct error message when invalid', async () => {
    expect(page.getByText('Du måste välja en av frukterna')).toBeVisible()
  })

  it('All checkboxes should be required', async () => {
    page
      .getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect(checkbox).toBeRequired())
  })

  it('Validation should be satisfied when checking one checkbox', async () => {
    await userEvent.tab()
    await userEvent.keyboard('[Space]')

    page
      .getByRole('checkbox')
      .all()
      .forEach(async checkbox => expect(checkbox).toBeValid())
  })
})

describe('given a Checkbox with select all enabled', async () => {
  beforeEach(async () => {
    await SelectAllInteraction.run()
  })
  it('should show all selected as checked when all options are checked', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(
      (page.getByRole('checkbox').first().element() as HTMLInputElement)
        .checked,
    ).toBe(true)
  })

  it('should show select all as indeterminate when 0 > check < max is selected', async () => {
    await userEvent.tab()
    await userEvent.tab()
    await userEvent.keyboard('[Enter]')

    expect(
      (page.getByRole('checkbox').first().element() as HTMLInputElement)
        .indeterminate,
    ).toBe(true)
  })
})
