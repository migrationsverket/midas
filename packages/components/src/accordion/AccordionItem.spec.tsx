import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './AccordionItem.stories'
import { render } from '../../test-utils'

const { Default, Success, Info, Warning, Important } = composeStories(stories)

describe('given a Default AccordionItem', async () => {
  it('should accept a function as children', async () => {
    const { getByRole, getByText } = await render(
      <Default>
        {({ isExpanded }) => (isExpanded ? 'Im expanded' : 'Im not expanded')}
      </Default>,
    )
    await expect.element(getByText('Im not expanded')).toBeInTheDocument()
    await getByRole('button').click()
    await expect.element(getByText('Im not expanded')).not.toBeInTheDocument()
    await expect.element(getByText('Im expanded')).toBeVisible()
  })
})

describe('given an AccordionItem with type = "success"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Success />)
    await expect.element(getByLabelText('okay')).toBeInTheDocument()
  })

  it('should be possible to replace the aria-label for the icon', async () => {
    const { getByLabelText } = await render(
      <Success iconAriaLabel='bekräftat' />,
    )
    await expect.element(getByLabelText('bekräftat')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "info"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Info />)
    await expect.element(getByLabelText('information')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "warning"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Warning />)
    await expect.element(getByLabelText('warning')).toBeInTheDocument()
  })
})

describe('given an AccordionItem with type = "important"', async () => {
  it('should provide an aria-label for the icon', async () => {
    const { getByLabelText } = await render(<Important />)
    await expect
      .element(getByLabelText('important information'))
      .toBeInTheDocument()
  })
})
