import { describe, expect, it } from 'vitest'
import { useState } from 'react'
import {
  collectAnnouncements,
  readAll,
} from '@midas-ds/test-utils/screen-reader'
import { render } from '../../../test-utils'

describe('readAll', () => {
  it('reads every item once, in order, and stops when it wraps', async () => {
    const { container } = await render(
      <ul aria-label='Steg'>
        <li>Ett</li>
        <li>Två</li>
      </ul>,
    )
    expect(await readAll(container)).toEqual([
      'list, Steg',
      'listitem, level 1, position 1, set size 2',
      'Ett',
      'end of listitem, level 1, position 1, set size 2',
      'listitem, level 1, position 2, set size 2',
      'Två',
      'end of listitem, level 1, position 2, set size 2',
      'end of list, Steg',
    ])
  })
})

describe('collectAnnouncements', () => {
  const Uploader = () => {
    const [done, setDone] = useState(false)
    return (
      <>
        <button onClick={() => setDone(true)}>Ladda upp</button>
        <div role='status'>{done && 'Uppladdning klar: resume.pdf'}</div>
      </>
    )
  }

  it('returns the live region announcements an action causes', async () => {
    const { container, getByRole } = await render(<Uploader />)
    expect(
      await collectAnnouncements(container, () => getByRole('button').click()),
    ).toEqual(['polite: Uppladdning klar: resume.pdf'])
  })

  it('returns nothing when the action announces nothing', async () => {
    const { container } = await render(<Uploader />)
    expect(
      await collectAnnouncements(container, () => {
        // noop
      }),
    ).toEqual([])
  })
})
