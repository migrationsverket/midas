import { describe, expect, it } from 'vitest'
import { insertChildren } from './childrenSource'

const children = '{item => <MenuItem>{item.name}</MenuItem>}'

describe('insertChildren', () => {
  it('should put the children into a tag that spans several lines', () => {
    const code = [
      '<MenuPopover>',
      '  <Menu',
      '    items={[',
      '      {',
      '        id: 1',
      '      }',
      '    ]}',
      '   />',
      '</MenuPopover>',
    ].join('\n')

    expect(insertChildren(code, 'Menu', children)).toBe(
      [
        '<MenuPopover>',
        '  <Menu',
        '    items={[',
        '      {',
        '        id: 1',
        '      }',
        '    ]}',
        '  >',
        '    {item => <MenuItem>{item.name}</MenuItem>}',
        '  </Menu>',
        '</MenuPopover>',
      ].join('\n'),
    )
  })

  it('should put the children into a tag on one line', () => {
    expect(insertChildren('<Menu items={items} />', 'Menu', children)).toBe(
      [
        '<Menu items={items}>',
        '  {item => <MenuItem>{item.name}</MenuItem>}',
        '</Menu>',
      ].join('\n'),
    )
  })

  it('should leave a tag with children of its own alone', () => {
    const code = [
      '<Menu',
      '  label="x"',
      '>',
      '  <MenuItem />',
      '</Menu>',
    ].join('\n')
    expect(insertChildren(code, 'Menu', children)).toBe(code)
  })

  it('should not mistake a tag that starts the same way', () => {
    const code = '<MenuTrigger />'
    expect(insertChildren(code, 'Menu', children)).toBe(code)
  })
})
