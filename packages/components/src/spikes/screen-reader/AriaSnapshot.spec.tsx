import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from '../../../test-utils'
import * as textFieldStories from '../../textfield/TextField.stories'
import * as checkboxGroupStories from '../../checkbox/CheckboxGroup.stories'
import * as selectStories from '../../select/Select.stories'
import * as fileListStories from '../../file-list/FileList.stories'

// Spike: accessibility tree snapshots as a regression baseline for what a
// screen reader gets: roles, names, descriptions and states. Generated on the
// first run, then reviewed like any other snapshot change.

const { Invalid: TextFieldInvalid } = composeStories(textFieldStories)
const { Invalid: CheckboxGroupInvalid } = composeStories(checkboxGroupStories)
const { Invalid: SelectInvalid } = composeStories(selectStories)
const { Default: FileListDefault } = composeStories(fileListStories)

describe('accessibility tree snapshots', () => {
  it('TextField, invalid', async () => {
    const { container } = await render(<TextFieldInvalid />)
    await expect.element(container).toMatchAriaInlineSnapshot(`
      - text: Label Description Något blev fel
      - textbox "Label"
    `)
  })

  it('CheckboxGroup, invalid', async () => {
    const { container } = await render(<CheckboxGroupInvalid />)
    await expect.element(container).toMatchAriaInlineSnapshot(`
      - group "Etikett":
        - text: Etikett Beskrivning Du måste välja en frukt
        - checkbox "Banan"
        - text: Banan
        - checkbox "Apple"
        - text: Apple
        - checkbox "Mango"
        - text: Mango
    `)
  })

  it('Select, invalid', async () => {
    const { container } = await render(<SelectInvalid />)
    await expect.element(container).toMatchAriaInlineSnapshot(`
      - text: Label Description Error msg
      - button "Select an option Label": Select an option
    `)
  })

  it('FileList', async () => {
    const { container } = await render(<FileListDefault />)
    await expect.element(container).toMatchAriaInlineSnapshot(`
      - list "Uploaded files":
        - listitem:
          - text: resume.pdf 1.2 MB
          - button "Remove resume.pdf"
        - listitem:
          - text: cover-letter.docx 45 KB
          - button "Remove cover-letter.docx"
        - listitem:
          - text: references.pdf 3.4 MB
          - button "Remove references.pdf"
    `)
  })
})
