import { describe, expect, it, vi } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page, userEvent } from 'vitest/browser'
import * as stories from './FilePicker.stories'
import { render } from '../../test-utils'
import { FilePicker } from './FilePicker'
import { DropZone } from '../drop-zone'
import { Text } from '../text'

const {
  Default,
  WithDropZone,
  InvalidWithDropZone,
  Disabled,
  ErrorOnTop,
  Controlled,
  Required,
  CustomValidation,
} = composeStories(stories)

const LABEL = 'Ladda upp en bild på din favoritfrukt'
const DESCRIPTION = 'Du kan välja flera om du har många favoritfrukter'
const ERROR = 'Endast .jpg- och .png-filer tillåts'
const DROP_ZONE_LABEL = 'Välj filer eller dra och släpp filer här'

const png = (name: string) =>
  new File(['🍎'], name, { type: 'image/png', lastModified: 0 })

/** The FileTrigger's input, not the FilePicker's hidden form input */
const getTriggerInput = (container: HTMLElement) => {
  const input = [
    ...container.querySelectorAll<HTMLInputElement>('input[type=file]'),
  ].find(input => !input.closest('[aria-hidden="true"]'))
  if (!input) throw new Error('No FileTrigger input')
  return input
}

const upload = (container: HTMLElement, ...files: File[]) =>
  userEvent.upload(getTriggerInput(container), files)

describe('Given a FilePicker', () => {
  it('should describe the trigger button with the label and description', async () => {
    await render(<Default />)

    await expect
      .element(page.getByRole('button', { name: 'Choose files' }))
      .toHaveAccessibleDescription(`${LABEL} ${DESCRIPTION}`)
  })

  it('should list selected files', async () => {
    const { container } = await render(<Default />)

    await upload(container, png('hello.png'))

    await expect
      .element(page.getByRole('list', { name: 'Selected files' }))
      .toBeInTheDocument()
    await expect.element(page.getByText('hello.png')).toBeInTheDocument()
  })

  it('should not describe the delete buttons in the file list', async () => {
    const { container } = await render(<Default />)

    await upload(container, png('hello.png'))

    const buttons = page.getByRole('button').elements()
    const describedButtons = buttons.filter(button =>
      button.hasAttribute('aria-describedby'),
    )
    expect(describedButtons).toHaveLength(1)
  })

  it('should add files to the selection', async () => {
    const { container } = await render(<Controlled />)

    await upload(container, png('a.png'))
    await upload(container, png('b.png'))

    await expect
      .element(page.getByTestId('file-count'))
      .toHaveTextContent('Valda filer: 2')
  })

  it('should remove a file with its delete button', async () => {
    const { container } = await render(<Controlled />)

    await upload(container, png('a.png'), png('b.png'))
    await page.getByRole('button', { name: 'Remove a.png' }).click()

    await expect.element(page.getByText('a.png')).not.toBeInTheDocument()
    await expect
      .element(page.getByTestId('file-count'))
      .toHaveTextContent('Valda filer: 1')
  })

  it('should move focus to the trigger when the last file is removed', async () => {
    const { container } = await render(<Default />)

    await upload(container, png('a.png'))
    await page.getByRole('button', { name: 'Remove a.png' }).click()

    await expect
      .element(page.getByRole('button', { name: 'Choose files' }))
      .toHaveFocus()
  })

  it('should call onChange with the new selection', async () => {
    const onChange = vi.fn()
    const { container } = await render(
      <FilePicker
        label={LABEL}
        onChange={onChange}
      />,
    )

    const file = png('a.png')
    await upload(container, file)

    expect(onChange).toHaveBeenCalledWith([file])
  })

  it('should replace the selected file unless allowsMultiple', async () => {
    const { container } = await render(<FilePicker label={LABEL} />)

    await expect
      .element(page.getByRole('button', { name: 'Choose file' }))
      .toBeInTheDocument()

    await upload(container, png('a.png'))
    await upload(container, png('b.png'))

    await expect.element(page.getByText('b.png')).toBeInTheDocument()
    await expect.element(page.getByText('a.png')).not.toBeInTheDocument()
  })

  it('should show a controlled value', async () => {
    await render(
      <FilePicker
        label={LABEL}
        value={[png('a.png')]}
      />,
    )

    await expect.element(page.getByText('a.png')).toBeInTheDocument()
  })
})

describe('Given a FilePicker with acceptedFileTypes', () => {
  it('should limit the file dialog to them', async () => {
    const { container } = await render(
      <FilePicker
        label={LABEL}
        acceptedFileTypes={['image/png', '.pdf']}
      />,
    )

    expect(getTriggerInput(container)).toHaveAttribute(
      'accept',
      'image/png,.pdf',
    )
  })

  it('should mark files of other types as invalid', async () => {
    await render(
      <FilePicker
        label={LABEL}
        acceptedFileTypes={['image/png', '.pdf']}
        validationBehavior='aria'
        defaultValue={[
          png('a.png'),
          new File(['%PDF'], 'b.PDF'),
          new File(['GIF'], 'c.gif', { type: 'image/gif' }),
        ]}
      />,
    )

    await expect
      .element(page.getByText('File type not allowed: c.gif'))
      .toBeInTheDocument()
  })
})

