import { render, RenderResult, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Select } from './'
import user from '../../tests/utils/user'

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
  'Passionfruit'
]

const options = fruits.map(fruit => {
  return { name: fruit, id: fruit.toLocaleLowerCase() }
})
let baseElement: RenderResult<
  typeof import('@testing-library/dom/types/queries'),
  HTMLElement,
  HTMLElement
>
const onchange = jest.fn()

describe('Select', () => {
  beforeEach(() => {
    baseElement = render(
      <Select
        label={'Label for select'}
        selectionMode={'single'}
        options={options}
        onSelectionChange={onchange}
      />
    )
  })
  it('should render successfully', () => {
    expect(baseElement).toBeTruthy()
  })
  it('should have no axe violations', async () => {
    expect(
      await axe(screen.getByLabelText('Label for select'))
    ).toHaveNoViolations()
  })
  it('should be possible to select a value using keyboard', async () => {
    const selectButton: HTMLButtonElement =
      screen.getByLabelText('Label for select')

    expect(selectButton).toBeInTheDocument()
    expect(selectButton).not.toHaveFocus()
    await user.tab()
    expect(selectButton).toHaveFocus()
    await user.keyboard('[Enter]')
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[ArrowDown]')
    await user.keyboard('[Enter]')
    await user.keyboard('[Esc]')
    expect(onchange).toHaveBeenCalledWith(['kiwi'])
  })
})
