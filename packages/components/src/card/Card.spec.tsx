import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Card, CardProps } from './'

const link = { children: 'Läs mer', href: '#' }

describe('given a default card', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <CardTest
        title={'Rubrik'}
        content={'Lorem ipsum'}
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

describe('given a card with background', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <CardTest
        title={'Rubrik'}
        content={'Lorem ipsum'}
        background
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

// TODO: maybe add proper image
describe('given a card with image', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <CardTest
        title={'Rubrik'}
        content={'Lorem ipsum'}
        image={{ source: '', description: '' }}
        link={link}
      />
    )
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})

const CardTest = (props: CardProps) => <Card {...props} />
