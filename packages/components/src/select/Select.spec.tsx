import { render, RenderResult, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Select } from './'
import user from '../../tests/utils/user'
import { renderWithForm } from '../../tests/utils/browser'

const fruits = [
  'Apple',
  'Banana',
  'Kiwi',
  'Elderflower',
  'Nectarine',
  'Watermelon',
  'Pineapple',
  'Apricot',
  'Cloudberry',
  'Mango',
  'Strawberry',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Cherry',
  'Peach',
  'Plum',
  'Grape',
  'Orange',
  'Lemon',
  'Lime',
  'Coconut',
  'Fig',
  'Papaya',
  'Guava',
  'Pomegranate',
  'Dragonfruit',
  'Starfruit',
  'Passionfruit',
]

const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})

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
        selectionMode={'single'}
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
    expect(onchange).toHaveBeenCalledWith('kiwi')
  })
})

describe('An empty single Select', () => {
  beforeEach(() => {
    render(
      <Select
        label={label}
        selectionMode={'single'}
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
  })
})

describe('A multi Select', () => {
  beforeEach(() => {
    baseElement = render(
      <Select
        label={label}
        selectionMode={'multiple'}
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
    expect(onchange).toHaveBeenCalledWith(['apple'])
    expect(screen.getByDisplayValue('Apple')).toBeInTheDocument()
    expect(screen.queryByDisplayValue('Banana')).not.toBeInTheDocument()
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[Enter]')
    expect(onchange).toHaveBeenCalledWith(['apple', 'banana'])
    expect(screen.getByDisplayValue('Apple')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Banana')).toBeInTheDocument()
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
  })
})

describe('given an invalid select', () => {


  beforeEach(() => {
    baseElement = render(
      <Select
        label={label}
        selectionMode={'single'}
        options={options}
        isInvalid={true}
        errorMessage={'error'}
      />,
    )
  })
  it('should be in invalid state', () => {
    expect(screen.getByLabelText(label)).toBeInvalid()
  })
  it('should should display error message', async () => {
    expect(screen.getByText('error')).toBeInTheDocument()
  })
})