describe('Given a required FilePicker in a form', () => {
  it('should block submission, show an error and focus the trigger', async () => {
    await render(<Required />)

    await page.getByRole('button', { name: 'Skicka' }).click()

    await expect.element(page.getByTestId('submitted')).not.toBeInTheDocument()
    const trigger = page.getByRole('button', { name: 'Choose files' })
    await expect.element(trigger).toHaveFocus()
    // Label, description and the browser's "select a file" message
    expect(
      trigger.element().getAttribute('aria-describedby')?.split(' '),
    ).toHaveLength(3)
  })

  it('should submit the selected files with the form', async () => {
    const { container } = await render(<Required />)

    await upload(container, png('a.png'), png('b.png'))
    await page.getByRole('button', { name: 'Skicka' }).click()

    await expect
      .element(page.getByTestId('submitted'))
      .toHaveTextContent('a.png, b.png')
  })
})

describe('Given a FilePicker with validate', () => {
  it('should show the error on submit', async () => {
    const { container } = await render(<CustomValidation />)

    await upload(container, png('a.png'), png('b.png'), png('c.png'))
    await expect
      .element(page.getByText('Välj högst två filer'))
      .toBeInTheDocument()

    await page.getByRole('button', { name: 'Skicka' }).click()
    await expect.element(page.getByTestId('submitted')).not.toBeInTheDocument()
  })

  it('should clear the selection and the error when the form resets', async () => {
    const { container } = await render(<CustomValidation />)

    await upload(container, png('a.png'), png('b.png'), png('c.png'))
    await page.getByRole('button', { name: 'Rensa' }).click()

    await expect.element(page.getByText('a.png')).not.toBeInTheDocument()
    await expect
      .element(page.getByText('Välj högst två filer'))
      .not.toBeInTheDocument()
  })

  it('should pass the validation to an errorMessage function', async () => {
    await render(
      <FilePicker
        label={LABEL}
        validationBehavior='aria'
        defaultValue={[png('a.png')]}
        validate={() => 'För stor'}
        errorMessage={validation =>
          `Fel: ${validation.validationErrors.join(', ')}`
        }
      />,
    )

    await expect.element(page.getByText('Fel: För stor')).toBeInTheDocument()
  })
})

describe('Given a disabled FilePicker', () => {
  it('should disable the trigger and the delete buttons', async () => {
    await render(<Disabled />)

    await expect
      .element(page.getByRole('button', { name: 'Choose files' }))
      .toBeDisabled()
    await expect
      .element(page.getByRole('button', { name: 'Remove äpple.png' }))
      .toBeDisabled()
  })
})

describe('Given an invalid FilePicker with a DropZone', () => {
  it('should show the error message and include it in the description', async () => {
    await render(<InvalidWithDropZone />)

    await expect.element(page.getByText(ERROR)).toBeInTheDocument()
    await expect
      .element(page.getByRole('button', { name: 'Välj fil(er)' }))
      .toHaveAccessibleDescription(`${LABEL} ${DESCRIPTION} ${ERROR}`)
  })

  it('should show the error message below the controls', async () => {
    await render(<InvalidWithDropZone />)

    const button = page.getByRole('button', { name: 'Välj fil(er)' }).element()
    const error = page.getByText(ERROR).element()
    expect(
      button.compareDocumentPosition(error) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('should mark a composed DropZone as invalid', async () => {
    await render(<InvalidWithDropZone />)

    const dropZone = page.getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).toHaveAttribute('data-invalid')
  })

  it('should let an explicit isInvalid on the DropZone win', async () => {
    await render(
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

    const dropZone = page.getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).not.toHaveAttribute('data-invalid')
  })
})

describe('Given a FilePicker with errorPosition top', () => {
  it('should show the error message above the controls', async () => {
    await render(<ErrorOnTop />)

    const button = page.getByRole('button', { name: 'Choose files' }).element()
    const error = page.getByText(ERROR).element()
    expect(
      button.compareDocumentPosition(error) & Node.DOCUMENT_POSITION_PRECEDING,
    ).toBeTruthy()
  })
})

describe('Given a valid FilePicker with a DropZone', () => {
  it('should not mark the DropZone as invalid', async () => {
    await render(<WithDropZone />)

    const dropZone = page.getByText(DROP_ZONE_LABEL).element().parentElement
    expect(dropZone).not.toHaveAttribute('data-invalid')
  })
})
