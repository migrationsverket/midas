import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './FilePicker.stories'
import { render, uploadFile } from '../../test-utils'
import { FilePicker, type FilePickerProps } from './FilePicker'
import { DropZone } from '../drop-zone'
import { Text } from '../text'
import { FileTrigger } from '../file-trigger'
import { Button } from '../button'

const { Default, WithDropZone, InvalidWithDropZone, RejectedFiles } =
  composeStories(stories)

const LABEL = 'Ladda upp en bild på din favoritfrukt'
const DESCRIPTION = 'Du kan välja flera om du har många favoritfrukter'
const ERROR = 'Endast .jpg- och .png-filer tillåts'
const DROP_ZONE_LABEL = 'Välj filer eller dra och släpp filer här'

describe('Given a FilePicker', () => {
  it('should be a group named by the label', async () => {
    const { getByRole } = await render(<Default />)

    await expect
      .element(getByRole('group', { name: LABEL }))
      .toHaveAccessibleDescription(DESCRIPTION)
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

    await uploadFile(getByTestId('file-trigger'), 'hello.png', 'hello')

    await expect.element(getByText('hello.png')).toBeInTheDocument()
  })

  it('should not describe the delete buttons in the file list', async () => {
    const { getByRole, getByTestId } = await render(<Default />)

    await uploadFile(getByTestId('file-trigger'), 'hello.png', 'hello')

    const buttons = getByRole('button').elements()
    const describedButtons = buttons.filter(button =>
      button.hasAttribute('aria-describedby'),
    )
    expect(describedButtons).toHaveLength(1)
  })
})

describe('Given a FilePicker without a visible label', () => {
  const trigger = (
    <FileTrigger>
      <Button>Välj fil(er)</Button>
    </FileTrigger>
  )

  it('should be a group named by aria-label', async () => {
    const { getByRole, container } = await render(
      <FilePicker
        aria-label={LABEL}
        description={DESCRIPTION}
      >
        {trigger}
      </FilePicker>,
    )

    await expect
      .element(getByRole('group', { name: LABEL }))
      .toHaveAccessibleDescription(DESCRIPTION)
    expect(container.textContent).not.toContain(LABEL)
  })

  it('should describe the trigger button with only the description', async () => {
    const { getByRole } = await render(
      <FilePicker
        aria-label={LABEL}
        description={DESCRIPTION}
      >
        {trigger}
      </FilePicker>,
    )

    await expect
      .element(getByRole('button', { name: 'Välj fil(er)' }))
      .toHaveAccessibleDescription(DESCRIPTION)
  })

  it('should be named by, and describe the trigger with, an external label', async () => {
    const { getByRole } = await render(
      <>
        <h2 id='external-label'>{LABEL}</h2>
        <FilePicker
          aria-labelledby='external-label'
          description={DESCRIPTION}
        >
          {trigger}
        </FilePicker>
      </>,
    )

    await expect.element(getByRole('group', { name: LABEL })).toBeVisible()
    await expect
      .element(getByRole('button', { name: 'Välj fil(er)' }))
      .toHaveAccessibleDescription(`${LABEL} ${DESCRIPTION}`)
  })

  it('should require a label, aria-label or aria-labelledby', () => {
    // @ts-expect-error no accessible name
    const unnamed: FilePickerProps = { description: DESCRIPTION }
    // @ts-expect-error a visible label and aria-label would compete
    const both: FilePickerProps = { label: LABEL, 'aria-label': LABEL }
    const info = { children: 'Info' }
    // @ts-expect-error the popover sits next to the visible label
    const popover: FilePickerProps = { 'aria-label': LABEL, popover: info }
    expect([unnamed, both, popover]).toHaveLength(3)
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

  it('should mark the group as invalid and include the error in its description', async () => {
    const { getByRole } = await render(<InvalidWithDropZone />)

    const group = getByRole('group', { name: LABEL })
    await expect.element(group).toHaveAttribute('data-invalid')
    await expect
      .element(group)
      .toHaveAccessibleDescription(`${DESCRIPTION} ${ERROR}`)
  })

  it('should show the error message above the controls by default', async () => {
    const { getByText, getByRole } = await render(<InvalidWithDropZone />)

    const description = getByText(DESCRIPTION).element()
    const error = getByText(ERROR).element()
    const button = getByRole('button', { name: 'Välj fil(er)' }).element()
    expect(
      description.compareDocumentPosition(error) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      error.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('should show the error message below the controls with errorPosition bottom', async () => {
    const { getByText, getByRole } = await render(
      <InvalidWithDropZone errorPosition='bottom' />,
    )

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

describe('Given a FilePicker that only accepts small images', () => {
  const upload = async (name: string, contents = 'hello') => {
    const screen = await render(<RejectedFiles />)
    await uploadFile(screen.getByTestId('file-trigger'), name, contents)
    return screen
  }

  it('should limit the file dialog to the accepted types', async () => {
    const { getByTestId } = await render(<RejectedFiles />)

    await expect
      .element(getByTestId('file-trigger'))
      .toHaveAttribute('accept', 'image/png,image/jpeg')
  })

  it('should list a file of another type as failed, with the reason', async () => {
    const { getByRole, getByText } = await upload('notes.txt')

    await expect.element(getByText('notes.txt')).toBeVisible()
    await expect
      .element(getByText('Endast .jpg- och .png-filer tillåts'))
      .toBeVisible()
    await expect
      .element(getByRole('button', { name: 'Remove notes.txt' }))
      .toHaveAccessibleDescription(/Endast .jpg- och .png-filer tillåts/)
  })

  it('should list a file over the size limit as failed, with the reason', async () => {
    const { getByText } = await upload('big.png', 'x'.repeat(1024 * 1024 + 1))

    await expect.element(getByText('Filen är för stor, max 1 MB')).toBeVisible()
  })

  it('should list an accepted file without an error', async () => {
    const { getByText, getByRole } = await upload('ok.png')

    await expect.element(getByText('ok.png')).toBeVisible()
    await expect
      .element(getByRole('button', { name: 'Remove ok.png' }))
      .not.toHaveAccessibleDescription(/./)
  })
})
