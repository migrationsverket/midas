import { render, RenderResult, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Select } from './'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'
import { options } from './utils'

const label = 'label for select'

let baseElement: RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>
const onchange = jest.fn()

describe('A single Select', () => {
  beforeEach(() => {
    baseElement = render(
      <Select
        label={label}
        selectionMode='single'
        options={options}
        onSelectionChange={onchange}
      />,
    )
  })
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy()
  })
  it('should have no axe violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
  it('should be possible to select a value using keyboard', async () => {
    const selectButton: HTMLButtonElement = screen.getByLabelText(label)

    expect(selectButton).toBeInTheDocument()
    expect(selectButton).not.toHaveFocus()
    await user.tab()
    expect(selectButton).toHaveFocus()
    await user.keyboard('[Enter]')
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[Enter]')
    await user.keyboard('[Esc]')
    expect(onchange).toHaveBeenCalledWith(
      expect.objectContaining(new Set(['kiwi'])),
    )
  })
})

describe('An empty single Select', () => {
  beforeEach(() => {
    render(
      <Select
        label={label}
        selectionMode='single'
        options={[]}
      />,
    )
  })

  it('should render successfully', () => {
    expect(screen.getByLabelText(label)).toBeTruthy()
  })

  it('should have no axe violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
})

describe('given a required single Select', () => {
  beforeEach(() => {
    renderWithForm(
      <Select
        label={label}
        isRequired
        options={options}
        selectionMode='single'
      />,
    )
  })

  it('should give a validation error if the user submitted without selecting an option', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    // JSDOM Native required validation message
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()

    await user.keyboard('[Space]')
    await user.keyboard('[Space]')
    await user.tab()
    await user.keyboard('[Enter]')

    expect(
      screen.queryByText(/Constraints not satisfied/),
    ).not.toBeInTheDocument()
  })
})

describe('A multi Select', () => {
  beforeEach(() => {
    onchange.mockReset()
    baseElement = render(
      <Select
        label={label}
        selectionMode='multiple'
        options={options}
        onSelectionChange={onchange}
      />,
    )
  })
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy()
  })
  it('should have no axe violations', async () => {
    expect(await axe(screen.getByLabelText(label))).toHaveNoViolations()
  })
  it('should be possible to select two values using keyboard', async () => {
    const selectButton: HTMLButtonElement = screen.getByLabelText(label)

    expect(selectButton).toBeInTheDocument()
    expect(selectButton).not.toHaveFocus()
    await user.tab()
    expect(selectButton).toHaveFocus()
    await user.keyboard('[Enter]')
    await user.keyboard('[Enter]')
    expect(onchange).toHaveBeenCalledWith(
      expect.objectContaining(new Set(['äpple'])),
    )
    expect(screen.getByDisplayValue('Äpple')).toBeInTheDocument()
    expect(screen.queryByDisplayValue('Banan')).not.toBeInTheDocument()
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[Enter]')
    expect(onchange).toHaveBeenCalledWith(
      expect.objectContaining(new Set(['äpple', 'banan'])),
    )
    expect(screen.getByDisplayValue('Äpple')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Banan')).toBeInTheDocument()
  })
})

describe('given a required multi Select', () => {
  beforeEach(() => {
    renderWithForm(
      <Select
        label={label}
        isRequired
        options={options}
        selectionMode='multiple'
      />,
    )
  })

  it('should give a validation error if the user submitted without selecting an option', async () => {
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    // JSDOM Native required validation message
    expect(screen.getByText(/Constraints not satisfied/)).toBeInTheDocument()

    await user.keyboard('[Space]')
    await user.keyboard('[Space]')
    await user.keyboard('[Escape]')
    await user.tab()
    await user.tab()
    await user.keyboard('[Enter]')

    expect(
      screen.queryByText(/Constraints not satisfied/),
    ).not.toBeInTheDocument()
  })
})

describe('given an invalid select', () => {
  beforeEach(() => {
    baseElement = render(
      <Select
        label={label}
        selectionMode='single'
        options={options}
        isInvalid={true}
        errorMessage='error'
      />,
    )
  })

  it('should should display error message', async () => {
    expect(screen.getByText('error')).toBeInTheDocument()
  })
})
