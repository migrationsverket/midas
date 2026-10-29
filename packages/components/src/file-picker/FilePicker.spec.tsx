import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { userEvent } from 'vitest/browser'
import * as stories from './FilePicker.stories'
import { render } from '../../test-utils'
import { FilePicker } from './FilePicker'
import { DropZone } from '../drop-zone'
import { Text } from '../text'

const { Default, WithDropZone, InvalidWithDropZone, Disabled, InAForm } =
  composeStories(stories)

const LABEL = 'Ladda upp en bild på din favoritfrukt'
const DESCRIPTION = 'Du kan välja flera om du har många favoritfrukter'
const ERROR = 'Endast .jpg- och .png-filer tillåts'
const DROP_ZONE_LABEL = 'Välj filer eller dra och släpp filer här'

describe('Given a FilePicker', () => {
  it('should be a group named by the label and described by the description', async () => {
    const { getByRole } = await render(<Default />)

    const group = getByRole('group', { name: LABEL })

    await expect.element(group).toHaveAccessibleDescription(DESCRIPTION)
  })

  it('should describe the trigger button with the label and description', async () => {
    const { getByRole } = await render(<Default />)

    const button = getByRole('button', { name: 'Välj fil(er)' })

    await expect
      .element(button)
      .toHaveAccessibleDescription(`${LABEL} ${DESCRIPTION}`)
  })

  it('should list selected files', async () => {
    const { getByText, getByTestId } = await render(<Default />)

    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    await userEvent.upload(getByTestId('file-trigger'), testFile)

    await expect.element(getByText('hello.png')).toBeInTheDocument()
  })

  it('should not describe the delete buttons in the file list', async () => {
    const { getByRole, getByTestId } = await render(<Default />)

    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })
    await userEvent.upload(getByTestId('file-trigger'), testFile)

    const buttons = getByRole('button').elements()
    const describedButtons = buttons.filter(button =>
      button.hasAttribute('aria-describedby'),
    )
    expect(describedButtons).toHaveLength(1)
  })
})

describe('Given an invalid FilePicker with a DropZone', () => {
  it('should show the error message and include it in the description', async () => {
    const { getByText, getByRole } = await render(<InvalidWithDropZone />)

    await expect.element(getByText(ERROR)).toBeInTheDocument()
    await expect
      .element(getByRole('button', { name: 'Välj fil(er)' }))
      .toHaveAccessibleDescription(`${LABEL} ${DESCRIPTION} ${ERROR}`)
  })

  it('should show the error message below the controls', async () => {
    const { getByText, getByRole } = await render(<InvalidWithDropZone />)

    const button = getByRole('button', { name: 'Välj fil(er)' }).element()
    const error = getByText(ERROR).element()
    expect(
      button.compareDocumentPosition(error) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('should mark a composed DropZone as invalid', async () => {
    const { getByText } = await render(<InvalidWithDropZone />)

    const dropZone = getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).toHaveAttribute('data-invalid')
  })

  it('should let an explicit isInvalid on the DropZone win', async () => {
    const { getByText } = await render(
      <FilePicker
        label={LABEL}
        isInvalid
        errorMessage={ERROR}
      >
        <DropZone isInvalid={false}>
          <Text slot='label'>{DROP_ZONE_LABEL}</Text>
        </DropZone>
      </FilePicker>,
    )

    const dropZone = getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).not.toHaveAttribute('data-invalid')
  })
})

describe('Given a valid FilePicker with a DropZone', () => {
  it('should not mark the DropZone as invalid', async () => {
    const { getByText } = await render(<WithDropZone />)

    const dropZone = getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).not.toHaveAttribute('data-invalid')
  })
})

describe('Given a disabled FilePicker', () => {
  it('should disable the trigger and the DropZone', async () => {
    const { getByRole, getByText } = await render(<Disabled />)

    await expect
      .element(getByRole('button', { name: 'Välj fil(er)' }))
      .toBeDisabled()
    const dropZone = getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).toHaveAttribute('data-disabled')
  })
})

describe('Given a FilePicker in a form that uploads right away', () => {
  const UPLOAD_DONE = { timeout: 3000 }

  it('should show the error and focus the trigger when submitted empty', async () => {
    const { getByRole, getByText } = await render(<InAForm />)

    await getByRole('button', { name: 'Skicka' }).click()

    await expect.element(getByText('Bifoga minst en bild')).toBeInTheDocument()
    await expect
      .element(getByRole('button', { name: 'Välj fil(er)' }))
      .toHaveFocus()
  })

  it('should not submit while a file is uploading', async () => {
    const { getByRole, getByText, getByTestId } = await render(<InAForm />)

    await userEvent.upload(
      getByTestId('file-trigger'),
      new File(['hello'], 'hello.png', { type: 'image/png' }),
    )
    await getByRole('button', { name: 'Skicka' }).click()

    await expect
      .element(getByText('Vänta tills alla filer är uppladdade'))
      .toBeInTheDocument()
  })

  it('should clear the error and submit the ids once the upload is done', async () => {
    const { getByRole, getByText, getByTestId } = await render(<InAForm />)

    await getByRole('button', { name: 'Skicka' }).click()
    await userEvent.upload(
      getByTestId('file-trigger'),
      new File(['hello'], 'hello.png', { type: 'image/png' }),
    )

    await expect
      .element(getByText('Vänta tills alla filer är uppladdade'))
      .toBeInTheDocument()
    await expect
      .poll(() => getByText(/Vänta/).query(), UPLOAD_DONE)
      .toBeNull()

    await getByRole('button', { name: 'Skicka' }).click()

    await expect.element(getByText('Skickade 1 fil(er)')).toBeInTheDocument()
  })

  it('should not submit a failed upload', async () => {
    const { getByRole, getByText, getByTestId } = await render(<InAForm />)

    await userEvent.upload(
      getByTestId('file-trigger'),
      new File(['hello'], 'fel.png', { type: 'image/png' }),
    )
    await expect
      .element(getByText('Uppladdningen misslyckades'), UPLOAD_DONE)
      .toBeInTheDocument()
    await getByRole('button', { name: 'Skicka' }).click()

    await expect
      .element(getByText('Ta bort filerna som inte gick att ladda upp'))
      .toBeInTheDocument()
  })
})
