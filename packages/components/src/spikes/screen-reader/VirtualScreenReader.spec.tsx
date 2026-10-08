import { afterEach, describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { virtual } from '@guidepup/virtual-screen-reader'
import { render } from '../../../test-utils'
import * as textFieldStories from '../../textfield/TextField.stories'
import * as checkboxGroupStories from '../../checkbox/CheckboxGroup.stories'
import * as fileListStories from '../../file-list/FileList.stories'

// Spike: a simulated screen reader walks the rendered story the way a user
// would with "next item" and logs what it would say. Not NVDA, but it reads
// descriptions, errors and live regions, which aria snapshots don't.

const { Invalid: TextFieldInvalid } = composeStories(textFieldStories)
const { Invalid: CheckboxGroupInvalid } = composeStories(checkboxGroupStories)
const { Default: FileListDefault } = composeStories(fileListStories)

const readAll = async (container: HTMLElement) => {
  await virtual.start({ container })
  // Walk with "next item" until it wraps back to the start. A node can be
  // read twice ("listitem" and "end of listitem"), so the start is matched on
  // node and phrase. Capped, so a walk that never wraps can't loop forever
  const firstNode = virtual.activeNode
  const firstPhrase = await virtual.lastSpokenPhrase()
  for (let step = 0; step < 200; step++) {
    await virtual.next()
    if (
      virtual.activeNode === firstNode &&
      (await virtual.lastSpokenPhrase()) === firstPhrase
    ) {
      break
    }
  }
  // The last phrase is the first node again, read after wrapping
  return (await virtual.spokenPhraseLog()).slice(0, -1)
}

afterEach(async () => {
  await virtual.stop()
})

describe('virtual screen reader output', () => {
  it('TextField, invalid', async () => {
    const { container } = await render(<TextFieldInvalid />)
    expect(await readAll(container)).toMatchInlineSnapshot(`
      [
        "Label",
        "Description",
        "Något blev fel",
        "textbox, Label, Description Något blev fel, invalid",
      ]
    `)
  })

  it('CheckboxGroup, invalid', async () => {
    const { container } = await render(<CheckboxGroupInvalid />)
    expect(await readAll(container)).toMatchInlineSnapshot(`
      [
        "group, Etikett, Beskrivning Du måste välja en frukt",
        "Etikett",
        "Beskrivning",
        "Du måste välja en frukt",
        "checkbox, Banan, Du måste välja en frukt Beskrivning, not checked, invalid",
        "Banan",
        "checkbox, Apple, Du måste välja en frukt Beskrivning, not checked, invalid",
        "Apple",
        "checkbox, Mango, Du måste välja en frukt Beskrivning, not checked, invalid",
        "Mango",
        "end of group, Etikett, Beskrivning Du måste välja en frukt",
      ]
    `)
  })

  it('FileList', async () => {
    const { container } = await render(<FileListDefault />)
    expect(await readAll(container)).toMatchInlineSnapshot(`
      [
        "list, Uploaded files",
        "listitem, level 1, position 1, set size 3",
        "resume.pdf",
        "1.2 MB",
        "button, Remove resume.pdf",
        "end of listitem, level 1, position 1, set size 3",
        "listitem, level 1, position 2, set size 3",
        "cover-letter.docx",
        "45 KB",
        "button, Remove cover-letter.docx",
        "end of listitem, level 1, position 2, set size 3",
        "listitem, level 1, position 3, set size 3",
        "references.pdf",
        "3.4 MB",
        "button, Remove references.pdf",
        "end of listitem, level 1, position 3, set size 3",
        "end of list, Uploaded files",
      ]
    `)
  })
})
