import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { composeStories } from '@storybook/react-vite'
import { Settings } from 'lucide-react'
import { HeaderActions } from './HeaderActions'
import { HeaderAction } from '../header-action'
import * as stories from './HeaderActions.stories'

const { Primary, Vertical } = composeStories(stories)

const getAction = async (Story: typeof Primary) => {
  const { getByRole } = await render(<Story />)
  const action = getByRole('button', { name: 'Notiser' })
  return {
    action: action.element().getBoundingClientRect(),
    icon: action.element().querySelector('svg')!.getBoundingClientRect(),
    label: action.getByText('Notiser'),
  }
}

describe('given HeaderActions on a large screen', () => {
  beforeEach(({ skip, task }) => {
    skip(
      task.file.projectName.startsWith('mobile'),
      'Labels are hidden on small screens',
    )
  })

  it('puts the label next to the icon by default', async () => {
    const { icon, label } = await getAction(Primary)

    await expect.element(label).toBeVisible()
    expect(icon.right).toBeLessThanOrEqual(
      label.element().getBoundingClientRect().left,
    )
  })

  it('puts the label under the icon when vertical', async () => {
    const { icon, label } = await getAction(Vertical)

    await expect.element(label).toBeVisible()
    expect(icon.bottom).toBeLessThanOrEqual(
      label.element().getBoundingClientRect().top,
    )
  })
})

describe('given HeaderActions on a small screen', () => {
  beforeEach(({ skip, task }) => {
    skip(
      task.file.projectName.startsWith('desktop'),
      'Labels are shown on large screens',
    )
  })

  it.each([
    ['horizontal', Primary],
    ['vertical', Vertical],
  ])('collapses a %s action to its icon', async (_, Story) => {
    const { action } = await getAction(Story)

    expect({ width: action.width, height: action.height }).toEqual({
      width: 40,
      height: 40,
    })
  })
})

describe('given an icon-only HeaderAction', () => {
  it('is 40 by 40', async () => {
    const { getByRole } = await render(
      <HeaderActions>
        <HeaderAction
          aria-label='Inställningar'
          icon={<Settings size={20} />}
        />
      </HeaderActions>,
    )
    const { width, height } = getByRole('button', { name: 'Inställningar' })
      .element()
      .getBoundingClientRect()

    expect({ width, height }).toEqual({ width: 40, height: 40 })
  })
})
