import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Toast.stories'
import { render } from 'vitest-browser-react'

const { Global, Local, Variants, ProgrammaticClose } = composeStories(stories)

describe('given a global Toast', async () => {
  it('should show a toast when the button is pressed', async () => {
    const { getByRole, getByText } = await render(<Global />)

    await getByRole('button').click()

    await expect
      .element(getByText('Toasten är klar'))
      .toBeVisible()
  })
})

describe('given a local Toast', async () => {
  it('should show a toast when the button is pressed', async () => {
    const { getByRole, getByText } = await render(<Local />)

    await getByRole('button').click()

    await expect
      .element(getByText('Lokalt meddelande'))
      .toBeVisible()
  })
})

describe('given toast variants', async () => {
  it('should show a success toast', async () => {
    const { getByRole, getByText } = await render(<Variants />)

    await getByRole('button', { name: 'success' }).click()

    await expect
      .element(getByText('Detta är en success-toast'))
      .toBeVisible()
  })
})

describe('given programmatic close', async () => {
  it('should close the toast when close button is pressed', async () => {
    const { getByRole, getByText } = await render(<ProgrammaticClose />)

    await getByRole('button', { name: 'Visa toast' }).click()

    await expect
      .element(getByText('Denna toast stängs inte automatiskt'))
      .toBeVisible()

    await getByRole('button', { name: 'Stäng programmatiskt' }).click()

    await expect
      .element(getByText('Denna toast stängs inte automatiskt'))
      .not
      .toBeInTheDocument()
  })
})
