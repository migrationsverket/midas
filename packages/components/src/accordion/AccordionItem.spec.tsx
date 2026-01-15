import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './AccordionItem.stories'
import { render } from 'vitest-browser-react'

const { Success, Info, Warning, Important } = composeStories(stories)

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
